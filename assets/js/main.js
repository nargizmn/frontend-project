//MENU BUTTON
let menuOpen = false;
$('.menu-btn').click(function(event){
  event.preventDefault();
  if(!menuOpen) {
    $('.menu-btn').removeClass('close')
    $('.menu-btn').addClass('open')
    $('.mobile-nav').toggle();
    menuOpen = true;
  } else {
    $('.mobile-nav').toggle();
    $('.menu-btn').removeClass('open')
    $('.menu-btn').addClass('close')
    menuOpen = false;
  }
});

$('.mobile-list').click(function(){
  $('.mobile-nav').removeAttr('style');
    $('.menu-btn').removeClass('open')
    $('.menu-btn').addClass('close')
});


//SCROLL PAGE
  $('.nav-item-1').click(function(event) {
    event.preventDefault();
    window.scrollTo($('.what-we-do').position().left, $('.what-we-do').position().top);
  });

  $('.nav-item-2').click(function(event) {
    event.preventDefault();
    window.scrollTo($('.achievements').position().left, $('.achievements').position().top);
  });

  $('.nav-item-3').click(function(event) {
    event.preventDefault();
    window.scrollTo($('.work-with-us').position().left, $('.work-with-us').position().top);
  });

  $('.nav-item-4').click(function(event) {
    event.preventDefault();
    window.scrollTo($('.latest-news').position().left, $('.latest-news').position().top);
  });

  $('.nav-item-5').click(function(event) {
    event.preventDefault();
    window.scrollTo($('#fifth-screen').position().left, $('#fifth-screen').position().top);
  });



//INTERSECTION OBSERVER
const observeItems = Array.from(document.getElementsByClassName('observe-item'));
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry); 
    }
  });
}, {rootMargin: '-5px 0px -55%'});
function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('.visible');
  const shouldBeActive = document.querySelector('[data-ref='+ id +']');

  if (currentlyActive) {
    currentlyActive.classList.remove('visible');
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add('visible');
  }
};
observeItems.forEach((section) => {
  observer.observe(section);
});



//COUNTER UP
jQuery(document).ready(function($){
  $('.numberUpper').counterUp({
      delay: 10,
      time: 1000
  });
});


//STICKY HEADER
const header = document.querySelector('header');
let sticky = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
};


//WORLD MAP
$(document).on('mouseover', '.world-map svg path', function (e) {
  country = $(this).attr("id"),
  country_name = $(this).attr("title");
  let pathColor;
  $("[data-city="+country+"]").attr("fill", "#fff");

  if ($(this).attr("data-status") === "enable_me") {

      pathColor = $("[data-city="+country+"]").eq(0).data("fill");
      $(this).attr("fill", pathColor);

      console.log($("[data-city="+country+"]").offset().left);

      $(".selected-country").removeClass("d-none");
      $(".selected-country").css("left", ($("[data-city="+country+"]").position().left - $(".world-map").offset().left + 11 )+"px");
      $(".selected-country").css("top", ($("[data-city="+country+"]").position().top - $(".world-map").offset().top - 35)+"px");
      $(".selected-country-span").text(country_name);
      $(".selected-country-image").attr("src", "./assets/images/flags/"+country+".png");

  }
});

$(document).on('mouseleave ', '.world-map svg path', function (e) {
  country = $(this).attr("id"),
  country_name = $(this).attr("title");
  if ($(this).data("status") === "enable_me") {
    $(this).attr("fill", "#E5E9F4")
  }

  $("[data-city="+country+"]").eq(0).attr("fill", $("[data-city="+country+"]").eq(0).data("fill"));
  $("[data-city="+country+"]").eq(1).attr("fill", $("[data-city="+country+"]").eq(1).data("fill"));
  $("[data-city="+country+"]").eq(2).attr("fill", $("[data-city="+country+"]").eq(2).data("fill"));
  $("[data-city="+country+"]").eq(3).attr("fill", $("[data-city="+country+"]").eq(3).data("fill"));
  $(".selected-country").addClass("d-none");
});


$(document).on('mouseover', '.world-map svg circle, .world-map svg .half', function (e) {
  country = $(this).data("city"),
  country_name = $("#"+country).attr("title");
  $("[data-city="+country+"]").attr("fill", "#fff");
  let circleColor;

  if ($("#"+country).length) {
      circleColor = $("[data-city="+country+"]").eq(0).data("fill");
      $("#"+country).attr("fill", circleColor);

      $(".selected-country").removeClass("d-none");
      $(".selected-country").css("left", ($("[data-city="+country+"]").position().left - $(".map-svg").offset().left + 11 )+"px");
      $(".selected-country").css("top", ($("[data-city="+country+"]").position().top - $(".map-svg").offset().top - 35)+"px");

      $(".selected-country-span").text(country_name);
      $(".selected-country-image").attr("src", "./assets/images/flags/"+country+".png");
    }

})

$(document).on('mouseleave', '.world-map svg circle, .world-map svg .half', function (e) {
    country = $(this).data("city");
    $("#"+country).attr("fill", "#E5E9F4");
    $("[data-city="+country+"]").eq(0).attr("fill", $("[data-city="+country+"]").eq(0).data("fill"));
    $("[data-city="+country+"]").eq(1).attr("fill", $("[data-city="+country+"]").eq(1).data("fill"));
    $("[data-city="+country+"]").eq(2).attr("fill", $("[data-city="+country+"]").eq(2).data("fill"));
    $("[data-city="+country+"]").eq(3).attr("fill", $("[data-city="+country+"]").eq(3).data("fill"));
    $(".selected-country").addClass("d-none");
});



  //TABS
  const tabNames = Array.from(document.getElementsByClassName('tab-name'));
  const tabTexts = Array.from(document.getElementsByClassName('tab-text'));

  tabNames.forEach(clickedTab => {
    clickedTab.addEventListener('click', (e) =>{
      tabNames.forEach(tabName => {
        tabName.classList.remove('active')
      });
      e.target.classList.add('active');

      tabTexts.forEach((text)=>{
        text.classList.add('d-none');
      });
      tabTexts[tabNames.indexOf(e.target)].classList.remove('d-none');
    });
  });



  //VACANCIES
  const fileUpload = document.querySelector('.file-upload')
  const fileInput = document.getElementById('file');
  fileUpload.addEventListener('click', (e)=> {
    fileInput.click();
  })  

const firstname = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const apply = document.getElementById('apply');
const form = document.querySelector('.vacancy-form');
const successText = document.querySelector('.apply-success');

apply.addEventListener('click', (e) =>{
  e.preventDefault();
  checkValue(firstname);
  checkValue(surname);
  checkValue(email);
  if(!fileInput.value){
    fileUpload.style.border = '1px solid red';
  }else{
    fileUpload.style.removeProperty('border');
  }
  if(firstname.value && surname.value && email.value && fileInput.value){
    form.style.display = 'none';
    successText.style.display = 'block';
  }
})

fileInput.addEventListener('change', (e) =>{
  if(!fileInput.value){
    fileUpload.style.border = '1px solid red';
  }else{
    fileUpload.style.removeProperty('border');
  }
});

[firstname, surname, email].forEach((input) =>{
  input.addEventListener('focus', (e) =>{
  checkValue(firstname);
  checkValue(surname);
  checkValue(email);
  });
});

function checkValue(input){
  if(!input.value){
    input.style.borderColor = 'red';
  }else{
    input.style.removeProperty('border-color');
  }
};




