import process from "node:process";

export default () => {
    console.log("processId:", process.pid);

    console.log("current directory:", process.cwd());
    console.log("percorso eseguibile:", process.argv0);
    console.log("argomenti:", process.argv);
    console.log("istruzione:", process.argv[2]);
    console.log("schematic:", process.argv[3]);
    console.log("nome:", process.argv[4]);

    if (process.argv[2] == "generate") {
        // genero i files
        console.log("generazione", process.argv[3], "di nome", process.argv[4]);
    } else if (process.argv[2] == "new") {
        console.log("Creazione APP", process.argv[3]);
    }
}