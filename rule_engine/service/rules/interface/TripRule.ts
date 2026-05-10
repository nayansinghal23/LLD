import Expense from "../../../models/Expense";
import Ok from "../success/Ok";
import Violation from "../error/Violation";

export default interface TripRule {
    check(expenses: Expense[]): Violation | Ok
}