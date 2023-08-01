import { useState } from 'react';
import App from '../Apps';


 
export default function Fav(props) {


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



  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };
 let tit =props.item
  return (
    <div className='home'>
      <button><img src="../USB/love.png" width="20px" /> Favorite</button>
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
  
    </div>
  );
}
