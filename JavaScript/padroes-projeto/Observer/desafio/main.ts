import { EmailNotifier } from "./EmailNotifier";
import { EventManager } from "./EventManager";
import { SmsNotifier } from "./SmsNotifier";

function main() {
    try {
        // 1. Criar uma instância do EventManager
        const eventManager = new EventManager();

        // 2. Criar instâncias de EmailNotifier e SmsNotifier
        const emailNotifier = new EmailNotifier();
        const smsNotifier = new SmsNotifier();

        // 3. Adicionar os notifiers como observers no EventManager
        eventManager.addListener("eventoImportante", emailNotifier);
        eventManager.addListener("eventoImportante", smsNotifier);

        // 4. Disparar alguns eventos e observar a notificação dos observers
        eventManager.notifyListeners("eventoImportante", "09/09/2024");

        console.log("--------------------------")
        eventManager.removeListener("eventoImportante", emailNotifier)

        eventManager.notifyListeners("eventoImportante", "30/09/2024");

        eventManager.addListener("eventoMuitoImportante", emailNotifier)

        eventManager.notifyListeners("eventoMuitoImportante", "19/09/2024");

        // Testar outro evento (opcional)
        eventManager.notifyListeners("outroEvento", "sem data");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Erro ao criar notificação: ", error.message);
        } else {
            console.error("Erro desconhecido:", error);
        }
    }
}

main();