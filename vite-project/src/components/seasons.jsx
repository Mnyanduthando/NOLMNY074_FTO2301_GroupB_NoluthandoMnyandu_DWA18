import React from "react"
export default function Seasons( props ) {
  
  const [users, setUsers] = React.useState({})
  
  const id = props.item.id
  console.log(id)
  
  
  React.useEffect(
    () => {
        const fetchStockData = async () => {
            const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
            const stockData = await response.json();
            setUsers(stockData)
            console.log(stockData);
        };
        fetchStockData();
    },[]
);

 
 /* let i = users
   let using = i.map(item => {
      return(<Ser item = {users.item}/>) }
   )*/
   
  
  return (
     <div>
      <Ser  item={users}/>
    </div>
  )
    
  }
  function Ser(props) {
    return (
      <div>
        <img src={props.item.image} width="100%" />
        <h2>{props.item.title}</h2> 
        <p>{props.item.description}</p> 
        <h5>{props.item.updated}</h5>
        <h5>{props.item.seasons[0]}</h5>
        <h5>{props.item.title}</h5>
        <h5>{props.item.genres}</h5>


      </div>
    );
  }
  