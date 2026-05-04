import { Notification } from "./Notification";

export class SMSNotification implements Notification {
    sendMessage(message: string) {
        console.log("SMS : ", message);
    }
};