import { Notification } from "./Notification";

export class PushNotification implements Notification {
    sendMessage(message: string) {
        console.log("Push : ", message);
    }
};