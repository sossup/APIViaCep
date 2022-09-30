"use strict";

const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("localidade").value = endereco.localidade;
  document.getElementById("ddd").value = endereco.ddd;
  document.getElementById("ibge").value = endereco.ibge;
  document.getElementById("uf").value = endereco.uf;
};

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json();
  preencherFormulario(endereco);
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);
