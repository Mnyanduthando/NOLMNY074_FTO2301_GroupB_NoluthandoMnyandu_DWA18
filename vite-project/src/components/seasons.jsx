import React from "react"
import dayjs from "dayjs"
import App from "../Apps"
import Appp from "../box"
export default function Seasons(props) {
  
  
  const [users, setUsers] = React.useState({})
  
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)
  const [isComp, setIsComp] = React.useState()
  const id = props.item

  let stockData = React.useCallback(async () => {
    let response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    response  = await response.json() 
    setUsers(response)
    setIsLoading(false)
  }, [id]) // every time id changed, new book will be loaded

  React.useEffect(() => {
    stockData()
    setInterval(setIsComp(isComp => !isComp),300)

  }, [0])
 


  
 
  const handleClick = () => {
    setActive(!active)
  }
 
  
  /**/
 
  
 //console.log(users.seasons)
  
  return (
   <div>
      {isLoading && <h3>Loading...</h3> }
      
      {!isLoading && <div>
        <img src={users.image} width="50%" />
        <h2>{users.title}</h2>
        <img src="../USB/play.png" width="30px" />
        <img src="../USB/love.png" width="30px" onClick={handleClick} style={{ background: active ? "lightpink" : "" }} />
        <p>{users.description}</p>
      
          <h2> {users.seasons[0].title}</h2>
        <h5>All Episode: {10}</h5>
        <div className="episode" >
          <h3>Episode: {users.seasons[0].episodes[0].episode}</h3>
          <img src="../USB/play.png" width="30px" file= {users.seasons[0].episodes[0].file}/>
        <p> {users.seasons[0].episodes[0].title}</p>
        <p></p>
        <p>{users.seasons[0].episodes[0].description}</p>
        </div>
        <div className="episode2" >
          <h3>Episode: {users.seasons[0].episodes[1].episode}</h3>
          <img src="../USB/play.png" width="30px" file={users.seasons[0].episodes[1].file} />
        <p> {users.seasons[0].episodes[1].title}</p>
        <p></p>
        <p>{users.seasons[0].episodes[1].description}</p>
        </div>
        <div className="episode1" >
          <h3>Episode: {users.seasons[0].episodes[2].episode}</h3>
          <img src="../USB/play.png" width="30px" file={users.seasons[0].episodes[2].file} />
        <p> {users.seasons[0].episodes[2].title}</p>
        
        <p>{users.seasons[0].episodes[2].description}</p>
          </div>
          
        
    
        
      </div>}
      
    </div>
  )
}
    
  
  