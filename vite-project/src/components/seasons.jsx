import React from "react"
import dayjs from "dayjs"
import App from "../Apps"
import Appp from "../box"
export default function Seasons(props) {
  
  
  const [users, setUsers] = React.useState({})
  
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)
  const [isComp, setIsComp] = React.useState()
  const id = props.item

  let stockData = React.useCallback(async () => {
    let response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    response  = await response.json() 
    setUsers(response)
  }, [id]) // every time id changed, new book will be loaded

  React.useEffect(() => {
    stockData()
    setInterval(setIsComp(isComp => !isComp),300)

  }, [0])
 


  
 
  const handleClick = () => {
    setActive(!active)
  }
 
  
  /**/
 
  
  //console.log(users.seasons[0].season)
  
  return (
   <div>
      {isLoading && <p>Loading...</p> }
      
      <div>
        <img src={users.image} width="50%" />
        <h2>{users.title}</h2>
        <img src="../USB/play.png" width="30px" />
        <img src="../USB/love.png" width="30px" onClick={handleClick} style={{ background: active ? "lightpink" : "" }} />
        <p>{users.description}</p>
        {!isLoading && <h2>Season: {1}</h2>}
        <h5>All Episode: {10}</h5>
    
        
      </div>
      
    </div>
  )
}
    
  
  