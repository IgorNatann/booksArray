let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscasrLivrosDaApi()

async function getBuscasrLivrosDaApi() {
    const resp = await fetch(endpointDaApi)
    livros = await resp.json()
    console.log(livros);
}