import { React, useState } from "react";
import App from "../Apps";


export default function SearchIn(props) {
  const title = props

  const [inputText, setInputText] = useState(title);
  let inputHandler = (e) => {
    //convert input text to lower case
    const query = e.target.value
    var updatedList = [...title]
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    setInputText(updatedList)
  }

  return (
    <div className="main">
      <input placeholder="search" id="search-box" className="inputNav" onChange={inputHandler} />
      <div>
    
      </div>
    </div>)
    }
      
