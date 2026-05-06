import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";
import RefundStrategy from "./RefundStrategy";

export default class VisaCreditCard extends CreditCard implements RefundCompatibleCreditCard {
    #refundStrategy: RefundStrategy;

    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number, refundStrategy: RefundStrategy) {
        super(cardNumber, cardHolder, expiryDate, cvv);
        this.#refundStrategy = refundStrategy;
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Visa card");
    }

    onlinePayment(): void {
        console.log("Online payment with Visa card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Visa card");
    }

    doRefund(): void {
        this.#refundStrategy.doRefund();
    }
}