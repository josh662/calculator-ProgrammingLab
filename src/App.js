import { useState } from 'react';
import './App.css';

import Button from "./components/Button"

function App() {
  const [calc, setCalc] = useState(0)

  return (
    <div className="container">
      <div className="calculator">
        <div className="result">
          <h1>{calc}</h1>
        </div>
        <div className="buttons">
          <div className="row">
            <Button value="C" theme="clear" action=""  set={setCalc} state={calc}/>
            <Button value="(" theme="operation" action="(" set={setCalc} state={calc}/>
            <Button value=")" theme="operation" action=")" set={setCalc} state={calc}/>
            <Button value="/" theme="operation" action="/" set={setCalc} state={calc}/>
          </div>
          <div className="row">
            <Button value="7" theme="num" action="7"  set={setCalc} state={calc}/>
            <Button value="8" theme="num" action="8" set={setCalc} state={calc}/>
            <Button value="9" theme="num" action="9" set={setCalc} state={calc}/>
            <Button value="x" theme="operation" action="x" set={setCalc} state={calc}/>
          </div>
          <div className="row">
            <Button value="4" theme="num" action="4"  set={setCalc} state={calc}/>
            <Button value="5" theme="num" action="5" set={setCalc} state={calc}/>
            <Button value="6" theme="num" action="6" set={setCalc} state={calc}/>
            <Button value="-" theme="operation" action="-" set={setCalc} state={calc}/>
          </div>
          <div className="row">
            <Button value="1" theme="num" action="1"  set={setCalc} state={calc}/>
            <Button value="2" theme="num" action="2" set={setCalc} state={calc}/>
            <Button value="3" theme="num" action="3" set={setCalc} state={calc}/>
            <Button value="+" theme="operation" action="+" set={setCalc} state={calc}/>
          </div>
          <div className="row">
            <Button value="G" theme="github" action="G"  set={setCalc} state={calc}/>
            <Button value="0" theme="num" action="0" set={setCalc} state={calc}/>
            <Button value="," theme="num" action="," set={setCalc} state={calc}/>
            <Button value="=" theme="operation" action="=" set={setCalc} state={calc}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
