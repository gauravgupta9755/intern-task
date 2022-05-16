import React from "react";
import "./css/section2.css"

const Section2=()=>{
    const compnies=["./image/google2.0.0.jpg","./image/slack.jpeg","./image/microsoft.png","./image/figma.png","./image/outreach.png"];
    return (<>
    
         <div className="section2">
         <div className="s2_u"> 
         <div className="s2_u_l"><span className="heading">
               Companies we've<br></br>Worked With
             </span></div>
         <div className="s2_u_r">
             <p className="para">
             To add such symbols to an HTML page, you can use the entity name or the entity number a decimal or a hexadecimal reference for the symbol.
             </p>
         </div>
         </div>
         <div className="s2_m"> <ul>
             {
                 compnies.map((e)=>{
                     return(<>
                     <li>
                         <img src={e} alt={e}></img>
                     </li>
                     </>)
                 })
             }
             </ul></div>
         <div className="s2_b"> <button className="btn"> VIEW ALL CLIENTS</button> </div>
         </div>
    
    
    </>)
}

export default Section2;