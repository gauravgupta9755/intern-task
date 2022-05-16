import React from "react";
import "./css/section10.css"
const Section10=()=>{
    const lists=[{title:"Product",item:["login","Overview","feedback"]},{title:"Product",item:["login","Overview","feedback"]},{title:"Product",item:["login","Overview","feedback"]},{title:"Product",item:["login","Overview","feedback"]}];
    return (<>
       <div className="section10">
       <div className="s10_l">
           <div><span className="head2">LOGO</span></div>
           <div className="address"><p>Combany<br></br>111334<br></br>seattle,wa,939393</p></div>
           <div className="social_logo">
           <svg xmlns="http://www.w3.org/2000/svg" width="98.488" height="80.021" viewBox="0 0 98.488 80.021"><path fill="#03a9f4" d="M98.488,57.473a42.1,42.1,0,0,1-11.634,3.189A20.078,20.078,0,0,0,95.736,49.5a40.35,40.35,0,0,1-12.8,4.887A20.189,20.189,0,0,0,48.007,68.2a20.79,20.79,0,0,0,.468,4.6A57.15,57.15,0,0,1,6.857,51.681a20.2,20.2,0,0,0,6.2,26.986A19.94,19.94,0,0,1,3.939,76.18V76.4A20.284,20.284,0,0,0,20.116,96.241a20.152,20.152,0,0,1-5.294.665A17.853,17.853,0,0,1,11,96.561a20.383,20.383,0,0,0,18.867,14.065,40.57,40.57,0,0,1-25.034,8.612A37.819,37.819,0,0,1,0,118.96a56.843,56.843,0,0,0,30.974,9.061c37.154,0,57.468-30.777,57.468-57.455,0-.893-.031-1.754-.074-2.61A40.28,40.28,0,0,0,98.488,57.473Z" transform="translate(0 -48)"/></svg>
           {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 128 128"><defs><clipPath id="b"><circle cx="64" cy="64" r="64" fill="none"/></clipPath><clipPath id="c"><path fill="none" d="M104-163H24A24.07,24.07,0,0,0,0-139v80A24.07,24.07,0,0,0,24-35h80a24.07,24.07,0,0,0,24-24v-80A24.07,24.07,0,0,0,104-163ZM120-59a16,16,0,0,1-16,16H24A16,16,0,0,1,8-59v-80a16,16,0,0,1,16-16h80a16,16,0,0,1,16,16Z"/></clipPath><clipPath id="e"><circle cx="82" cy="209" r="5" fill="none"/></clipPath><clipPath id="g"><path fill="none" d="M64-115A16,16,0,0,0,48-99,16,16,0,0,0,64-83,16,16,0,0,0,80-99,16,16,0,0,0,64-115Zm0,24a8,8,0,0,1-8-8,8,8,0,0,1,8-8,8,8,0,0,1,8,8A8,8,0,0,1,64-91Z"/></clipPath><clipPath id="h"><path fill="none" d="M84-63H44A16,16,0,0,1,28-79v-40a16,16,0,0,1,16-16H84a16,16,0,0,1,16,16v40A16,16,0,0,1,84-63ZM44-127a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H84a8,8,0,0,0,8-8v-40a8,8,0,0,0-8-8Z"/></clipPath><clipPath id="i"><circle cx="82" cy="-117" r="5" fill="none"/></clipPath><radialGradient id="a" cx="27.5" cy="121.5" r="137.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd676"/><stop offset=".25" stop-color="#f2a454"/><stop offset=".38" stop-color="#f05c3c"/><stop offset=".7" stop-color="#c22f86"/><stop offset=".96" stop-color="#6666ad"/><stop offset=".99" stop-color="#5c6cb2"/></radialGradient><radialGradient id="d" cx="27.5" cy="-41.5" r="148.5" xlink:href="#a"/><radialGradient id="f" cx="13.87" cy="303.38" r="185.63" xlink:href="#a"/><radialGradient id="j" cx="13.87" cy="-22.62" r="185.63" xlink:href="#a"/></defs><g clip-path="url(#b)"><circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)"/></g><g clip-path="url(#c)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"/></g><g clip-path="url(#e)"><circle cx="13.87" cy="303.38" r="185.63" fill="url(#f)"/></g><g clip-path="url(#g)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"/></g><g clip-path="url(#h)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"/></g><g clip-path="url(#i)"><circle cx="13.87" cy="-22.62" r="185.63" fill="url(#j)"/></g><circle cx="82" cy="46" r="5" fill="#fff"/><path fill="#fff" d="M64,48A16,16,0,1,0,80,64,16,16,0,0,0,64,48Zm0,24a8,8,0,1,1,8-8A8,8,0,0,1,64,72Z"/><rect width="64" height="64" x="32" y="32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="8" rx="12" ry="12"/></svg> */}
           <svg xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/></svg>
           </div>
       </div>
       <div className="s10_r">
           

{
    lists.map((n)=>{
        return (<>
         <div >
             
             <h6 className="head_of_list">{n.title}</h6>
            <ul className="s10_list">
             {
                 n.item.map((e)=>{
                     return (<>
                      <li>
                          {e}
                      </li>
                     </>)
                 })
             }

            </ul>
            
         </div>
    
        </>)
    })
}
        
           
           
       </div>
       
       </div>
       <div className="footer">
                <span className="para">@ 2021 company All Right resevred </span><span className="para">   Privacy Policy</span>
            </div>
    </>)
}
export default Section10;