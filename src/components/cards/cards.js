import "./cards.css"
import Card from "../card/card"

const sayhello=(label)=>{
    alert(`a label desse botão é : ${label}`);

}
const Cards =({name,label,text,color})=>{
    return(
        <Card className='cards'>
            <h3 style={{color:color}}>{name}</h3>
            <button className="btn" onClick={()=>sayhello(label)}>{text}</button>
        </Card>
        
    )
}

Cards.defaultProps={
   name:"Quest React",
   color:"#FFE9AD",
   label:"digite um texto na label, para velo aqui no alert",
   text:"Clique aqui"
}

export default Cards;