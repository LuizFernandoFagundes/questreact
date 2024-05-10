import "./cards.css"
import Card from "../card/card"

const sayhello=(label)=>{
    alert(`A label desse botão é : ${label}`);

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
   label:"Digite um texto na propriedade label, para visualizá-lo aqui no alerta",
   text:"Clique aqui"
}

export default Cards;