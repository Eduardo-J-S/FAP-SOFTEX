import { Listener } from "./Listener";

export class EmailNotifier implements Listener {
    
    update(eventType: string, data: any): void {
        console.log(`Notificação por e-mail do evento ${eventType} com data ${data}`)
    }

}