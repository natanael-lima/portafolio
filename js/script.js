// Muestra el spinner
var spinnerContainer = document.querySelector('.spinner-container');
spinnerContainer.style.display = 'flex';

// Oculta el spinner después de 3 segundos
setTimeout(function () {
  spinnerContainer.style.display = 'none';
}, 2000); // 3000 milisegundos = 3 segundos

//menu para cambiar de color al hacer clic
document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section");
	const links = document.querySelectorAll("nav a");
  
	window.addEventListener("scroll", () => {
	  sections.forEach((section) => {
		const top = window.scrollY;
		const offset = section.offsetTop;
		const height = section.offsetHeight;
		const id = section.getAttribute("id");
		
		if (top >= offset && top < offset + height) {
		  links.forEach((link) => {
			link.classList.remove("active-link");
		  });
		  document.querySelector('nav a[href*="' + id + '"]').classList.add("active-link");
		}
	  });
	});
  });

//banner-menu animacion logo a nav
$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "5px", "width": "83px","height":"33px"});

				$("header").css({"background-color": "#00080af6"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "300px", "width": "530px","height":"230px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});

// reponsive menu
$(document).ready(function() {
	$("#menu-icon").click(function() {
	  $("#nav-list").toggleClass("active");
	});
  });

// Función para abrir el menú móvil
function openMobileMenu() {
	document.getElementById("mobile-menu").classList.add("active");
  }
  
  // Función para cerrar el menú móvil
  function closeMobileMenu() {
	document.getElementById("mobile-menu").classList.remove("active");
  }
  
  // Eventos para abrir y cerrar el menú móvil
  document.getElementById("menu-icon").addEventListener("click", openMobileMenu);
  document.getElementById("mobile-menu").addEventListener("click", closeMobileMenu);


// video
function playVideo(card) {
	card.classList.add('playing');
	card.querySelector('video').play();
  }

  function pauseVideo(card) {
	card.classList.remove('playing');
	card.querySelector('video').pause();
  }

//visor
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
