// side navbar iniatization with JQuery
$(document).ready(function() {
  $('.sidenav').sidenav();
});

// activation of side down panel display
$(document).ready(function() {
  // mir agrego las siguientes dos lineas
  const navarForms = document.getElementById('panel');
  navarForms.style.display = 'none';
  $('#flip').click(function() {
    $('#panel').slideToggle('slow');
  });
});

// activation of collapsible and expanded accordion for coments and opinions
$(document).ready(function() {
  $('.collapsible').collapsible();
});

// actication of collapsible add buttons to show the format for places, photos and recipes
$(document).ready(function() {
  $('add-photo').click(function() {
    $('photo-format').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('add-place').click(function() {
    $('place-format').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('add-recipe').click(function() {
    $('recipe-format').slideToggle('slow');
  });
});

// Elementos HTML
const btnLogout = document.getElementById('btnLogout');

// Función para salir
btnLogout.addEventListener('click', el => {
  firebase.auth().signOut();
  window.location.assign('../../index.html');
});

// filtro
// const search = document.getElementById('search');
// const btnSerach = document.getElementById('search-btn');


// const filter = () => {
//   console.log(search.value);
//   // let newOrder = orders.filter((i) => {
//   //   return orderNumber == search;
//   // })
//   return //newOrder;
// };


// btnSerach.addEventListener('click', filter);