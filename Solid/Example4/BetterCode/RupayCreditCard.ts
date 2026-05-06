import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";
import RefundStrategy from "./RefundStrategy";
import UpiCompatibleCreditCard from "./UpiCompatibleCreditCard";

export default class RupayCreditCard extends CreditCard implements UpiCompatibleCreditCard, RefundCompatibleCreditCard {
    #refundStrategy: RefundStrategy;

    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number, refundStrategy: RefundStrategy) {
        super(cardNumber, cardHolder, expiryDate, cvv);
        this.#refundStrategy = refundStrategy;
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Rupay card");
    }

    onlinePayment(): void {
        console.log("Online payment with Rupay card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Rupay card");
    }

    upiPayment(): void {
        console.log("UPI payment with Rupay card");
    }

    doRefund(): void {
        this.#refundStrategy.doRefund();
    }
}