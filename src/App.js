import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Categoria from "./components/Categoria/Categoria";
import NovaCategoria from "./components/NovaCategoria";

function App() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCategoria() {
      const data = await axios
        .get(
          "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/categoria"
        )
        .then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
  }, []);

  return (
    <div className='container'>
      <NovaCategoria />

      {categorias.map((categoria) => {
        return <Categoria key={categoria.id} categoria={categoria} />;
      })}
    </div>
  );
}

export default App;
