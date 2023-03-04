// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
// darkmode
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
// sfarsit darkmode
// produse
var id;
    $("#modalForm").on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); //Button that triggered the modal
      const produs = button.data('name') //need to find the button and get product
      const pret = button.data('price') //need to find the button and get price
      const description= button.data('description');
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

    function onSubmit(token) {
      document.getElementById("demo-form").submit();
    }
    // sfarsit produse
 