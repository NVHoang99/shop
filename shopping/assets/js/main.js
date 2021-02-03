$(document).ready(function () {
  // Add smooth scrolling to all links
  var $root = $("html, body");
  $('a[href^="#"]').click(function (event) {
      $root.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
    event.preventDefault();
  });

  //Get the button:
  mybutton = document.getElementById("scrolltop");
  // When the user scrolls down 50px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // tab
  let tabHeader = document.getElementsByClassName("tab__title")[0];
  let tabBody = document.getElementsByClassName("tab__body")[0];
  let tabsPane = tabHeader.getElementsByTagName("li");
  for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
      tabHeader.getElementsByClassName("active")[0].classList.remove("active");
      tabsPane[i].classList.add("active");

      tabBody.getElementsByClassName("active")[0].classList.remove("active");
      tabBody.getElementsByClassName("tab__content")[i].classList.add("active");
    });
  }
});
