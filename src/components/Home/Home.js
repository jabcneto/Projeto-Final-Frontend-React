import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import "./Home.css";

function Home() {
  return (
    <Jumbotron fluid style={{ height: '1px' }}>
      <Container>
        <h1>Editora Castor®</h1>
        <p>Somos um grupo de amantes de livros ambiciosos, e decidimos criar uma editora para publicarmos todos os livros que
        julgamos válidos para outros amantes de livros como nós. Só no primeiro mês da editora, já tinhamos acolhido 3 projetos de livros diferentes para publicação,
        livros esses que foram um enorme sucesso. Temos prioridade em livros de escritores pequenos e desconhecidos, para darmos a eles a chance de ficarem no holofote
      que merecem no mundo da literatura.</p>

        <h2>Nossa história</h2>
        <p>Desde a orientação editorial privilegia, temas e estilos que se destacam pela diferença, ousadia e impacto. Não foi à toa que o título de estréia da Castor®,
        Fazendo Diques - Magé 75016, de Jout Coutê Netô, figurou na lista de mais vendidos do Brasil por várias semanas. Publicado em agosto de 2020, o relato do escritor
      que chocou ao retratar a geração de "Castores" virou polêmica e recebeu destaque da mídia.</p>
      <Image src="/img/Home1.png" alt="Mulher segurando uma pasta" fluid/>
      </Container>
    </Jumbotron>
  );
}

export default Home;
