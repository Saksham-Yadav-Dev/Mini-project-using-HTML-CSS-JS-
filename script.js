const products=[
    {productId:"101", productName:"Samosa" ,price:10},
    {productId:"102", productName:"paneer Tika" ,price:150},
    {productId:"103", productName:"Burger" ,price:50},
    {productId:"104", productName:"Pasta" ,price:120}  
];

const productfilterinput=document.getElementById("product-filter");
const productpriceinput=document.getElementById("product-price");
const productqtyinput=document.getElementById("product-qty");
const addtocart=document.getElementById("add-to-cart");

function getData (value){
    const product=products.filter(data=>data.productId===value);
    if(product.length<=0){
        window.alert("Product not found");
        return;
    }
    else{

        productfilterinput.value=product[0].productName;
        productpriceinput.value=product[0].price;
        productqtyinput.focus();
    }
}

productfilterinput.addEventListener("keydown", (event)=>{
    if(event.key==="Enter" && event.target.value!==""){
        getData(event.target.value);
    }
})