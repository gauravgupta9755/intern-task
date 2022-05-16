import React from "react";
import "./css/section3.css";

const Section3 = () => {
    const s3data=[{title:"Reliable system",dis:"In the following example, the file path points to a file in the images folder located in the folder one level up from the current folder:"},{title:"Reliable system",dis:"In the following example, the file path points to a file in the images folder located in the folder one level up from the current folder:"},{title:"Reliable system",dis:"In the following example, the file path points to a file in the images folder located in the folder one level up from the current folder:"}]
    return (<>
        <div className="section3">
            <div className="s3_l">
                <div className="s3_l_t"><span id="s3_head" className="">what's Inside?</span></div>
                <div className="s3_l_b"><p className="para" > In the following example, the file path points to a file in the images folder located in the folder one level up from the current folder:</p></div>
            </div>
            <div className="s3_r">
                {
                    s3data.map((e) => {
                        return (<>
                              <div className="s3_components">
                              <div className="s3_t">
                                  <span className="para"><span><img src="./image/check.png" className="check"></img></span >{e.title}</span>
                              </div>
                              <div className="s3_b"><p className="para">{e.dis}</p></div>
                              </div>
                        </>)
                    })
                }


            </div>
        </div>
    </>)
}
export default Section3;