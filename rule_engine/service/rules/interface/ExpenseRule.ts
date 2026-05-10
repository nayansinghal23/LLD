import Expense from "../../../models/Expense";
import Approved from "../success/Approved";
import Rejected from "../error/Rejected";

// Not making class else if any expense doesn't have any rule, then it will have to forcefully return a violation

export default interface ExpenseRule {
    check(expense: Expense): Approved | Rejected;
}