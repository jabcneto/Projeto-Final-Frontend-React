import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Categoria from "./components/Categoria/Categoria";
import FormCategoria from "./components/FormCategoria";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);

  useEffect(() => {
    async function fetchCategoria() {
      const data = await axios
        .get(
          "https://api-castor.herokuapp.com/categoria"
        )
        .then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
    
  }, [novo]);


  return (
    <div className='container'>
      <FormCategoria novo={novo} setNovo={setNovo} />

      {categorias.map((categoria) => {
        return <Categoria key={categoria.id} categoria={categoria} />;
      })}
    </div>
  );
}

export default App;
