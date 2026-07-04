let cart=[];

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
const tablebody=document.getElementById("cart-items-body");

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

function addNewRow(Desc,Price,Qty){
    const newRow=tablebody.insertRow(); // create automatically Row and append also.

    const uniqueId=Date.now().toString();  //give id according to time;
    newRow.setAttribute("data-id",uniqueId); 

    const cell1=newRow.insertCell(0);
    const cell2=newRow.insertCell(1);
    const cell3=newRow.insertCell(2);
    const cell4=newRow.insertCell(3);
    const cell5=newRow.insertCell(4);

    cell1.textContent=Desc;
    cell2.textContent=Price;
    cell3.textContent=Qty;
    cell4.textContent=(Price*Qty).toFixed(2);
    cell5.innerHTML=`<button class="delete-btn">&#10060;</button>`;

    const item={
        id:uniqueId,
        productName:Desc,
        productPrice:Price,
        productQty:Qty,
        total:(Price*Qty).toFixed(2),
    }
    cart.push(item);  //putting all items in cart if we referesh it should not delete
    console.log(cart);

}

productfilterinput.addEventListener("keydown", (event)=>{
    if(event.key==="Enter" && event.target.value!==""){
        getData(event.target.value);
    }
})

addtocart.addEventListener("click",(e)=>{
    if(productfilterinput.value==="" || productpriceinput.value===""||productqtyinput.value===""){
        window.alert("Please fill all the fields");
        return;
    }
    addNewRow(productfilterinput.value,productpriceinput.value,productqtyinput.value);
    productfilterinput.value="";
    productpriceinput.value="";
    productqtyinput.value=1;
    productfilterinput.focus();
})

tablebody.addEventListener("click",(e)=>{
    const button=e.target.closest(".delete-btn");

    if(button){
        const row=button.closest("tr");
        const rowid=row.getAttribute("data-id");
        cart=cart.filter(item=>item.id!=rowid);
        console.log(cart);
        row.remove();
    }

})