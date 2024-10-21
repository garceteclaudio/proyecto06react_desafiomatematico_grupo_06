import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {

  const [num1, setNumero1] = useState(0);
  const [num2, setNumero2] = useState(0);
  const [operacion, setOperacion] = useState("+");
  const [respuesta, setRespuesta] = useState("");
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mensaje, setMensaje] = useState("");


  const generarProblema = () => {
    const newNum1 = Math.floor(Math.random() * 100);
    const newNum2 = Math.floor(Math.random() * 100);
    const newOperacion = Math.random() > 0.5 ? "+" : "-";

    setNumero1(newNum1);
    setNumero2(newNum2);
    setOperacion(newOperacion);


    setRespuestaCorrecta(newOperacion === "+" ? newNum1 + newNum2 : newNum1 - newNum2);
    setRespuesta("");
    setMensaje("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(respuesta) === respuestaCorrecta) {
      setMensaje("¡Correcto!");
      setPuntaje(puntaje + 1);
    } else {
      setMensaje(`Incorrecto. La respuesta correcta es ${respuestaCorrecta}`);
    }

    generarProblema();
  };


  useEffect(() => {
    generarProblema();
  }, []);

  return (
    <div className="App">
      <h1>Desafío Matemático</h1>
      <p>
        {num1} {operacion} {num2}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="numero"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          placeholder="Tu respuesta"
        />
        <button type="submit">Comprobar</button>
      </form>
      <p>{mensaje}</p>
      <p>Puntaje: {puntaje}</p>
    </div>
  );
};

export default App;