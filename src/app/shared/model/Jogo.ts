class Jogo{
    constructor(
        public  id?: number,
        public  titulo?:string,
        public  empresa?: Empresa,
        public  genero?: Genero[],
        public  console?: Plataforma[],
        public  sinopse?: string,
        public  urlFoto?: string,
        public  nota?: number
    ){

    }
}

class Empresa{
    constructor(
        public  id?: number,
        public  nome?: string,
        public  ano?: string
    ){}

    
}
class Genero{
    constructor(
        public  id?: number,
        public  genero?:string,
    ){}
}

class Plataforma{
    constructor(
        public  id?: number,
        public  nome?:string,
        public  fabricante?:string,
        public  ano?:string,
    ){}
}
