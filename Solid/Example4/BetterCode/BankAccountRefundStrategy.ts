import RefundStrategy from "./RefundStrategy";

export default class BankAccountRefundStrategy implements RefundStrategy {
    doRefund(): void {
        console.log(`Do refund with the bank account`);
    }
}