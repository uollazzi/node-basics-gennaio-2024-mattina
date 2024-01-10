import os from "node:os"; // os => operating system
import { somma, moltiplicazione } from "./matematica";
import * as mate from "./matematica";

console.log(os.hostname());

console.log(somma(4, 5));
console.log(moltiplicazione(4, 9));

console.log(mate.somma(6, 8));