import Card from "./componentes/Card";
import mpB08 from "./imagens/mpB08.jpg";
import mpQ03 from "./imagens/mpQ03.jpg";
import mpD05 from "./imagens/mpD05.jpg";


export default function App() {
    return (
      <>
      <Card title="Americanópolis" image={mpB08} codigo="Código: B08" regiao="Região: Americanópolis" enderec="End.: R. Comendador Ítalo Franceschi, 340" ></Card>
      <Card title="Vila Alexandria" image={mpQ03} codigo="Código: Q03" regiao="Região: Vila Alexandria" enderec="End.: Av. Santa Catarina, 405" ></Card>
      <Card title="Campo Belo" image={mpD05} codigo="Código: D05" regiao="Região: Campo Belo" enderec="End.: Av. Santa catarina, 405" ></Card>
      </>
    )   
  }
