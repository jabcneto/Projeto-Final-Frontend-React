import React, { useEffect, useState } from "react";
import axios from "axios";
import Categoria from "./components/Categoria/Categoria";

function App() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCategoria() {
      const data = await axios
        .get("http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/categoria")
        .then((res) => res.data);
      setCategorias(data);
    }
    fetchCategoria();
  }, []);

  return (
    <div>
      {categorias.map((categoria) => {
        return <Categoria categoria={categoria} />;
      })}
    </div>
  );
}

export default App;
