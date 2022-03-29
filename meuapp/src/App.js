import React, { Component } from 'react';

//Crie um component de class
class App extends Component {
  // Crie uma arrow function que receba uma mensagem e exiba na tela
  mensagem = () => {
    const msg = 'Ola mundo';
    return msg;
  };

  // Crie uma arrow function que retorne o dobro de um número e exiba na tela
  dobroNumero = (numero) => {
    return numero * 2;
  };

  render() {
    return (
      <div>
        <h1>{this.mensagem()}</h1>
        <h1>{this.dobroNumero(156)}</h1>
      </div>
    );
  }
}
export default App;
