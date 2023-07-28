import React from "react"
import dayjs from "dayjs"

export default function Preview(props) {
   const date = props.item.updated
  let newD =  dayjs(date).format("DD//MM/YYYY")
   
  

   let gen = props.item.genres

   console.log(gen)
   let arr = []
   const genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
   for (let i = 0; i <= genr.length; i++) {
      
      let item = gen.map(i => (i))
     
      arr.push(genr[{...i} ])
        
      }
      

  
   
    return (
        <>
      <section className="previewD">
          <img src={props.item.image} width="100%" />
             <h2>{props.item.title}</h2>
             <h5>GENRES: {arr}</h5>
             <h3>season: {props.item.seasons}</h3>
             <h5>UPDATED: {newD}</h5>
      </section>
       
   </>
   )
}