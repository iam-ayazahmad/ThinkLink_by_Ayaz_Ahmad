import { useState } from "react"
import "../Onerow/Onerow.css"



export const Onerow=({name,img,das,rating,vintage,qty,volume,cost,pice})=>{

    const [show,setshow]=useState(false)

    return(
        <div onClick={()=>setshow(!show)}>
                <div className="myrow"><input type="checkbox" /><img  src={img} alt="" /><div>{name} <br /><span style={{color:"gray"}}>{das}</span></div><div>{rating}</div><div>{vintage}</div><div>{qty}</div><div>{volume}</div><div>${cost}</div><div>${pice}</div><div>{show?<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.0004L10 7.00037L15 12.0004" stroke="#485572" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8L10 13L15 8" stroke="#485572" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}</div>
                </div>
                {show?<div style={{textAlign:"left",padding:"3%"}}><p>{name}</p> 
                Region: <span style={{color:"gray"}}>{das}</span> <span>Vintage: <span style={{color:"gray"}}>{vintage}</span><h5 className="vine">View wine <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.57 14.7789L16.5699 13.779C16.7261 13.6228 16.9979 13.7322 16.9979 13.9571V18.5002C16.9979 19.3282 16.3262 20 15.4982 20H4.49978C3.67178 20 3 19.3282 3 18.5002V7.50183C3 6.67383 3.67178 6.00205 4.49978 6.00205H13.0454C13.2672 6.00205 13.3797 6.27076 13.2235 6.43011L12.2236 7.42997C12.1768 7.47683 12.1143 7.50183 12.0456 7.50183H4.49978V18.5002H15.4982V14.9539C15.4982 14.8882 15.5232 14.8258 15.57 14.7789ZM20.4631 8.47356L12.258 16.6786L9.43343 16.9911C8.6148 17.0817 7.91803 16.3912 8.00864 15.5663L8.3211 12.7417L16.5261 4.53664C17.2417 3.82112 18.3977 3.82112 19.1101 4.53664L20.4599 5.88644C21.1755 6.60196 21.1755 7.76117 20.4631 8.47356ZM17.376 9.43905L15.5607 7.62369L9.75526 13.4322L9.52717 15.4725L11.5675 15.2444L17.376 9.43905ZM19.4007 6.94879L18.0509 5.59898C17.9228 5.47088 17.7135 5.47088 17.5885 5.59898L16.623 6.56447L18.4384 8.37983L19.4038 7.41434C19.5288 7.28311 19.5288 7.07689 19.4007 6.94879Z" fill="#262730"/>
</svg>
</h5></span>
                
                <br />
                <hr />
                Rating
                <br />
                <span className="myratiwxtra">{rating}</span>
                </div> :null}

                </div>
    )
}