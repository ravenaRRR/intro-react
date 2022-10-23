const AnotherComponent = () => {

const handleClick = () => {
    console.log("Clicou no botão!");
}

    return (
        <div> 
            <p>Segundo Componente</p>
            <button onClick={handleClick}> Evento de click</button>
            <hr/>
            <button onClick={() => console.log("Teste")}> Evento de elemento pequeno</button>
            </div>
    );
};

export default AnotherComponent;