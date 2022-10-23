import {useState, useEffect} from "react";
const Hooks = () =>{
    let idade = 30
const [novaIdade, setNovaIdade] = useState(40)

const changeAge = () =>{
    idade = 31;
    console.log(idade);
}

//muda o valor de algo 

const changeNewAge = () => {
    setNovaIdade(45);
}

useEffect(() =>{
    console.log("testando")
});

    return (
<div> 
<p> Idade: {idade}</p>
<button onClick={changeAge}>Mudar idade</button>
<p> Idade: {novaIdade}</p>
<button onClick={changeNewAge}>Mudar nova idade</button>
</div>
    )
}

export default Hooks;