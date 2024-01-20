import { useState } from 'react'
import React from 'react'

function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  const dados = luana;
  const total = dados.compras.map(item => 
    Number(item.preco.replace("R$ ", ""))).reduce((a,b) => a+b)
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: 
        <span style={{color: dados.ativa ? 'green': 'red'}}>{dados.ativa ? 'Ativo': 'Inativo'}</span>
      </p>
      <p>Total: {total}</p>
      {total > 10000 && <p>Esta gastando demais</p>}
    </>
  )
}

export default App
