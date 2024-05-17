import { Router } from "express";
import { createExpense } from "../controllers/expenses";

const expensesRouter = Router();

expensesRouter.post("/", createExpense);

export default expensesRouter