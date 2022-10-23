const RenderCond = ({X , Y}) =>{
  
    return(
        <div>
{X > 5 && <p> X é maior que 5</p>}
{X > 5 ? <p>X é um número alto </p> : <p> X é um número baixo </p>}
<p> O valor de Y é: {Y}</p>
        </div>
    )
}

export default RenderCond;