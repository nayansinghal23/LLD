import { Notification } from "./Notification";

export class EmailNotification implements Notification {
    sendMessage(message: string) {
        console.log("Email : ", message);
    }
};