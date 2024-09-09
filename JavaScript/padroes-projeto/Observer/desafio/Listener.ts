export interface Listener {
    update(eventType: string, data: any): void;
}