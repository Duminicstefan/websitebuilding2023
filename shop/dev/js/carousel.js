var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true,
  ride: false,
})
var id;
$("#modalForm").on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //Button that triggered the modal
  const produs = button.data('name') //need to find the button and get product
  const pret = button.data('price') //need to find the button and get price
  const description = button.data('description')
  $(".modal-header #titleModalLabel").html(produs);
  $(".modal-body #price").html(pret);
  $(".modal-body #description").html(description);
  id = button.attr('id');
  // var datainfo = document.getElementById(id);
  alert(JSON.stringify(button));
  // alert(JSON.stringify(datainfo));


})
$("#modalForm").on('hidden.bs.modal', function (event) {

  // alert('Modalul s-a inchis');
  document.getElementById(id).classList.remove('btn-primary');
  document.getElementById(id).classList.add('btn-info');
})
