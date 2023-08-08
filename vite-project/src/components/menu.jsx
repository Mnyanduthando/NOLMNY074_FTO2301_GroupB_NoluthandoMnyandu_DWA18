import React from "react";

import dayjs from "dayjs";


export default function SearchIn() {
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

  let items = datar.map((i) => {return i})
  const date = items.updated
  let newD = dayjs(date).format("DD//MM/YYYY")
  

  /*let gen = items.genres

  
  
  let genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
  let arrayy = gen.map((item) => {
     return (item)
  })*/
     
  const [searching, setSearching] = React.useState("");
  
   
     
  

 
  
  return (
     <>
     <div className="main">
        <input placeholder="search" id="search-box" className="inputNav" onChange={event => setSearching(event.target.value)} />
       </div>
        <div>
           {datar
              .filter((i) => {
                 if (searching == "") {
                    return ""
                 } else if (i.title.toLowerCase().includes(searching.toLowerCase())) { return i }
              })
               
           
              .map((i) => {
                 return (
                    < section className="previewD1" accessKey={i.id}>
                       <img src={i.image} width="80%" />
                       <h2>{i.title}</h2>
                       <h5> {}</h5>
                       <h3>season: {i.seasons}</h3>
                       <h5>UPDATED: {newD}</h5>
                    </section>)
              })}
           
     </div >
      
  </>
  )
}
    
      
