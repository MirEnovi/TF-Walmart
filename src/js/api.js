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
orders.map((orden, i) => {
  domresult += `<div class="col-lg-5  m-top-1">
    <div  class="card col-sm-12">
      <p><span></span></p>
      <p>Fecha de entrega: ${orden.deliveryDate}<span></span></p>
      <button>Detalle: </button>
      <p>Status: ${orden.status}</p>
    </div>
  </div>`;
});
data.innerHTML= domresult;

}

// Validate tweet
const validateOrder =(message)=> {
}

dataOrders();
