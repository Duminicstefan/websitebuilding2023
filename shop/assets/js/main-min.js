var myCarousel=document.querySelector("#myCarousel"),carousel=new bootstrap.Carousel(myCarousel,{interval:2e3,wrap:!0,pause:"hover",keyboard:!0,touch:!0,ride:!1});$("#modalForm").on("show.bs.modal",function(t){var o=$(t.relatedTarget);const e=o.data("name"),d=o.data("price"),n=o.data("description");$(".modal-header #titleModalLabel").html(e),$(".modal-body #price").html(d),$(".modal-body #description").html(n),id=o.attr("id"),alert(JSON.stringify(o))}),$("#modalForm").on("hidden.bs.modal",function(t){document.getElementById(id).classList.remove("btn-primary"),document.getElementById(id).classList.add("btn-info")});let mybutton=document.getElementById("myBtn");function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function myFunction(){document.body.classList.toggle("dark-mode")}var id;function onSubmit(t){document.getElementById("demo-form").submit()}window.onscroll=function(){scrollFunction()},$("#modalForm").on("show.bs.modal",function(t){var o=$(t.relatedTarget);const e=o.data("name"),d=o.data("price"),n=o.data("description");$(".modal-header #titleModalLabel").html(e),$(".modal-body #price").html(d),$(".modal-body #description").html(n),id=o.attr("id"),alert(JSON.stringify(o))}),$("#modalForm").on("hidden.bs.modal",function(t){document.getElementById(id).classList.remove("btn-primary"),document.getElementById(id).classList.add("btn-info")}),$("#modalForm").on("show.bs.modal",function(t){var o=$(t.relatedTarget);const e=o.data("email"),d=o.data("nume");$(".modal-body #email").val(e),$(".modal-body #name").val(d),id=o.attr("id"),alert(JSON.stringify(o[0]))}),$("#modalForm").on("hidden.bs.modal",function(t){alert("Modalul s-a inchis"),document.getElementById(id).classList.remove("btn-primary"),document.getElementById(id).classList.add("btn-success")}),document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(){window.scrollY>400?(document.getElementById("navbar_top").classList.add("fixed-top"),navbar_height=document.querySelector(".navbar").offsetHeight,document.body.style.paddingTop=navbar_height+"px"):(document.getElementById("navbar_top").classList.remove("fixed-top"),document.body.style.paddingTop="0")})}),$(document).ready(function(){$("body").scrollspy({target:"#navbar_top"})}),$(document).ready(function(){$('[data-bs-toggle="tooltip"]').tooltip(),$('[data-bs-toggle="popover"]').popover()}),function(){"use strict";const t=document.querySelectorAll(".requires-validation");Array.from(t).forEach(function(t){t.addEventListener("submit",function(o){t.checkValidity()||(o.preventDefault(),o.stopPropagation()),t.classList.add("was-validated")},!1)})}();