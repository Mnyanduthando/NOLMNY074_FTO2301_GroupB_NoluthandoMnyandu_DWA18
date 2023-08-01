import React from "react";
import Fav from "./home";
import Search from "./search";
import SearchIn from "./menu";




export default function Navbar(prop) {
  const [isShown, setIsShown] = React.useState(false);
  const [isSho, setIsSho] = React.useState(false)
     let props = prop.item.title
    const handleHome = (event) => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      // 👇️ or simply set it to true
      // setIsShown(true);
  };
  const handlSearch = (event) => {
    // 👇️ toggle shown state
    setIsSho(current => !current);
};

  
 
    return(
      <nav className="navD">
          
     <div className="iconBar">
     
    <button  onClick={handleHome} className="Bhome"><img src="../USB/home.png" width="30px" />HOME</button>

     

      {/* 👇️ show component on click */}
      {isShown && <Fav />}
    
          {isSho && <SearchIn {...props} />  }
                    <button className="Bsearch" onClick={handlSearch}><img src="../USB/menu(1).png" width="20px" /></button>
                   
               
  </div>
          
           
           
            
      </nav>
            
   ) 
}

function SearchButton(props) {
  const atoZ = (event) => {
    // 👇️ toggle shown state
    [...tit].sort((a, b) =>
      a.name > b.name ? 1 : -1,
    )
  }
  
    const ztoA = () =>{[...tit].sort((a, b) =>
    a.name > b.name ? -1 : 1,
  );
  }



  const [sortState, setSortState] = React.useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };
 let tit =props.item
  return (
    <div>
      <div><button><h2>Recents View</h2></button></div>
      <div><button onClick={atoZ}><h2>Arrange A-Z</h2></button></div>
      <div><button onClick={ztoA}><h2>Arrange Z-A</h2></button></div>
      <div className="main">
      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <ul>

        
      </ul>
    </div>
    </div>
  );
}