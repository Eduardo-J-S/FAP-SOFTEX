import { randomVehicleAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const customerNames = ["Ana", "Joana", "HElena", "João"]

for (let index = 0; index < 10; index++) {
    const vehicle = randomVehicleAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)]
    vehicle.pickUp(name);
    vehicle.stop();
    console.log("---")
}