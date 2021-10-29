import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./data/Categorias"
import Notas from "./data/Notas"
class App extends Component {
  constructor() {
    super();
    // Estamos atribuindo dados de outras classes aqui no constructor
    this.categorias = new Categorias()
    this.notas = new Notas()
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categoria={this.categorias} // Aponta para as classes construtoras
        criarNota={this.notas.addNota.bind(this.notas)}
         />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.addCategorias.bind(this.categorias)} 
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas}
            categorias={this.categorias.categorias}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
