import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
    // comentário 
    const name = "Raphaela";

return (
    <div className="firstcomponent">
        {/*Comentário dentro do Jsx */}
        <p> Primeiro Componente  </p>
        {2+2}
        <p>Nome: {name}</p>
 <AnotherComponent/>
    </div>
)
}

export default FirstComponent