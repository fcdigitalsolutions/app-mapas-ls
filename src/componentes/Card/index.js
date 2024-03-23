import BtnSend from "../BtnSend";
import BtnMap from "../BtnMap";
import styles from "./style.module.css";


export default function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="" height="150px" width="150px"/>
      <div>
        <h3>{props.title}</h3>
        <p>
        {props.codigo}<br></br>
        {props.regiao} <br></br>
        {props.enderec} <br></br>
        </p>
        <div>
          <BtnMap></BtnMap>
          <BtnSend></BtnSend>
        </div>
      </div>
    </div>
  );
}