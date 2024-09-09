import { Listener } from "./Listener"

export class EventManager {
    private listeners: { [eventType: string]: Listener[] } = {};

    public addListener(eventType: string, listener: Listener): void {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = []; 
        }
        this.listeners[eventType].push(listener);
    }

    public removeListener(eventType: string, listeners: Listener){
        if (!this.listeners[eventType]) {
            throw new Error(`Evento ${eventType} não adicionado!`)
        }
        const index = this.listeners[eventType].indexOf(listeners)
        this.listeners[eventType].splice(index, 1);
    }

    public notifyListeners(eventType: string, data: any){
        if (!this.listeners[eventType]) {
            throw new Error(`Evento ${eventType} não adicionado!`)
        }
        for (let index = 0; index < this.listeners[eventType].length; index++) {
            this.listeners[eventType][index].update(eventType, data);
        }
    }
}