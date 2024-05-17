import { Request, Response } from "express";

import Expense, { IExpense } from "../models/expense";

export const createExpense = async (req: Request, res: Response) => {
    const expenseData : IExpense = req.body;

    const {description, amount, id} = expenseData;

    if (!description || !amount || !id) {
         res.json({
            msg: "Faltan datos"
        })
        return;
    }
    const expensesOnDB = await Expense.findOne({ id:id });

    if (expensesOnDB) {
        res.json({
            msg: "Ya existe un gasto para este usuario"
        })
        return;
    }

    const expense = new Expense(expenseData);

    await expense.save();

    res.json({
        msg: "Gasto creado con exito",
    })
}
