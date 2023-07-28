import React from "react";
import Fav from "./home";
/*import Search from "./search";
import SearchIn from "./menu";*/




export default function Navbar(props) {
  const [isShown, setIsShown] = React.useState(false);
  const [isShow, setIsShow] = React.useState(false)

    const handleHome = (event) => {
      // 👇️ toggle shown state
      setIsShown(current => !current);

      <SearchButton/>
  
      // 👇️ or simply set it to true
      // setIsShown(true);
  };
  
  
 
    return(
     <nav className="navD">
     <div className="iconBar">
     
    <button  onClick={handleHome} className="Bhome"><img src="../USB/home.png" width="30px" />HOME</button>

     

      {/* 👇️ show component on click */}
      {isShown && <Fav />}
    
                {!isShown && <input placeholder="search" className="inputNav"/>/* <SearchIn  />*/}
                    <button className="Bsearch" onClick={handleHome}><img src="../USB/menu(1).png" width="20px" /></button>
                    {!isShown && <SearchButton />}
               
  </div>
            <img src="../images/podcast.jpg" alt="Oop sorry no picture!" className="navImage" />
           
           
            
      </nav>
            
   ) 
}

function SearchButton() {
  const atoz = (event) => {
    // 👇️ toggle shown state
    [...props].sort((a, b) =>
      a.name > b.name ? 1 : -1,
    )
  }
  
    const ztoa = () =>{[...props].sort((a, b) =>
    a.name > b.name ? -1 : 1,
  );
  }
  return (
    <div>
      <div><button><h2>Recents V</h2></button></div>
      <div><button onClick={atoz}><h2>Arrange A-Z</h2></button></div>
      <div><button onClick={ztoa}><h2>Arrange Z-A</h2></button></div>
    </div>
  );
}