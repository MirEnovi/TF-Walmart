// filtro
const search = document.getElementById('search');
const btnSerach = document.getElementById('search-btn');


const filter = () => {
  console.log(search.value);
  // let newOrder = orders.filter((i) => {
  //   return orderNumber == search;
  // })
  return //newOrder;
};

btnSerach.addEventListener('click', filter);
// Elementos HTML
const btnLogout = document.getElementById('btnLogout');

// Función para salir
btnLogout.addEventListener('click', el => {
  firebase.auth().signOut();
  window.location.assign('../../index.html');
});
