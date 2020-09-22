import React, { useState } from "react";
import axios from "axios";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #507bff;
    color: #507bff;
    float: right;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `};
  `;

export default (props) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");

  const enderecoC = {
    "bairro" : bairro,
    "cep" : cep,
    "cidade" : cidade,
    "complemento" : complemento,
    "estado" : estado,
    "numero" : numero,
    "rua" : rua,
  }

  async function novaCliente() {
    var variavel
    var cliente = {
      "nome": nome,
      "cpf": cpf,
      "email": email,
      "usuario": usuario,
      "dataNascimento": nascimento,
      "endereco": enderecoC
    }
    console.log(cliente);
    axios
      .post("http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/cliente", cliente)
      .then((variavel) => {
        props.setNovo(props.novo + 1);
        console.log(variavel);
      })
      .catch((error) => {
        console.log(variavel);
      });
  }

  

  return (
    <Container md="auto">
      <div>
      <h2>Novo Cliente</h2>
        <InputGroup
          className="mb-3"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Nome
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(cpf) => setCpf(cpf.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              CPF
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(email) => setEmail(email.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              E-mail
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(usuario) => setUsuario(usuario.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Usuário
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(nascimento) => setNascimento(nascimento.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Data de nascimento
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <h2>Endereço</h2>
        <InputGroup
          className="mb-3"
          onChange={(bairro) => setBairro(bairro.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Bairro
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(cep) => setCep(cep.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              CEP
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(cidade) => setCidade(cidade.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Cidade
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(complemento) => setComplemento(complemento.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Complemento
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(estado) => setEstado(estado.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Estado
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(numero) => setNumero(numero.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Número
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
          onChange={(rua) => setRua(rua.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Rua
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button onClick={() => novaCliente()}>Salvar</Button>
      </div>
    </Container>
  );
};