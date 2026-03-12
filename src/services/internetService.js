export async function testarConexao() {

    try {
        await fetch("https://api.github.com")

        return true
    } catch {
        return false
    }

}