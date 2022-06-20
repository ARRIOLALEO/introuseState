import {useState} from 'react'
function CounterHook(){
    let [counter,setCounter] = useState(0)
    return(<>
    <h1>{counter}</h1>
    <button onClick={()=> setCounter(counter + 1)}>Add One</button>
    </>)
}
export default CounterHook