import { Listener } from "./Listener";

export class SmsNotifier implements Listener {

    update(eventType: string, data: any): void {
        console.log(`Notificação por SMS do evento ${eventType} com data ${data}`)
    }

}