document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.pageYOffset > 0) {
    nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

$(document).ready(function() {
    $(".navbar a").on("click", function() {
      $(".navbar").removeClass("open");
      $("#check").prop("checked", false);
      var target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
});


