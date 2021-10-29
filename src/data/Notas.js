export default class Notas{
    constructor(){
        this.notes = [];
        this._inscritos =[]
    }

    addNota(titulo, nota, categoria){
        const novaNota = new Nota(titulo, nota, categoria)
        this.notes.push(novaNota)
        this.notificar()
    }

    apagarNota(index){
        this.notes.splice(index, 1)
        this.notificar()
    }

    inscrever(func){
       this._inscritos.push(func)
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }


    notificar(){
        this._inscritos.forEach(e => e(this.notes))
    }
}
class Nota{
        constructor(titulo, nota, categoria){
            this.titulo = titulo
            this.nota = nota
            this.categoria = categoria
        }
}

