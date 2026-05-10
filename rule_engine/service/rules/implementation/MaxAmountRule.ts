import Expense from "../../../models/Expense";
import Approved from "../success/Approved";
import ExpenseRule from "../interface/ExpenseRule";
import Rejected from "../error/Rejected";

export default class MaxAmountRule implements ExpenseRule {
  #maxAmount: number;

  constructor(maxAmount: number) {
    this.#maxAmount = maxAmount;
  }

  check(expense: Expense): Approved | Rejected {
    const amount = parseFloat(expense.getAmountUsd());

    if (amount > this.#maxAmount) {
      return Rejected.of(
        `Expense amount ${amount} is greater than the max amount ${this.#maxAmount}.`,
      );
    }

    return Approved.of("Max amount rule passed.");
  }
}
