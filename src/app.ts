import molt, { somma, sommaMultipla } from "./matematica";
import * as mate from "./matematica";
// import molt from "./matematica";

// console.log(somma(3, 9));
// console.log(sommaMultipla(1, 3, 7, 34, -4, 0))
// console.log(molt(4, 9));

// console.log(mate.default(6, 8));

// mate.todos[0].text = "mario";
// console.log(mate.todos);

// console.log("Ciao", "siamo", "nel", new Date().getFullYear(), true);
// console.log("TODO:", []);

import * as myOs from "./es-os";
myOs.logHostName();
myOs.logUserHomeDir();
myOs.logUserName();

console.log("==============");
import myPath from "./es-path";
myPath();

console.log("==============");
import myUrl from "./es-url";
myUrl();

console.log("==============");
import myProcess from "./es-process";
myProcess();

document.addEventListener("click", () => { console.log("ii") });