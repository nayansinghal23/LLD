import Expense from "../../../models/Expense";
import Ok from "../success/Ok";
import TripRule from "../interface/TripRule";
import Violation from "../error/Violation";

export default class TripTotalMaxRule implements TripRule {
  #maxAmount: number;

  constructor(maxAmount: number) {
    this.#maxAmount = maxAmount;
  }

  check(expenses: Expense[]): Violation | Ok {
    const totalAmount = expenses.reduce(
      (acc: number, e: Expense) => (acc += parseFloat(e.getAmountUsd())),
      0,
    );

    if (totalAmount < this.#maxAmount) {
      return Ok.of("Trip total max rule passed.");
    }

    return Violation.of(
      `Trip total amount ${totalAmount} exceeds max amount ${this.#maxAmount}.`,
    );
  }
}
