import React from "react";
import "./css/section4.css";

const Section4=()=>{
    const s4data=[{img:"./image/paint.jpg",title:"Ebook",dis:"fdfd ei the ks ie isfsdf ieie kpLEK KDFKDFD IED"},{img:"./image/paint.jpg",title:"Ebook",dis:"fdfd ei the ks ie isfsdf ieie kpLEK KDFKDFD IED"},{img:"./image/paint.jpg",title:"Ebook",dis:"fdfd ei the ks ie isfsdf ieie kpLEK KDFKDFD IED"},{img:"./image/paint.jpg",title:"Ebook",dis:"fdfd ei the ks ie isfsdf ieie kpLEK KDFKDFD IED"}];
    return (<>
    <div className="section4">
    <div className="s4_u"> <span className="link">BLOG</span></div>
    <div className="s4_m"> <span className="heading">See what we've been working on </span></div>
    <div className="s4_b">
        <ul>
            {
                s4data.map((e)=>{
                    return (<>
                       <li>
                           <div className="card">
                           <div className="c_u"><img src={e.img}></img></div>
                           <div className="c_m"><span className="link">{e.title}</span></div>
                           <div className="c_b"><span className="">{e.dis}</span></div>
                           </div>
                       </li>
                    </>)
                })
            }
        </ul>
    </div>
    </div>
    </>)
}

export default Section4;