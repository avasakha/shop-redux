import axios from 'axios';

export const productService = {
   
    product
}
async function product (){
    try{
   const response= await axios({
        url: `https://woocommerce.maktabsharif.ir/wp-json/wc/v3/products`,
      
        
        method: "GET",
        headers: { "content-type": "application/json" },
    });
    
    console.log(response.data)

    if (response.status === 200) {
        return response.data;
    } 
        

}
catch(error){
return error.message
}
}
