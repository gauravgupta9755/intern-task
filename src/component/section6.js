import React from "react";
import  "./css/section6.css"
const Section6=()=>{
    const s6data=[{dis:"To hide the default arrow of the <select> dropdown, set the CSS appearance property to its  value, then add your individual arrow with the help of the background shorthand property.",logo:"./image/smart.jpg",status:"fiekd kd",name:"iekddf"},{dis:"To hide the default arrow of the <select> dropdown, set the CSS appearance property to its  value, then add your individual arrow with the help of the background shorthand property.",logo:"./image/smart.jpg",status:"fiekd kd",name:"iekddf"}];
    return(<>
    <div className="section6">
    <div className="s6_u link"><span>TESTMONALS</span></div>
    <div className="s6_m"><span className="heading">what our customers say</span></div>
    <div className="s6_b">
        {
          s6data.map((e)=>{
              return (<>
              <div className="comments">
              <div className="comments_t"><span className="heading"><img src="./image/quotes.png" className="quotes"></img></span></div>
              <div className="comments_m"><p className="para">{e.dis} </p></div>
              <div className="comments_b">
                  <div className="detail">
                      <div className="logo"><img src={e.logo}></img></div>
                      <div className="name">
                          <span className="link">{e.status}</span><br></br>
                          <span className="">{e.name}</span>
                      </div>
                  </div>
              </div>
              </div>
              </>)
              
          })
        }
    </div>
    </div>
    </>)
}

export default Section6;