import React from 'react';
import App from '../Apps';
import dayjs from 'dayjs';
import { Favorite } from './Favorite';


 
export default function Fav(props) {
  const [sortState, setSortState] = React.useState(" none");
  const [fav, setFav] = React.useState(true)
  const [favor, setFavor] = React.useState(false)
  const [isCurrent, setCurrent] = React.useState(true)
  const [current, setcurrent] = React.useState(true)
  
  const [arrZ, setZ] = React.useState(true)
  console.log(props)
  const faV = () => {

    setcurrent(current => !current)
  }

  const [datar, setData] = React.useState([]);

  const fetchData = () => {

    fetch('https://podcast-api.netlify.app/shows')

      .then(response => {

        return response.json()

      })

      .then(data => {
        setData(data)

      })

  }

  React.useEffect(() => {

    fetchData()
    

  }, [0])
 
  const atoZ = (event) => {
    setFavor(favor => !favor)
    setData(users)
    
    // 👇️ toggle shown state
   
  }
 
  const ztoA = () => {
    setZ(arrZ => !arrZ)
  }
  const items = datar.map((item) => {
    return (item.title)
  })
  const image = datar.map((item) => {
    return (item.image)
  })
  

  
  
  
  const datee = props.item.updated
  let newDD = dayjs(datee).format("DD//MM/YYYY")
  
 const itemt =props.item

  let gen = props.item.genres

  
  let arr = []
  let genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
  let arrayy = gen.map((item) => {
     return (item)
  })
const array = genr[arrayy]
  

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  let item = datar.map((i) => {return i})
  const date = item.updated
  let newD = dayjs(date).format("DD//MM/YYYY")
  


 /* const gen = itemI.genres

  
  let arr = []
  let genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
  let arrayy = gen.map((item) => {
     return (item)
  })
const array = genr[arrayy]*/

 
  
  const itemZ = items.sort().reverse()
  
 const arrangeZ = itemZ.map((i) => { return (
    < section className="previewA" accessKey={i.temd}>
     
      <h2>{i}</h2>
      <img src={image[i.length]} width="80%" />
     
      
      <h5>UPDATED: {newD }</h5>
    </section>)
  })

 let sorting =items
 .sort() 
  const arrangeA = 
    sorting.map((i) => { return(
      < section className="previewA" accessKey={i.temd}>
      <img src={image[i.length]} width="80%" />
        <h2>{i}</h2>
        
        
        <h5>UPDATED: {newD }</h5>
      </section>)
    })
    const [Interested, setIn] = React.useState(true);

    const inte = () => {
      // 👇️ toggle shown state
      setIn(Interested => !Interested);
  };
   

  return (
    <div className='home'>
      <button onClick={faV}><img src="../USB/love.png" width="20px" /> Favorite</button>
      <div>
        {!current && <Favorite />}
        
        <div><button onClick={inte}><h2>Interested In...</h2></button></div>
        {!Interested &&  <section className="previewD" accessKey={itemt.temd}>
                        <img src={itemt.image} width="80%" />
                        <h2>{itemt.title}</h2>
                        <h5> {array}</h5>
                        <h3>season: {itemt.seasons}</h3>
                        <h5>UPDATED: {newDD}</h5>
                     </section> }
      <div><button><h2>Recents View</h2></button></div>
        <div><button onClick={atoZ}><h2>Arrange A-Z</h2></button></div>
        <div>
      {favor && arrangeA}
      </div>  
        <div><button onClick={ztoA}><h2>Arrange Z-A</h2></button></div>
        {!arrZ && arrangeZ}
      <div className="main">
      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
          </select>
         
      
    </div>
    </div>
  
    </div>
  );
}
