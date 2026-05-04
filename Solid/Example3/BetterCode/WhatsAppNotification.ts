import { Notification } from "./Notification";

export class WhatsAppNotification implements Notification {
    sendMessage(message: string) {
        console.log("WhatsApp : ", message);
    }
};