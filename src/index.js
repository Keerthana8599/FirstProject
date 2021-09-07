import React from "react"
import ReactDOM from "react-dom"

import Audicars from "./Audicars.js"



const audicars=[
    { price : "2.00 Crore", type : "Electric"},
    { price : "35.00 Lakh", type : "FaceLift"},
    { price : "55.00 Lakh", type : "FaceLift"},
    { price : "80.00 Lakh", type : "FaceLift"},
    { price : "55.44 Lakh", type : "FaceLift"},
    { price : "42.34 Lakh", type : "FaceLift"}
    

]

function App()
{
                    return  (
                    <div>
                    
                    <Audicars price1 ={audicars[0].price}  type1={audicars[0].type}
                              price2 ={audicars[1].price}  type2={audicars[1].type}
                              price3 ={audicars[2].price}  type3={audicars[2].type}
                              price4 ={audicars[3].price}  type4={audicars[3].type}
                              price5 ={audicars[4].price}  type5={audicars[4].type}
                              price6 ={audicars[5].price}  type6={audicars[5].type}
                               /> 
                   

                    </div>
                    )
                   
 }
ReactDOM.render(<App/>,document.querySelector("#root"));
