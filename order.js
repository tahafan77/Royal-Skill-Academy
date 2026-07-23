let orders = JSON.parse(localStorage.getItem("orders")) || [];

let table = document.getElementById("orderData");


orders.forEach((item,index)=>{

table.innerHTML += `

<tr>

<td>${item.id}</td>

<td>${item.Name}</td>

<td>${item.Duration}</td>

<td>${item.Prices}</td>

<td>
<button onclick="deleteOrder(${index})">
Delete
</button>
</td>

</tr>

`;

});


function deleteOrder(index){

orders.splice(index,1);

localStorage.setItem("orders",JSON.stringify(orders));

location.reload();


}

localStorage.setItem("orders", JSON.stringify(orders));

localStorage.setItem("orderCount", orders.length);

document.getElementById("orderCount").innerText = orders.length;

