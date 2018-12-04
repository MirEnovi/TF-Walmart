const dataOrders =()=> {

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
  if (orden.status == 'DELIVERED') {
    status='<p class= "green-t">DELIVERED</p>';
  } else if(orden.status == 'RECEIVED') {
    status='<p class= "blue-t">RECEIVED</p>';

  } else if(orden.status == 'IN_PROGRESS') {
    status='<p class= "blue-t">IN_PROGRESS</p>';

  }
  console.log(orden.clientName);
  // case 'IN_PROGRESS':
  //       status='<p class= "blue-t">IN_PROGRESS</p>';
  // case 'UNDERWAY':
  //       status='<p class= "green-t">UNDERWAY</p>';
  // case 'RECEIVED':
  //       status='<p class= "blue-t">RECEIVED</p>';
  // case 'REFUNDED' :
  //       status='<p class= "yellow-t">REFUNDED</p>';
  // case 'REFUND_REQUESTED' :
  //       status='<p class= "yellow-t">REFUND_REQUESTED</p>';
  //     break;
  //   default:
  //
  //   status='<p class= "blue-t">DELIVERED</p>';


  domresult += `
          <tr>
            <td>${orden._links.items.href.substr(44,19)}</td>
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
