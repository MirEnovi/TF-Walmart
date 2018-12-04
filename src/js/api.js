const dataOrders =()=> {

fetch('https://wmt-laboratoria.herokuapp.com/orders')
.then(data => data.json())
.then(response => {
  getInfo(response);

})

}

const dataOrder =(key)=> {

fetch(`https://wmt-laboratoria.herokuapp.com/orders/${key}`)
.then(data => data.json())
.then(response => {


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
  if (orden.status == 'DELIVERED') {
    status='<p class= "green-t">DELIVERED</p>';
  } else if(orden.status == 'RECEIVED') {
    status='<p class= "blue-t">RECEIVED</p>';

  } else if(orden.status == 'IN_PROGRESS') {
    status='<p class= "blue-t">IN_PROGRESS</p>';

  } else if(orden.status == 'REFUND_REQUESTED') {
    status='<p class= "yellow-t">REFUND_REQUESTED</p>';

  }
  else if(orden.status == 'REFUND') {
    status='<p class= "yellow-t">REFUND</p>';
  }
  console.log(orden.clientName);
  domresult += `
          <tr>
            <td><a id ='${orden._links.items.href.substr(44,19)}'>${orden._links.items.href.substr(44,19)}</a></td>
            <td>${orden.clientName}</td>
            <td>${orden.contactPhone}</td>
            <td>${orden.deliveryDate}</td>
            <td>${orden.deliveryPeriod}</td>
            <td>${status}</td>
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
const getOrder =(data) => {
  const data = document.getElementById('data');
  data.innerHTML = `
  <div class="row">
   <div class="col s12 m7">
     <div class="card">
       <div class="card-image">
         <img src="images/sample-1.jpg">
         <span class="card-title">Card Title</span>
       </div>
       <div class="card-content">
         <p>I am a very simple card. I am good at containing small bits of information.
         I am convenient because I require little markup to use effectively.</p>
       </div>
       <div class="card-action">
         <a href="#">This is a link</a>
       </div>
     </div>
   </div>
 </div>`;
}
