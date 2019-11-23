// const initialstate={
//     cartlist:[]
// }
export const Cartreducer=(state=[],action)=>{
    const {type,product,productId}=action
    switch(type){
        case 'ADD_TO_CART':
            return state.concat(product)
        case "RM_TO_CART":
                let idx=state.findIndex(element=>+element.id === +productId);
                state.splice(idx,1);
                return state;

        default:
            return state;
    }
}