import './App.css';
import {incNumber,decNumber,resNumber} from './action/index.js'
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const myresult=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
         <h1>{myresult}</h1>
         <div className="btnwala">
         <button onClick={()=>dispatch(incNumber())}>Increment</button>
         <button onClick={()=>dispatch(decNumber())}>Decrement</button>
         <button onClick={()=>dispatch(resNumber())}>Reset</button>
         </div>
         
    </div>
  );
}

export default App;
