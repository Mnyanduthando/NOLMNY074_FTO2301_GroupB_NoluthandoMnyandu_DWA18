/*import { React, useState } from "react";
import App from "../Apps";


function SearchIn() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      
      <div className="search">
      <input 
                    type="text"
                    placeholder="search"
                    className="form--input"
                    name="searchbar"
                    value={inputText}
                    onChange={inputHandler}
                />
      </div>
      <App input={inputText} />
    </div>
  );
}

export default SearchIn;*/
