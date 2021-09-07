import React,  {useState} from "react"
import ReactDOM from "react-dom"

import "./Audicars.css" 
import audi1 from "./audi1.jpg"
import audi2 from "./audi2.jpg"
import audi3 from "./audi3.jpg"
import audi4 from "./audi4.jpg"
import audi5 from "./audi5.jpg"
import audi6 from "./audi6.jpg"

function Audicars(props)
{
   
 
    return(
        <div className="back">
                <header>
                    <div className="header-main">
                     
                    <h1 className="titlehead">Audi New</h1>
                    <p>To find the right model for you first choose the car you're insterested in.   <br></br>
                        Then Select up to three models to review and easily compare their features.
                    </p>
                    
                    </div>
                    <div className="car">
                        <div className="Firstcar">
                            <h1 className="imgonename">Audi e-tron GT</h1>
                            <img src={audi1} className ="imgone" alt ="Audi e-tron GT"></img>
                            <h3>Price : {props.price1}</h3>
                            <h3>Type : {props.type1}</h3>
                            </div>
                            <div className ="Secondcar" >
                            <h1 className = "imgtwoname">Audi A3 2021</h1>
                            <img src = {audi2} className = "imgtwo" alt = "Audi A3 2021"></img>
                            <h3>Price : {props.price2}</h3>
                            <h3>Type : {props.type2}</h3>
                            </div>
                            <div className ="Thirdcar" >
                            <h1 className = "imgthreename">Audi Q5</h1>
                            <img src = {audi3} className = "imgthree" alt = "Audi Q5"></img>
                            <h3>Price : {props.price3}</h3>
                            <h3>Type : {props.type3}</h3>
                            </div>
                           </div>
                            <div className="secondrow">
                            <div className = "Fourthcar">
                            <h1 className = "imgfourthname">Audi Q7</h1>
                            <img src = {audi4} className = "imgfourth" alt = "Audi Q7"></img>
                            <h3>Price : {props.price4}</h3>
                            <h3>Type : {props.type4}</h3>
                            </div>
                            <div className = "Fifthcar">
                            <h1 className = "imgfifthname">Audi A5</h1>
                            <img src = {audi5} className = "imgfifth" alt = "Audi A5"></img>
                            <h3>Price : {props.price5}</h3>
                            <h3>Type : {props.type5}</h3>
                            </div>
                            <div className = "Sixthcar">
                            <h1 className = "imgsixthname">Audi A4</h1>
                            <img src = {audi6} className = "imgsixth" alt = "Audi A4"></img>
                            <h3>Price : {props.price6}</h3>
                            <h3>Type : {props.type6}</h3>
                            </div>

                    </div>
                </header>
               

       
                    <footer  >
                
                    <div className="contact">
                    <h1>To View More Cars in Showroom </h1>
                    <h1>Contact : 9445566332</h1>
                    <h1>Address : 1/2, New Street, Opp To Water Tank, Erode - 638004</h1>
                    </div>

                </footer>
                </div>
        
    )
}
export default Audicars;
