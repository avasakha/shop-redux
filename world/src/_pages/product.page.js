import React,{Component, useEffect} from 'react';
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {productAction} from "../_actions"
import {Cartaction} from "../_actions"
const Productpage = (props)=> {

    const {dispatch,product} = props;
    useEffect(()=>{
        dispatch(productAction.productlist());
        
    } );
    
    
return <div style={{margin:'10px',direction:"rtl",}} className="col-md-8" >
<div >
{ product && product.map((item)=> <div key={item.id} > 
 <div><img src={item.images[0].src} width="25%" style={{margin:"10px"}}></img></div>
     <p >نام محصول : {item.name}</p>
     <p>قیمت:{item.price}</p>
     <button onClick={()=>dispatch(Cartaction.Productlist(item))}>{item.catalog_visibility?'افزودن به سبد خرید':'موجود نیست'}</button>

</div>
)}
</div>
</div> 
          
    }
    
const mapStateToProps = state => {
    const {product} = state.productReducer;
    
    return { product };
};

// const ConnectedProductpage = withRouter(connect(mapStateToProps)(Productpage));
const ConnectedProductpage=connect(mapStateToProps)(Productpage)
export {ConnectedProductpage as Productpage};




// withRouter(Productpage);
// export {Productpage};