const dataOrders =()=> {
// let myHeaders =  new Headers ({
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*"
// })
// let myInit = { method: 'GET',
// headers: myHeaders,
// mode: "no-cors",
// cache: 'default' };


fetch('http://wmt-laboratoria.herokuapp.com/orders')
.then(data => data.json())
.then(response => {
  getInfo(response);

})

}
// show api in DOM
const getInfo =(result)=> {
const data = document.getElementById('data');
let orders = result._embedded.orders;
let domresult ='';
let status= '';
// orden._links.items.href.substr(44,19)
orders.map((orden, i) => {
  // if (orden.status=='DELIVERED') {
  //   status='<p class= "green-text">ENTREGADO</p>';
  // }
  domresult += `
          <tr>
            <td>${orden._links.items.href.substr(44,19)}</td>
            <td>${orden.deliveryDate}</td>
            <td>${orden.deliveryPeriod}</td>
            <td>${orden.status}</td>
          </tr>

        </tbody>`;
});
data.innerHTML= domresult;

}

// Validate tweet
const validateOrder =(message)=> {
}

dataOrders();
$(document).ready(function(){
   $('.sidenav').sidenav();
 })
