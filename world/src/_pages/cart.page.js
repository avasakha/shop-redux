import React ,{Component} from 'react';
import {connect} from "react-redux";
import {withRouter } from "react-router-dom";
import {Cartaction} from "../_actions"
const Cartpage =(props)=>{
   
        const {cartlist,dispatch}=props;
        return<div>
            <h2>سبد خرید</h2>
            {cartlist.length ===0 ? "سبد خرید خالی است":
             <div>
             تعداد محصولات خرید شده:{cartlist.length}
         </div>
            }
            {cartlist.length > 0 &&
                    <div>
                        <ul> {cartlist.map(item =>
                            <li>
                                {item.name}
                                <button className="btn btn-blu" onClick={()=>dispatch(Cartaction. Removedcart(item.id))}>حذف محصول</button>
                            </li>

                        )}</ul>
                        <p>مجموع : {cartlist.reduce((sum,item)=>sum + +item.price,0)}تومان
                      </p> 
                        </div>


        
    }
    </div>
}

const mapStateToProps = state=>{
    return {
        cartlist:state.Cartreducer
    }
}
const connectCart= connect(mapStateToProps)(Cartpage);
export {connectCart as Cartpage} 