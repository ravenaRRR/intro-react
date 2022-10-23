const List = () => { 
  const items = [{
id: 1,
name: "Matheus",

}, {
    id: 2,
    name: "Julia",

},{
    id: 3,
    name: "Gabriel",
}
];
  
  
    return (
        <div>
{items.map((item) => (
    <p key={item.id}> 
        {item.id} - {item.name}
    </p>
))}
        </div>
    )

}
export default List;