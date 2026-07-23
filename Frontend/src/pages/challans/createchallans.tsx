import { useState, useEffect } from "react";
import API from "../../api/axios";

export default function CreateChallan() {


const challanNo = "CH-" + Date.now();


const [customer,setCustomer] = useState("");

const [customers,setCustomers] = useState<any[]>([]);


const [availableProducts,setAvailableProducts] = useState<any[]>([]);



const [items,setItems] = useState<any[]>([

{
product_id:"",
product_name:"",
price:0,
stock:0,
quantity:1
}

]);




useEffect(()=>{


const fetchData = async()=>{


try{


const customerResponse = await API.get("/customers");

setCustomers(customerResponse.data);



const productResponse = await API.get("/products");

setAvailableProducts(productResponse.data);



}

catch(error){

console.log(error);

}


};


fetchData();


},[]);





function selectProduct(
index:number,
id:number
){


const product = availableProducts.find(
(p)=>p.id===id
);



const updated=[...items];


updated[index]={

...updated[index],

product_id:product.id,

product_name:product.name,

price:product.price,

stock:product.stock

};



setItems(updated);



}






function changeQuantity(
index:number,
value:number
){


const updated=[...items];

updated[index].quantity=value;


setItems(updated);


}






function addProduct(){


setItems([

...items,

{
product_id:"",
product_name:"",
price:0,
stock:0,
quantity:1
}

]);


}






async function saveDraft(){


try{


await API.post("/challans",{


challan_number:challanNo,

customer_id:customer,

status:"DRAFT",

items:items


});


alert("Draft Saved");


}

catch(error){

console.log(error);

alert("Failed to save draft");

}


}







async function confirmChallan(){



for(const item of items){


if(item.quantity > item.stock){


alert(
item.product_name+" insufficient stock"
);


return;


}


}





try{


await API.post("/challans",{


challan_number:challanNo,

customer_id:customer,

status:"CONFIRMED",

items:items


});


alert("Challan Confirmed");


}

catch(error){

console.log(error);

}



}






return(


<div className="form-container">


<h2>
Create Sales Challan
</h2>



<label>
Challan Number
</label>


<input
value={challanNo}
readOnly
/>




<label>
Customer
</label>


<select

value={customer}

onChange={(e)=>
setCustomer(e.target.value)
}

>


<option value="">
Select Customer
</option>


{

customers.map((c)=>(


<option

key={c.id}

value={c.id}

>

{c.name}

</option>


))


}


</select>





<h3>
Products
</h3>




{

items.map((item,index)=>(


<div

key={index}

style={{

display:"grid",

gridTemplateColumns:"2fr 1fr 1fr",

gap:"15px",

marginBottom:"15px"

}}

>



<select

value={item.product_id}

onChange={(e)=>

selectProduct(
index,
Number(e.target.value)
)

}

>


<option value="">
Select Product
</option>


{

availableProducts.map((p)=>(


<option

key={p.id}

value={p.id}

>

{p.name}

</option>


))


}



</select>




<input

type="number"

value={item.quantity}

onChange={(e)=>

changeQuantity(
index,
Number(e.target.value)
)

}

/>



<input

value={item.stock}

readOnly

/>




</div>


))


}




<button

className="save-btn"

onClick={addProduct}

>

+ Add Product

</button>



<br/><br/>




<button

className="save-btn"

onClick={saveDraft}

>

Save Draft

</button>




<button

className="cancel-btn"

style={{
marginLeft:"15px"
}}

onClick={confirmChallan}

>

Confirm Challan

</button>



</div>


);


}