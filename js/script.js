$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
});



// jQuery(function(f) {
//   var element = f('#back-top');
//   f(window).scroll(function() {
//     element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
//   });
// });







function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link").click(function() {
   scrollToAnchor('id3');
});

//якорь
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



// $(document).ready(function(){
//    $('a[href^="#"]').click(function () { 
//      elementClick = $(this).attr("href");
//      destination = $(elementClick).offset().top;
//      if($.browser.safari){
//        $('body').animate( { scrollTop: destination }, 1100 );
//      }else{
//        $('html').animate( { scrollTop: destination }, 1100 );
//      }
//      return false;
//    });
//  });


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content background: url(../img/menu-white.png) no-repeat; */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}