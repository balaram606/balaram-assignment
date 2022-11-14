function SubmitClick(){
  const username  = document.getElementById("fname");
  const emailvalue = document.getElementById("femail");

  
  if(username.value =="" ||emailvalue.value == ""){
    alert("No Blank Values allowed");
  }else{
    alert("Form Submitted");
  }

 };

$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {

            slidesToShow: 1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  
  $(document).ready(function () {
    $(".cards").slick({
      slidesToShow: 0,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll:1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  $(document).ready(function () {
    $(".enterprise").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  
  
  