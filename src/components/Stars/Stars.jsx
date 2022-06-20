import { useState } from 'react'
import Styles from './Stars.module.scss'
function Stars(){
    const [rate,setRate]  = useState(localStorage.getItem("intialStateStars"))
    const stars = new Array(5).fill(0)
    const handlerChange = (index) =>{
        setRate(index)
    }
    const saveInLocalStorage = () =>{
        localStorage.setItem("intialStateStars",rate)
    }
    return(
        <div className={Styles.container}>
            { stars.map((el,index)=>{
            return (<div className={`${Styles.star} ${index <= rate ?Styles.filled :null}`} onMouseEnter={()=>handlerChange(index)} onClick={()=> saveInLocalStorage()}>{index +1}</div>)
            })
            }
        </div>
    )
}
export default Stars