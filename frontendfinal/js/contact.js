document.querySelector(".whi").style.color = "white";
document.getElementsByTagName("input")[0].style.border="1px solid #eeee";
document.getElementsByTagName("input")[1].style.border="1px solid #eeee";
document.getElementsByTagName("input")[2].style.border="1px solid #eeee";
document.getElementsByTagName("input")[3].style.border="1px solid #eeee";
document.getElementsByTagName("input")[0].style.borderRadius = "8px";
document.getElementsByTagName("input")[1].style.borderRadius = "8px";
document.getElementsByTagName("input")[2].style.borderRadius = "8px";
document.getElementsByTagName("input")[3].style.borderRadius = "8px";
document.getElementsByTagName("input")[0].style.height = "55px";
document.getElementsByTagName("input")[1].style.height = "55px";
document.getElementsByTagName("input")[2].style.height = "55px";
 
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







