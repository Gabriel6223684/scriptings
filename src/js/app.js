import { testarConexao } from "../services/internetService.js"

async function verificar() {

    const conectado = await testarConexao()

    if (conectado) {
        console.log("Servidor acessível")
    } else {
        console.log("Servidor offline")
    }

}

verificar()