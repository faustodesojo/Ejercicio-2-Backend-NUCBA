import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import Expense from "../models/expense";

export const getUser = async ({}, res: Response) => {
    const conditions = {estado:true};

    const users = await User.find(conditions).populate("expenses", "description amount");

    res.json({
        users
    })
}

export const getUserById = async (req: Request, res: Response) => {

    const { _id } = req.params;
    const users: IUser | null = await User.findOne({ _id: _id });
    
    res.json({
        users
    })
}

export const createUser = async (req: Request, res: Response) => {
    const userData : IUser = req.body;
    
    const {username, email, password, expenses} = userData;

    const expensesData = await Expense.find({ description:{ $in: expenses }});

    if(!username || !email || !password || !expensesData) {
        res.json({
            msg: "Faltan datos"
        })
        return;
    }

    const userOnDB = await User.findOne({ email: email });

    if (userOnDB) {
        res.json({
            msg: "Ya existe el usuario"
        })
        return;
    }
    
    const expensesIds = expensesData.map(expense => expense._id);
    
    const user = new User(
        {
            username,
            email,
            password,
            expenses: expensesIds
        }
    );

    await user.save();

    res.json({
        user
    })
    console.log("Usuario creado");
}