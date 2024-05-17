import { Model, Schema, model } from "mongoose";

export interface IExpense {
    amount: number;
    id: string;
    description: string;
}

const ExpenseSchema = new Schema<IExpense>({
    amount: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Expense: Model<IExpense> = model<IExpense>("Expense", ExpenseSchema);

export default Expense;
