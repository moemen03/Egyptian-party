"use strict";
/// <reference types="../@types/jquery"/>


$(".openNav").click(()=>{
    $("#Menu").animate({ width:'250px'},50)
   $("#homeContent").animate({marginLeft :'250px'},50)
})

$(".close").click(()=>{
    $("#Menu").animate({ width:'0px'},50)
   $("#homeContent").animate({marginLeft :'0px'},50)
})

// slider

$("#slider .heading").click((e) => {
  $(".inner").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});


// counter

let countDown = new Date("Apr 28, 2025 21:00:00").getTime();
let t = setInterval(() => {
  let now = new Date().getTime();
  let difference = countDown - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  $(".days").html(`-${days} d`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);
}, 1000);




//textarea

let maxLength = 100;
$('textarea').keyup(function(){
    let contain = $(this).val().length;
    var left = maxLength - contain;
    if(left <= 0){
        $("#chars").text("your available character finished");
    }else{
        $("#chars").text(left);
    }
});