import React from "react";
import dayjs from "dayjs";
import App from "../Apps";
import Appp from "../box";
export default function Seasons(props) {
  
  
  const [users, setUsers] = React.useState({})
  const [active, setActive] = React.useState(false)
  const [back, setBack] = React.useState(true)
  const [active1, setActive1] = React.useState(false)
  const [active2, setActive2] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)
  const [season, setSeason] = React.useState(true)
  const [isPause, setIsPause] = React.useState(true)

  const id = props.item

  let stockData = React.useCallback(async () => {
    let response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    response  = await response.json() 
    setUsers(response)
    setIsLoading(false)
  }, [id]) // every time id changed, new book will be loaded

  React.useEffect(() => {
    stockData()

  }, [0])
 


  
 
  const handleClick = () => {
    setActive(!active)
  }
  const handleBack = () => {
    setBack(!back)
  }
  const handleClick1 = () => {
    setActive1(!active)
  }
  const handleClick2 = (e) => {
    console.log(e)
    setActive2(!active)
  }
  
  const handleSeasons = (event) => {
    setSeason(season => !season)
  }
  const pausE = (event) => {
    
    setIsPause(isPause => !isPause)
  }
 
  /**/
 
 //const user= users.seasons[1].episodes[1]
 // console.log(user)
  
  return (
   <div>
      <button className="blueB" onClick={handleBack}>Back</button>
      {!back && <App/>}
      {isLoading && <h3>Loading...</h3> }
      
      
      {!isLoading && back && <div>
        
        <img src={users.image} width="50%" />
        <h2>{users.title}</h2>
        <p>{users.description}</p>
  
        <h2> Select a Season: <select name="seasons" >
          <option value="season1" onClick={handleSeasons}>{users.seasons[0].title}</option>
          <option vallue="season2" onClick={handleSeasons}>{users.seasons[1].title}</option>
        </select></h2>
        {season &&
          <div>
            <h5>All Episode: {10}</h5>
            <div className="episode" >
              <h3>Episode: {users.seasons[0].episodes[0].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[0].episodes[0].file).play()
                setIsPause(isPause => !isPause)
              }} />}
              {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[0].episodes[0].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              <img src="../USB/love.png" width="30px" onClick={handleClick} style={{ background: active ? "lightpink" : "" }} />
              <h4> {users.seasons[0].episodes[0].title}</h4>
              <p>{users.seasons[0].episodes[0].description}</p>
            </div>
            <div className="episode2" >
              <h3>Episode: {users.seasons[0].episodes[1].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function playB() {
                new Audio(users.seasons[0].episodes[1].file).play()
              }} />} {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[0].episodes[1].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              
              <img src="../USB/love.png" width="30px" onClick={handleClick1} style={{ background: active1 ? "lightpink" : "" }} />
              <h4> {users.seasons[0].episodes[1].title}</h4>
              <p>{users.seasons[0].episodes[1].description}</p>
            </div>
            <div className="episode1" >
              <h3>Episode: {users.seasons[0].episodes[2].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function playC() {
                new Audio(users.seasons[0].episodes[2].file).play()
              }} />} {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[0].episodes[2].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              <img src="../USB/love.png" width="30px" onClick={handleClick2} style={{ background: active2 ? "lightpink" : "" }} />
              <h4> {users.seasons[0].episodes[2].title}</h4>
              <p>{users.seasons[0].episodes[2].description}</p>
            </div>
          </div>}
        {!season &&
          <div>
            <h5>All Episode: {10}</h5>
            <div className="episode" >
              <h3>Episode: {users.seasons[1].episodes[0].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function play0() {
                new Audio(users.seasons[1].episodes[0].file).play()
              }} />} {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[1].episodes[0].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              <img src="../USB/love.png" width="30px" onClick={handleClick} style={{ background: active ? "lightpink" : "" }} />
              <h4> {users.seasons[1].episodes[0].title}</h4>
              <p>{users.seasons[1].episodes[0].description}</p>
            </div>
            <div className="episode2" >
              <h3>Episode: {users.seasons[1].episodes[1].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function play1() {
                new Audio(users.seasons[1].episodes[1].file).play()
              }} />} {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[1].episodes[1].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              <img src="../USB/love.png" width="30px" onClick={handleClick1} style={{ background: active1 ? "lightpink" : "" }} />
              <h4> {users.seasons[1].episodes[1].title}</h4>
              <p>{users.seasons[1].episodes[1].description}</p>
            </div>
            <div className="episode1"  >
              <h3>Episode: {users.seasons[1].episodes[2].episode}</h3>
              {isPause && <img src="../USB/play.png" width="30px" onClick={function play2() {
                new Audio(users.seasons[1].episodes[2].file).play()
              }} />} {!isPause && <img src="../USB/pause-button.png" width="30px" onClick={function playA() {
                new Audio(users.seasons[1].episodes[2].file).pause()
                setIsPause(isPause => !isPause)
              }} />}
              <img src="../USB/love.png" width="30px" onClick={handleClick2} style={{ background: active2 ? "lightpink" : "" }} />
              <h4> {users.seasons[1].episodes[2].title}</h4>
              <p>{users.seasons[1].episodes[2].description}</p>
            </div>
           
          </div>}
          
        
    
        
      </div>}
      
    </div>
  )
}
