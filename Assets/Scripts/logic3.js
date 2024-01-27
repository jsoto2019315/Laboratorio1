let listElements = document.querySelectorAll('.list__buttom--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        console.log(menu.scrollHeight);
        if (menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
});


function toggleMenu() {
    var menu = document.getElementById("menuDesplegable");
    menu.classList.toggle("mostrar");
}



document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1; // Establece slideIndex en 1 para mostrar la primera imagen
    showSlides(slideIndex);

    // Función para cambiar manualmente los slides
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});

let currentIndex = 0;

  function showSlide(index) {
    const wrapper = document.getElementById('carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;

    currentIndex = index;

    const transformValue = -currentIndex * itemWidth + 'px';
    wrapper.style.transform = 'translateX(' + transformValue + ')';
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
    showSlide(currentIndex);
  }

  // Muestra la primera imagen al cargar la página
  showSlide(currentIndex);