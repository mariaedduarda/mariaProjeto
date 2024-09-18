const nomes = ["Maria Eduarda", "Eduardo","Olivia","Carla","Felipe","Gabriel","Julia"]


export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)