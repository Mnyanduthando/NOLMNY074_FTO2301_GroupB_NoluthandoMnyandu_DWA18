import React from 'react'
import './App.css'
import Preview from './components/Previiew'
import Navbar from './components/NavBar'
import Seasons from './components/seasons'
import Appp from './box'
import SearchIn from './components/NavBar'


function App() {

  const [user, setUser] = React.useState([])
  const [isShow, setIsShow] = React.useState()

  const [isLoading, setIsLoading] = React.useState(false)
  const [isShown, setIsShown] = React.useState(false);

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
    isShow
    isShown

  }, [0]) 


  
   
  const seasons = (event) => {
    // 👇️ toggle shown state
    const evEnt = event.currentTarget.accessKey
    console.log(evEnt)
    setIsShown(current => !current);
    //const keys= event.target.key
    setIsShow (evEnt )
  // 👇️ or simply set it to true
  // setIsShown(true);
 };
  
   
  const div = user.map(i => {
    return (<div className='mainD' onClick={seasons} 
    accessKey={i.id}
      
    ><Preview className="preview"
    key={i.id}
    item={i}
    
  ></Preview></div>)
  })
const hemo = <div className="bigpre">
{!isShown&&<div>
    {user.map((i) => {
      return (<Navbar
        item={i}
      ></Navbar
      >)
    })}
     
  </div>} 
  
  {!isShown &&  div}
  {isShown && [isShow] }
  </div >
 
  
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      
      <div className="bigpre">
      {!isShown&&<div>
          {user.map((i) => {
            return (<Navbar
              item={i}
            ></Navbar
            >)
          })} 
        </div>}</div>
      {!isShown && <div className='back'><img src="../images/podcast.jpg" alt="Oop sorry no picture!" className="navImage" />
        <h2 className='h2'>Student Podcast</h2></div>}
      <div className='main'>
      
        {!isShown &&  div}
        {isShown && <Seasons item = {isShow} /> }
        </div>
    </>
  )
}

export default App
