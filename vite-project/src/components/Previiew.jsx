import React from "react"
import dayjs from "dayjs"

export default function Preview(props) {
   const date = props.item.updated
   let newD = dayjs(date).format("DD//MM/YYYY")
   
  const item =props.item

   let gen = props.item.genres

   
   let arr = []
   let genr = ["Personal Growth", "True Crime and Investigative Journalism", "History", "Comedy", "Entertainment", "Business", "Fiction", "News", "Kids and Family"]
   let arrayy = gen.map((item) => {
      return (item)
   })
 const array = genr[arrayy]
    
      
   

  
   
   return (
      <>
      
                     <section className="previewD" accessKey={item.temd}>
                        <img src={item.image} width="80%" />
                        <h2>{item.title}</h2>
                        <h5> {array}</h5>
                        <h3>season: {item.seasons}</h3>
                        <h5>UPDATED: {newD}</h5>
                     </section>
            
       
   </>
   )
}