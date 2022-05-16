import React from "react";
import "./css/section7.css";

const Section7=()=>{
    
    const showans=()=>{

    }
    const qn=[{q:"what is T2D3",a:"ieddf kdie ksfdsf ie the kd"},{q:"what is T2D3",a:"ieddf kdie ksfdsf ie the kd"},{q:"what is T2D3",a:"ieddf kdie ksfdsf ie the kd"},{q:"what is T2D3",a:"ieddf kdie ksfdsf ie the kd"}];
    return (<>
    <div className="section7">
    <div className="s7_l">
        <div className="s7_1"><span className="link">Need Help?</span></div>
        <div className="s7_2"><span className="heading">Frequently asked quesions</span></div>
        <div className="s7_3">
            <p className="para">
            In the following example, the file path points to a file in the images folder located in the folder one level up from the current folder:
            </p>
        </div>
        <div className="s7_4"><button className='s1_button btn1'>LEARN MORE &rarr;</button></div>
    </div>
    <div className="s7_r">
        <div className="q_a">
            {
                qn.map((e)=>{
                    return (<>
                      <div className="qn_container">
                          <div className="qn_content">
                              <div className="q">{e.q}</div>
                              <div className="a para"  >{e.a}</div>
                          </div>
                          <div><button className="btn4" onClick={showans}>+</button></div>
                      </div>
                      <hr></hr>
                    </>)
                })
            }
        </div>
    </div>
    </div>
    </>)
}
export default Section7;