import React,{useState} from "react";
import "./Cells.css";

function Cells(props) {
  const[number,setNumber] = useState(props.number);
  function changeNumber(event){
    setNumber(event.target.value);
    props.onNewBoard(event.target.value,props.id);
  }
  return <div className="cell"><textarea id={props.id} type="number" rows="1" cols="1" maxlength="1" value={number} onChange={changeNumber}></textarea></div>;
}

export default Cells;
