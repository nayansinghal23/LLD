import RefundStrategy from "./RefundStrategy";

export default class SameInstrumentRefundStrategy implements RefundStrategy {
    doRefund(): void {
        console.log("Do refund with the same instrument");
    }
}