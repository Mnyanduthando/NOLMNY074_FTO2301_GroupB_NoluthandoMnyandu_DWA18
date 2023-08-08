import React from "react";
import dayjs from "dayjs";
 

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  
  const atoZ = (event) => {
    setFavor(favor => !favor)
    
    // 👇️ toggle shown state
   
  }
  
  const ztoA = () => {
    setZ(arrZ => !arrZ)
  }
  /*const items = datar.map((item) => {
    return (item.title)
  })

  const itemII = datar.map((ite) => {
    return (ite)
  })
const itemI =itemII.map((ite) => {
  return (ite)})*/
  
  

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

 /* const date = itemI.updated
  let newD = dayjs(date).format("DD//MM/YYYY")*/
  


 /* const gen = itemI.genres

  
  let arr = []
  let genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
  let arrayy = gen.map((item) => {
     return (item)
  })
const array = genr[arrayy]*/
 /* const itemZ = items.sort().reverse()
  
 const arrangeZ = itemZ.map((i) => { return (
    < section className="previewD" accessKey={itemI.temd}>
      <img src={itemI.image} width="80%" />
      <h2>{i}</h2>
      <h5> { }</h5>
      <h3>season: {itemI.seasons}</h3>
      <h5>UPDATED: {newD }</h5>
    </section>)
  })

 let sorting =items
 .sort() */
  /*const arrangeA = 
    sorting.map((i) => { return(
      < section className="previewD" accessKey={itemI.temd}>
        <img src={itemI.image} width="80%" />
        <h2>{i}</h2>
        <h5> {}</h5>
        <h3>season: {itemI.seasons}</h3>
        <h5>UPDATED: {newD }</h5>
      </section>)
    })*/











  export  function Favorite() {
    const [currentDate, setCurrentDate] = React.useState(getDate());
    
    const id = 8364
    const [users, setUsers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    
    let stockData = React.useCallback(async () => {
        let response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
        response  = await response.json() 
        setUsers(response)
        setIsLoading(false)
      }, [id]) // every time id changed, new book will be loaded
    
      React.useEffect(() => {
        stockData()
    
      }, [0])
     
      const removeNode = (t) => document.getElementById(`episode${t}`).remove();
      
      
  
    return (
    <div className="favB">
        {!isLoading && <div>
                <h1>Favourites Episodes</h1>

                <div className="main">
        <input placeholder="search" id="search-box" className="inputNav" onChange={event => setSearching(event.target.value)} />
                </div>
                
                <div className='home'>
      
      <div>
        
        
     
        <div><button onClick={atoZ}><h2>Arrange A-Z</h2></button></div>
        <div>
      
      </div>  
        <div><button onClick={ztoA}><h2>Arrange Z-A</h2></button></div>
        
      <div className="main">
      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
          </select>
         
      
    </div>
    </div>
  
    </div>
                <label>
                    Sort By:
            <select name="Sort by" id="favEpisode">
           sort by:
                <option>
                    1
                </option>
                <option>
                    2
                </option>
                
                
  
                </select>
                </label>
            <div className={`episode${1}`}  >
              <h3>Season: {users.seasons[0].season}</h3>
              
                    <button onClick={() => removeNode(1)}>Delete</button>
                    <h3>Updated: {dayjs(users.updated).format("DD//MM/YYYY")}</h3>
                    <h3>Added to Favs: {currentDate}</h3>
                    <h4> {users.seasons[0].episodes[2].title}</h4>
                    <img src="../USB/play.png" width="30px" onClick={function play2() {
                new Audio(users.seasons[0].episodes[2].file).play()
              }} />
              <p>{users.seasons[1].episodes[2].description}</p>
                </div>
                <div className={`episode${2}`}  >
              <h3>Season: {users.seasons[1].season}</h3>
              
                    <button onClick={() => removeNode(1)}>Delete</button>
                    <h3>Updated: {dayjs(users.updated).format("DD//MM/YYYY")}</h3>
                    <h3>Added to Favs: {currentDate}</h3>
                    <h4> {users.seasons[1].episodes[2].title}</h4>
                    <img src="../USB/play.png" width="30px" onClick={function play2() {
                new Audio(users.seasons[1].episodes[2].file).play()
              }} />
              <p>{users.seasons[1].episodes[2].description}</p>
            </div>
        </div>}
        </div>
    )
  }   
    
    
