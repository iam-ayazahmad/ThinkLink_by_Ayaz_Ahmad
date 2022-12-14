import { useState } from "react"
import Example from "../Chart/Chart"
import "../Mainbox/Mainbox.css"
import { Onerow } from "../Onerow/Onerow"



export const Mainbox=()=>{

    const [show,setshow]=useState(false)
    const [num,setnum]=useState(0)


    let mydata= [{id:1,img:"https://placekitten.com/50/50",Name:"Staglin Family Vine.",das:"France . Sauternes",rating:"RP 95 +3",vintage:"1950",qty:4,volume:"Standard (500ml)",cost:56.95,pice:59.55},
    {id:2,img:"https://placekitten.com/50/50",Name:"Bibi Best Vineyard...",das:"Syrah . Sauternes",rating:"RP 95 +3",vintage:"2010",qty:12,volume:"Magnum (700ml)",cost:66.95,pice:79.85},
    {id:3,img:"https://placekitten.com/50/50",Name:"Cyuse kik Vineyard..",das:"USA . Sauternes",rating:"RP 95 +3",vintage:"1990",qty:8,volume:"Odd wall (900ml)",cost:86.75,pice:99.45},
    {id:4,img:"https://placekitten.com/50/50",Name:"Staglin Family Vin...",das:"France . Sauternes",rating:"RP 95 +3",vintage:"1950",qty:4,volume:"Standard (500ml)",cost:56.95,pice:59.55},
    {id:5,img:"https://placekitten.com/50/50",Name:"Bibi Best Vineyard...",das:"Syrah . Sauternes",rating:"RP 95 +3",vintage:"2010",qty:12,volume:"Magnum (700ml)",cost:66.95,pice:79.85},
    {id:6,img:"https://placekitten.com/50/50",Name:"Cyuse kiky Vineyard..",das:"USA . Sauternes",rating:"RP 95 +3",vintage:"1990",qty:8,volume:"Odd wall (900ml)",cost:86.75,pice:99.45},
    {id:7,img:"https://placekitten.com/50/50",Name:"Staglin Family Vine..",das:"France . Sauternes",rating:"RP 95 +3",vintage:"1950",qty:4,volume:"Standard (500ml)",cost:56.95,pice:59.55},
    {id:8,img:"https://placekitten.com/50/50",Name:"Bibi Best Vineyard...",das:"Syrah . Sauternes",rating:"RP 95 +3",vintage:"2010",qty:12,volume:"Magnum (700ml)",cost:66.95,pice:79.85},
    {id:9,img:"https://placekitten.com/50/50",Name:"Cyuse kiky Vineyard..",das:"USA . Sauternes",rating:"RP 95 +3",vintage:"1990",qty:8,volume:"Odd wall (900ml)",cost:86.75,pice:99.45},
]




    return(
        <div className="mainbox">
            <div><p>Overview</p><button className="winebutton"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5.80005V12.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.79999 9H12.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Add new wine</button></div>

<div className="secondmainatmain">

    <div><div className="linediv"><div>Open orders</div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="18.5" r="5.5" fill="#ECF1F4"/>
<path d="M22.5417 9.11112H19.7572L14.8373 3.32302C14.5095 2.9373 13.931 2.89039 13.5452 3.21825C13.1595 3.54611 13.1126 4.12465 13.4405 4.51037L17.3511 9.11112H6.64892L10.5596 4.51033C10.8874 4.12461 10.8405 3.54608 10.4548 3.21822C10.0691 2.89035 9.49055 2.9373 9.16269 3.32298L4.24275 9.11112H1.45833C1.20522 9.11112 1 9.31634 1 9.56945V10.4861C1 10.7392 1.20522 10.9445 1.45833 10.9445H2.17131L3.22486 18.53C3.35072 19.4364 4.12568 20.1111 5.04074 20.1111H18.9593C19.8743 20.1111 20.6493 19.4364 20.7752 18.53L21.8287 10.9445H22.5417C22.7948 10.9445 23 10.7392 23 10.4861V9.56945C23 9.31634 22.7948 9.11112 22.5417 9.11112ZM18.9593 18.2778H5.04074L4.02221 10.9445H19.9778L18.9593 18.2778ZM12.9167 13.0833V16.1389C12.9167 16.6452 12.5063 17.0556 12 17.0556C11.4937 17.0556 11.0833 16.6452 11.0833 16.1389V13.0833C11.0833 12.5771 11.4937 12.1667 12 12.1667C12.5063 12.1667 12.9167 12.5771 12.9167 13.0833ZM17.1944 13.0833V16.1389C17.1944 16.6452 16.784 17.0556 16.2778 17.0556C15.7715 17.0556 15.3611 16.6452 15.3611 16.1389V13.0833C15.3611 12.5771 15.7715 12.1667 16.2778 12.1667C16.784 12.1667 17.1944 12.5771 17.1944 13.0833ZM8.63889 13.0833V16.1389C8.63889 16.6452 8.22849 17.0556 7.72222 17.0556C7.21595 17.0556 6.80556 16.6452 6.80556 16.1389V13.0833C6.80556 12.5771 7.21595 12.1667 7.72222 12.1667C8.22849 12.1667 8.63889 12.5771 8.63889 13.0833Z" fill="#FFAA2C"/>
</svg></div>
<h3>239</h3>
</div>
    <div><div className="linediv"><div>Orders in transit</div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="18.5" r="5.5" fill="#ECF1F4"/>
<path d="M22.45 15.65H21.9V11.6591C21.9 11.0059 21.6353 10.37 21.1747 9.90938L18.2906 7.02531C17.83 6.56469 17.1906 6.3 16.5409 6.3H15.3V4.925C15.3 3.86281 14.4372 3 13.375 3H2.925C1.86281 3 1 3.86281 1 4.925V15.375C1 16.4372 1.86281 17.3 2.925 17.3H3.2C3.2 19.1219 4.67813 20.6 6.5 20.6C8.32188 20.6 9.8 19.1219 9.8 17.3H14.2C14.2 19.1219 15.6781 20.6 17.5 20.6C19.3219 20.6 20.8 19.1219 20.8 17.3H22.45C22.7525 17.3 23 17.0525 23 16.75V16.2C23 15.8975 22.7525 15.65 22.45 15.65ZM6.5 18.95C5.58906 18.95 4.85 18.2109 4.85 17.3C4.85 16.3891 5.58906 15.65 6.5 15.65C7.41094 15.65 8.15 16.3891 8.15 17.3C8.15 18.2109 7.41094 18.95 6.5 18.95ZM13.65 15.65H9.34281C8.77219 14.6669 7.72031 14 6.5 14C5.27969 14 4.22781 14.6669 3.65719 15.65H2.925C2.77375 15.65 2.65 15.5262 2.65 15.375V4.925C2.65 4.77375 2.77375 4.65 2.925 4.65H13.375C13.5262 4.65 13.65 4.77375 13.65 4.925V15.65ZM15.3 7.95H16.5409C16.7575 7.95 16.9706 8.03938 17.1253 8.19063L19.6347 10.7H15.3V7.95ZM17.5 18.95C16.5891 18.95 15.85 18.2109 15.85 17.3C15.85 16.3891 16.5891 15.65 17.5 15.65C18.4109 15.65 19.15 16.3891 19.15 17.3C19.15 18.2109 18.4109 18.95 17.5 18.95ZM20.25 15.4816C19.6588 14.5913 18.6481 14 17.5 14C16.6509 14 15.8844 14.33 15.3 14.8559V12.35H20.25V15.4816Z" fill="#2C67FF"/>
</svg></div>
<h3>239</h3>
</div>
    <div><div className="linediv"><div>Fullfilled orders</div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="18.5" r="5.5" fill="#ECF1F4"/>
<path d="M17.9297 7.58562L16.7747 4.1275C16.5513 3.45375 15.9222 3 15.2106 3H4.38937C3.67781 3 3.04875 3.45375 2.82531 4.1275L1.08594 9.34563C1.03094 9.51406 1 9.68938 1 9.86813V18.95C1 19.8609 1.73906 20.6 2.65 20.6H16.4C20.0438 20.6 23 17.6438 23 14C23 10.8822 20.8344 8.27656 17.9297 7.58562ZM10.625 4.65H15.2106L16.1319 7.41375C14.42 7.4825 12.8766 8.19406 11.7422 9.325H10.625V4.65ZM4.38937 4.65H8.975V9.325H2.83219L4.38937 4.65ZM2.65 18.95V10.975H10.5391C10.0716 11.8825 9.8 12.9103 9.8 14C9.8 15.9731 10.6697 17.74 12.0447 18.95H2.65ZM16.4 18.95C13.6706 18.95 11.45 16.7294 11.45 14C11.45 11.2706 13.6706 9.05 16.4 9.05C19.1294 9.05 21.35 11.2706 21.35 14C21.35 16.7294 19.1294 18.95 16.4 18.95ZM18.6206 11.8791C18.5141 11.7725 18.3422 11.7725 18.2356 11.8791L15.8328 14.2613L14.7913 13.2094C14.6847 13.1028 14.5128 13.1028 14.4062 13.2094L13.7634 13.8488C13.6569 13.9553 13.6569 14.1272 13.7634 14.2337L15.6334 16.1209C15.74 16.2275 15.9119 16.2275 16.0184 16.1209L19.2566 12.9069C19.3631 12.8003 19.3631 12.6284 19.2566 12.5219L18.6206 11.8791Z" fill="#00CF3A"/>
</svg></div>
<h3>239</h3>
</div>
<div><div className="linediv"><div>Open orders</div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="18.5" r="5.5" fill="#ECF1F4"/>
<path d="M20.5009 8.28998L15.7065 3.49561C15.3902 3.17926 14.9613 3 14.5149 3H9.48506C9.03866 3 8.60984 3.17926 8.2935 3.49561L3.49561 8.28998C3.17926 8.60633 3 9.03515 3 9.48155V14.5114C3 14.9578 3.17926 15.3866 3.49561 15.703L8.2935 20.5009C8.60984 20.8172 9.03866 20.9965 9.48506 20.9965H14.5149C14.9613 20.9965 15.3902 20.8172 15.7065 20.5009L20.5044 15.703C20.8207 15.3866 21 14.9578 21 14.5114V9.48506C20.9965 9.03515 20.8172 8.60633 20.5009 8.28998V8.28998ZM19.3093 14.5114L14.5114 19.3093H9.48506L4.68717 14.5114V9.48506L9.48506 4.68717H14.5149L19.3093 9.48506V14.5114ZM15.5765 14.7821L14.7821 15.5765C14.6169 15.7417 14.3497 15.7417 14.1845 15.5765L11.9982 13.3902L9.81195 15.5765C9.64675 15.7417 9.37961 15.7417 9.21441 15.5765L8.42004 14.7821C8.25483 14.6169 8.25483 14.3497 8.42004 14.1845L10.6063 11.9982L8.42004 9.81195C8.25483 9.64675 8.25483 9.37961 8.42004 9.21441L9.21441 8.42004C9.37961 8.25483 9.64675 8.25483 9.81195 8.42004L11.9982 10.6063L14.1845 8.42004C14.3497 8.25483 14.6169 8.25483 14.7821 8.42004L15.5765 9.21441C15.7417 9.37961 15.7417 9.64675 15.5765 9.81195L13.3902 11.9982L15.5765 14.1845C15.7417 14.3497 15.7417 14.6169 15.5765 14.7821Z" fill="#FF1C1C"/>
</svg>
</div>
<h3>239</h3>
</div>

</div>

<h4 style={{textAlign:"left",margin:"5px 0px 15px 10px"}}>Sales details</h4>

    <div className="thirdbox">

        <div className="subthird1">

            <div className="newsub1"><h5>Total Sales Overview </h5><br /><p className="graytext">7 - 11 Aug, 2022</p></div>
            <div className="newsub2"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 8L10.5 13L15.5 8" stroke="#262730" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h5>This week</h5>
                    <p>Filter by</p>
                    <p>Refresh Metrics</p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3392 0.660806L13.6565 2.34355C12.2089 0.89571 10.2092 0 8 0C3.71703 0 0.220129 3.36574 0.01 7.59655C-0.00093547 7.81648 0.176613 8 0.396806 8H1.30148C1.50642 8 1.6761 7.84026 1.68771 7.63568C1.87616 4.31126 4.62752 1.67742 8 1.67742C9.74719 1.67742 11.3276 2.38461 12.4714 3.52858L10.7254 5.27468C10.4815 5.51855 10.6542 5.93548 10.9991 5.93548H15.6129C15.8267 5.93548 16 5.76216 16 5.54839V0.934548C16 0.589677 15.583 0.416968 15.3392 0.660806ZM15.6032 8H14.6985C14.4936 8 14.3239 8.15974 14.3123 8.36432C14.1238 11.6887 11.3725 14.3226 8 14.3226C6.25281 14.3226 4.67235 13.6154 3.52858 12.4714L5.27465 10.7253C5.51852 10.4815 5.34581 10.0645 5.00094 10.0645H0.387097C0.173323 10.0645 0 10.2378 0 10.4516V15.0655C0 15.4103 0.416968 15.583 0.660806 15.3392L2.34355 13.6565C3.79113 15.1043 5.79084 16 8 16C12.283 16 15.7799 12.6343 15.99 8.40345C16.0009 8.18352 15.8234 8 15.6032 8Z" fill="#485572"/>
</svg>


            </div>


        </div>
        

        <div className="chartmainbox">

            <div>

            <div className="chartleftbox">
                <div className="upperoneline" ><h1>$74,749.50</h1>
                    <span className="myflex "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.67656 12.6766C7.87188 12.8719 8.18844 12.8719 8.38375 12.6766L10 11.0606L12.6466 13.7072C12.8419 13.9025 13.1584 13.9025 13.3538 13.7072L16.7981 10.2625L17.7197 11.1844C18.1922 11.6569 19 11.3222 19 10.6541V7.5C19 7.22375 18.7762 7 18.5 7H15.3459C14.6778 7 14.3431 7.80781 14.8156 8.28031L15.7375 9.20188L13 11.9394L10.3534 9.29281C10.1581 9.0975 9.84156 9.0975 9.64625 9.29281L7.32312 11.6159C7.12781 11.8113 7.12781 12.1278 7.32312 12.3231L7.67656 12.6766ZM19.5 16.5H5.5V6.5C5.5 6.22375 5.27625 6 5 6H4.5C4.22375 6 4 6.22375 4 6.5V17C4 17.5522 4.44781 18 5 18H19.5C19.7762 18 20 17.7762 20 17.5V17C20 16.7238 19.7762 16.5 19.5 16.5Z" fill="#2FCA72"/></svg>
                        <p>Heighest revenue since 2 weeks</p>
                    </span>
                    
                </div>
                <span  style={{marginTop:"-35px"}} className="myflex"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z" fill="#2FCA72"/></svg>
                        <p>+21% Last week</p>
                    </span>
                    <Example></Example>

            </div>

                
            </div>

            <div style={{padding:"20px"}} className="chartrightbox">
                <h4 className="graytext">Total Profit</h4>
                <h1 style={{color:"#99405a"}}>$12,545.00</h1>
                <span   className="myflex"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z" fill="#2FCA72"/></svg>
                        <p>+34% Last week</p>
                    </span>
                    <h4 className="graytext">Total Products Sold</h4>
                    <h1>329</h1>
            </div>
        </div>
    
    </div>

    <div className="fourthboxmain">

    <h4 style={{textAlign:"left",margin:"5px 0px 15px 10px"}}>Inventory</h4>
    <div className="mythead"><input type="checkbox" /><div></div><div>PRODUCT</div><div>RATING</div><div>VINTAGE</div><div>QTY</div><div>VOLUME</div><div>COST</div><div>PRICE</div></div>
        </div>

        {mydata.map((e)=>{
            return(
                <Onerow name={e.Name} img={e.img} das={e.das} rating={e.rating} vintage={e.vintage} qty={e.qty}  volume={e.volume} cost={e.cost} pice={e.pice}></Onerow>
                
            )
        })}

    

    </div>
    
    )
}