AOS.init();
document.querySelector(".mini-orange").style.filter = "invert(90%) sepia(45%) saturate(4968%) hue-rotate(317deg) brightness(101%) contrast(101%)";
document.querySelector(".mini-pink").style.filter = "invert(52%) sepia(45%) saturate(4958%) hue-rotate(317deg) brightness(101%) contrast(101%) ";
document.querySelector(".mini-purple").style.filter = "invert(60%) sepia(19%) saturate(5597%) hue-rotate(209deg) brightness(102%) contrast(101%) ";
window.onscroll = function() {
    var header = document.querySelector("nav");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.style.background = "white";
        document.querySelector(".signingbutton").style.background = " #3080E3";
        
        document.getElementById("toblack").style.color = "white";
               document.getElementById("toblack").style.color = "black";
        document.getElementById("toblack").addEventListener("mouseover",function fillblue(){
            document.getElementById("toblack").style.color = " #3080E3";
            document.getElementById("toblack").style.textDecoration = "underline";
        })

    }
};

$(".drop-home").on("mouseover", function () {
    $(".for-home").addClass('d-block');
    
});
$(".drop-about").on("mouseover", function () {
    $(".for-about").addClass('d-block');
    
});
$(".drop-blog").on("mouseover", function () {
    $(".for-blog").addClass('d-block');
    
});
$(".drop-about").on("mouseout", function () {
    setTimeout( function(){
        $('.for-about').removeClass('d-block');


    }, 1000);
});
$(".drop-blog").on("mouseout", function () {
    setTimeout( function(){
        $('.for-blog').removeClass('d-block');


    }, 1000);
});
$(".drop-home").on("mouseout", function () {
    setTimeout( function(){
        $('.for-home').removeClass('d-block');


    }, 1000);
});

$(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
  });

  let counter = document.querySelectorAll(".countup");
  let arr = Array.from(counter);
  arr.map((item)=>{
      let count = item.innerHTML;
      item.innerHTML = "";
      let countNumber= 0;
  
  
      function counterUp(){
          item.innerHTML= countNumber++;
          if ( countNumber > count ) {
              clearInterval(stop);
          }
      }
  
      let stop = setInterval(() => {
          counterUp();
      },item.dataset.speed/count );
  
  });

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  