export const somma = (a: number, b: number): number => {
    return a + b;
}

export default function moltiplicazione(a: number, b: number): number {
    return a * b;
}

// spread
export const sommaMultipla = (...numeri: number[]): number => {
    let r = 0;

    for (const n of numeri) {
        r += n;
    }

    return r;
}

export const PI = 3.14;

export interface IPersona {
    nome: string;
    cognome: string;
}

export class PippoComponent {

}

export const todos = [
    {
        id: 1,
        text: "ciao"
    },
    {
        id: 2,
        text: "pippo"
    }
]

