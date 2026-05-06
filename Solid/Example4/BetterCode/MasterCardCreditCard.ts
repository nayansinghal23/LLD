import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";
import RefundStrategy from "./RefundStrategy";

export default class MasterCardCreditCard extends CreditCard implements RefundCompatibleCreditCard {
    #refundStrategy: RefundStrategy;

    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number, refundStrategy: RefundStrategy) {
        super(cardNumber, cardHolder, expiryDate, cvv);
        this.#refundStrategy = refundStrategy;
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Mastercard");
    }

    onlinePayment(): void {
        console.log("Online payment with Mastercard");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Mastercard");
    }

    doRefund(): void {
        this.#refundStrategy.doRefund();
    }
}