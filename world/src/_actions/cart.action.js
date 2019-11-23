export const Cartaction={
  Productlist,
  Removedcart,
}
function Productlist(product){
    return{
        type:'ADD_TO_CART',
        product,
    }

}
function Removedcart(productId){
    return{
        type:'RM_TO_CART',
        productId,
    }

}