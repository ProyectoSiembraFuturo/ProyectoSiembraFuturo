
function QR() {
    document.getElementById("informacion").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("crt").style.display = "none";
    document.getElementById("promo").style.display = "none";
    document.getElementById("respon").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("invierta").style.display = "none";
    document.getElementById("invierta2").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    conta=0;
    contador=2;
}



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {


    document.getElementById("portafolio").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("invierta2").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("crt").style.display = "none";
    document.getElementById("promo").style.display = "none";
    document.getElementById("respon").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("invierta").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    conta=0;
    contador=1;
}


function objetivos() {
    document.getElementById("objetivos").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function crt(){
    document.getElementById("crt").style.display = "block";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function promo(){
    document.getElementById("promo").style.display = "block";
    document.getElementById("crt").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function respon(){
    document.getElementById("respon").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function galery(){
    document.getElementById("galeria").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function inver(){
    document.getElementById("invierta").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function inver2(){
    document.getElementById("invierta2").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    
}

function mapa() {
    document.getElementById("mapa").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("crt").style.display = "none";
    document.getElementById("promo").style.display = "none";
    document.getElementById("respon").style.display = "none";
    document.getElementById("galeria").style.display = "none"; 
    document.getElementById("invierta").style.display = "none";
    document.getElementById("invierta2").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";

    conta=0;
    contador=2;
    
}

function contactar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("crt").style.display = "none";
    document.getElementById("promo").style.display = "none";
    document.getElementById("respon").style.display = "none";
    document.getElementById("galeria").style.display = "none"; 
    document.getElementById("invierta").style.display = "none";
    document.getElementById("invierta2").style.display = "none";
    document.getElementById("mapa").style.display = "none";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;
    
}

function sms() {
    alert("Esta Información Estara Disponible Próximamente");    
 } 

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("objetivos").style.display = "none";
        document.getElementById("crt").style.display = "none";
        document.getElementById("promo").style.display = "none";
        document.getElementById("respon").style.display = "none";
        document.getElementById("galeria").style.display = "none";
        document.getElementById("invierta").style.display = "none";
        document.getElementById("invierta2").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("mapa").style.display = "none";
        contador=1;

    }
    
    
    }


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
   


   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        // llevar cerrar side automatico

        document.querySelector('.tarjeta').addEventListener('click',()=>{
            document.getElementById("side").style.display = "none";
            conta=0;
            });

  
// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 50,
         behavior: 'smooth'
        });
        });

        // slider
 
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionlast = sliderSection[sliderSection.length -1];
  
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-rigth");
  
  slider.insertAdjacentElement('afterbegin', sliderSectionlast);
  
  function next (){
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('beforeend', sliderSectionFirst);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  function Prev (){
      let sliderSection = document.querySelectorAll(".slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length -1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('afterbegin', sliderSectionLast);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  btnRight.addEventListener('click', function(){
      next();
  });
  
  btnLeft.addEventListener('click', function(){
      Prev();
  });
  
  setInterval(function(){
      next();
  },4000);   
  

         
           
  
//formulario>


        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "573984660074";
          
            let cliente = document.querySelector("#cliente").value;
            let edad = document.querySelector("#edad").value;
            let msj = document.querySelector("#msj").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=593984660074&text=
                  *Proyecto Siembra Furuto*%0A
                  *Datos del Contacto*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Celular*%0A
                  ${edad}%0A
                  *Mensaje*%0A
                  ${msj}%0A`;
          
            if (cliente === "" || edad === "" || msj === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Msj Fue Enviado, ${cliente}`;
          
            window.open(url);
          });
          
    
    
        




