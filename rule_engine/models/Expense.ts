import { ExpenseType } from "./ExpenseType";

// Ideally made using a builder pattern
export default class Expense {
    #expenseId: string;
    #tripId: string;
    #amountUsd: string;
    #expenseType: ExpenseType;
    
    constructor(expenseId: string, tripId: string, amountUsd: string, expenseType: ExpenseType) {
        this.#expenseId = expenseId;
        this.#tripId = tripId;
        this.#amountUsd = amountUsd;
        this.#expenseType = expenseType;
    }
    
    getAmountUsd(): string {
        return this.#amountUsd;
    }

    getTripId(): string {
        return this.#tripId;
    }

    getExpenseId(): string {
        return this.#expenseId;
    }

    getExpenseType(): ExpenseType {
        return this.#expenseType;
    }
}