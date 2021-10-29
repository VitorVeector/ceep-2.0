export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func); //Método para adicionar uma função à um array
        
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.categorias)) // Para cada função executada, chamará o this.categorias como parâmetro
    }

    addCategorias(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}
