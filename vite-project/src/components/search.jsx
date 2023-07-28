import React from "react";
export default function Search() {
    const [isShow, setIsShow] = React.useState(true);

    const handleClick = (event) => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
  
        // 👇️ or simply set it to true
        // setIsShown(true);
    };
  
    return (
        
            
           <div> {isShow &&( 
            <div>
                <h2>Recent View</h2>
            </div>
        )}

        {/* 👇️ show component on click */}
        {isShow && <div>
            <h2>Arrange A-Z</h2>
            </div>}
            
            {isShow && <div>
            <h2>Arrange Z-A</h2>
        </div>}
        
   </div>
    )
}
  
 