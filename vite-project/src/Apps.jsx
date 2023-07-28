import React from 'react'
import './App.css'
import Preview from './components/Previiew'
import Navbar from './components/NavBar'
import Seasons from './components/seasons'
import Appp from './box'


function App() {

  const [user, setUser] = React.useState([])
  const [isShow, setIsShow] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)


  const fetchData = () => {

    setIsLoading(true)

    fetch('https://podcast-api.netlify.app/shows')

      .then(response => {

        return response.json()

      })

      .then(data => {

        setIsLoading(false)

        setUser(data)

      })

  }


  React.useEffect(() => {

    fetchData()

  }, []) 


  function current(e) {
   console.log(e.target)
 }
  
   

  const preMap = user.map(i => {
    return (<Preview onClick={current}
      key={i.id}
      item={i}
    ></Preview>)
  })
  const preSeason = user.map(i => {
    return (<Seasons
      key={i.id}
      item={i}
    ></Seasons>)
  })
    

  const [isShown, setIsShown] = React.useState(false);

  const seasons = (event) => {
    // 👇️ toggle shown state
    
    setIsShown(current => !current);
    //const keys= event.target.key

    // 👇️ or simply set it to true
    // setIsShown(true);
    };
  
 
   /* const filteredData = preData.filter((el) => {
      //if no input the return the original
      /*if (props.input === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.text.toLowerCase().includes(props.input)
      }
    })
  const research =  <ul>
  {filteredData.map((item) => (
      <li key={item.id}>{item.text}</li>
  ))}
</ul>*/
  
  return (
    <>
    {isLoading && <p>Loading...</p>}
      <Appp/>
      <div className="bigpre">
      {!isShown&&<div>
         <Navbar />
      </div>}
        {!isShown && <div className="mainD" onClick={seasons} >
          {preMap}
        </div>}
          {isShown && [preSeason] }
        </div>
    </>
  )
}

export default App
