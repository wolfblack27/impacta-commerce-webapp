
function Installments(props){}
function ProductListItem(props){
const defaultProductimage = "http://via.placeholder.com/150"

}



export default function ProductsForSaleList() {
  
  const json_products=[
    {
      title:"Caneca Personalizada de Porcelana",
      amount:"123.45",
      installments:{number:3, total:41.15,  hasFee:true},
    },

    {
      title:"Caneca Personalizada de Porcelana",
      amount:"123.45",
      installments:{number:3, total:41.15,  hasFee:true},
    },
      

  ];

  const products = json_products.map((x,index) => (
    
    <ProductListItem product={x} key={index} />

  ));

  return
}
