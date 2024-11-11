const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

//-------------------------------------------------------------------------------------------------------------------------
// Modal Registro

let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
  event.preventDefault();
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active')
})

//--------------------------------------------------------------------------------------------------------------------------
//Modal tela de compra

//Contador
const mais = document.querySelector(".mais")
const menos = document.querySelector(".menos")
const num = document.querySelector(".num")

let acc = 1

mais.addEventListener("click", ()=>{
  acc++
  acc = (acc < 10) ? "0" + acc : acc;
  num.innerText = acc;
  console.log("acc")
})

menos.addEventListener("click", ()=>{
  if(acc > 1){
    acc--;
    acc = (acc < 10) ? "0" + acc : acc;
    num.innerText = acc;
  }
})

// Modal

const compraBtn = document.querySelectorAll(".compra-btn")
const modal = document.querySelector(".dialog-compra")
const fecharBtn = document.querySelector(".compra-close")
const modalImagem = document.querySelector('#modal-imagem')
const modalTitulo = document.querySelector('#modal-titulo')

compraBtn.forEach(function(compraBtn) {
  compraBtn.onclick = function() {

    const imagemSrc = compraBtn.getAttribute('data-imagem')
    const titulo = compraBtn.getAttribute('data-titulo')

    modalImagem.src = imagemSrc
    modalTitulo.textContent = titulo

    modal.showModal();
    console.log('clicado');
  };
});



fecharBtn.onclick = function() {
  modal.close()
}