document.addEventListener('DOMContentLoaded', function(){ iniciarapp(); });

let habilitar = true;
let varhrf = "";

function iniciarapp(){
    menu_lateral();
    resaltar_btns_menuL();
    resaltar_btns_scrollear();
    skills();
    //contador_animado_num();
    sliderswiper();
    mapa();
    eliminar_msj();
}

function menu_lateral(){
    const menu_lateral = document.querySelector('#menu_lateral');
    const cerrar_menuL = document.querySelector('#cerrar-menuL'); 
    const abrir_menuL = document.querySelector('#abrir_menuL');
   /* cerrar_menuL.addEventListener('click', ()=>{
        menu_lateral.classList.remove('mostrar_menuL');
    });*/
    abrir_menuL.addEventListener('click', ()=>{
       menu_lateral.classList.toggle('dashboard__mostrar_menuL');
    });
}

function resaltar_btns_menuL(){
    //selecciono todas los elemtos <a><a><a>....
    btns_a = document.querySelectorAll('.dashboard__menu a');
    btns_a[1].classList.add('dashboard__enlace--actual');
    
    btns_a.forEach((btn_a)=>{
        btn_a.addEventListener('click', function(e){ 
            habilitar=false; //me deshabilita la interseccion del intersectionobserver para que no particie la class de resalto 2 veces
            btns_a.forEach(btn_a =>{  
        //se busca elemento anterior resaltado para eliminar clase
                if(btn_a.classList.contains('dashboard__enlace--actual'))
                    btn_a.classList.remove('dashboard__enlace--actual')
            });
            //a elemento seleccionado le añade la clase dashboard__enlace--actual
            e.target.classList.add('dashboard__enlace--actual'); 
            //varhrf = e.target.classList[1];
            //console.log(varhrf.classList[1]);
            varhrf = e.target.href.slice(24);
            //console.log(varhrf);
        });
    });
}


function resaltar_btns_scrollear(){ //funcion que al scrollear me resalta los botones del sidebar o menu lateral
    btns_a = document.querySelectorAll('.dashboard__menu a');
    const observer = new IntersectionObserver(entries =>{

        entries.forEach(entrie =>{
            //interseccion con la caja de los contadores
            if(entrie.target.classList.contains('aboutme__contadores')){ 
                if(entrie.isIntersecting && (entrie.target.firstElementChild.children[0].textContent === '0+'))contador_animado_num();
                
            }else{
                if(entrie.isIntersecting && habilitar){
                    const btn_a = document.querySelector(`a[href="#${entrie.target.id}"]`); //btn de los enlaces del sidebar
                    //seria en funcion
                    btns_a.forEach(btn_a =>{   
                        if(btn_a.classList.contains('dashboard__enlace--actual'))
                            btn_a.classList.remove('dashboard__enlace--actual')
                    });
                    btn_a.classList.add('dashboard__enlace--actual');
                }   //fin funcion
                
                //if(entrie.isIntersecting==false && btn_a.classList.contains('dashboard__enlace--actual')){
                //  btn_a.classList.remove('dashboard__enlace--actual');
                    //console.log(entries);   
                //}
                console.log(entrie.target.id);
                if(entrie.isIntersecting && (entrie.target.id === varhrf))habilitar=true;
            }
        });
      
    }, {
        root: null, rootMargin: '0px 0px -0px 0px', threshold: 1.0
    });
  
    observer.observe(document.querySelector('#contador_num'));  //caja de contadores a observar
    observer.observe(document.querySelector('#up'));
    observer.observe(document.querySelector('#aboutme'));
    observer.observe(document.querySelector('#services'));
    observer.observe(document.querySelector('#portafolio'));
    observer.observe(document.querySelector('#contact'));
}

function skills(){
    const btnskills = document.querySelector('#skills');
    btnskills.addEventListener('click', (e)=>{
        e.preventDefault();
        
        Swal.fire({
            customClass: {
                closeButton: 'sweetbtnclose'
            },
            html: `<div class="skills">
                    <div class="skills__container">
                        <h1 class="skills__heading">My Skills</h1>
                        <div class="skills__contenido">

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">80%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor1">
                                            <stop offset="0%" stop-color="#090979" />
                                            <stop offset="100%" stop-color="#005bff" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                                <p class="name">HTML</p>    
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">73%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor2">
                                            <stop offset="0%" stop-color="#00d4ff" />
                                            <stop offset="100%" stop-color="#005bff" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>   
                                <p class="name">CSS</p> 
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">77%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor3">
                                            <stop offset="0%" stop-color="#ffd100" />
                                            <stop offset="100%" stop-color="#faff86" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>    
                                <p class="name">JAVASCRIPT</p>
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">65%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor4">
                                            <stop offset="60%" stop-color="#79bb4b" />
                                            <stop offset="100%" stop-color="#ebd825" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>    
                                <p class="name">Node.js/Express.js</p>
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">70%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor5">
                                            <stop offset="0%" stop-color="#6d6bf9" />
                                            <stop offset="100%" stop-color="#5529a7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>    
                                <p class="name">PHP</p>
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">68%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor6">
                                            <stop offset="50%" stop-color="#3573b0" />
                                            <stop offset="50%" stop-color="#eec025" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>    
                                <p class="name">MySQL</p>
                            </div>

                            <div class="skills__skill">
                                <div class="afuera">
                                    <div class="adentro">
                                        <p class="numero">85%</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor7">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>    
                                <p class="name">SASS</p>
                            </div>
                            
                        </div>
                    </div>
                   </div>`,

            width: 'auto',
            showCloseButton: true,
            showConfirmButton: false,
            background: '#202020',
            padding: '3rem 1rem'
          })
    });
}
  

function contador_animado_num(){  
        let nums = document.querySelectorAll('.count_num');  //selecciona el span que muestra los numeros
        const intervalo = 2500;
        nums.forEach( num =>{
            let num_inicial = 0;
            let num_end = parseInt(num.getAttribute('data-valor'));
            let duracion = Math.floor(intervalo/num_end);  // rendondea hacia a bajo 2.7 rendondea a 2

            let tiempo = setInterval(() => {
                num_inicial++;
                num.textContent = num_inicial+"+"; 
                if(num_inicial == num_end){
                    num.textContent = (num_end/10)+"+";
                    clearInterval(tiempo);
                }
            }, duracion);
       });
       habilitar_interseccion = 0;
}


function sliderswiper(){
    const opciones = {
        slidesPerView: 1, //cantidad de elementos a mostrar inicialmente
        spaceBetween: 15,  //espcion entre elementos
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {  //es como mediaquery mostrar elementos segun tamaño de pantalla
            480: {slidesPerView: 2},
            768: {slidesPerView: 3},
            992: {slidesPerView: 4}
        }
    }
    var swiper = new Swiper(".swiper", opciones); 
    
}

function mapa(){
    if(document.querySelector('#mapa')){
        const latitud = 4.545461;
        const longitud = -75.668449;
        const zoom = 15;
    
        var map = L.map('mapa').setView([latitud, longitud], zoom);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([latitud, longitud]).addTo(map)
        .bindPopup(`<h3 class="mapa__heading">JDR PROGRAMMER</h3>
                   <p class="mapa__texto">Ubicame para mas informacion</p>`)
        .openPopup();
    
    }
}

function eliminar_msj(){ //mensaje que se genera cuando se envia formulario
    if(document.querySelector('.maquina-escribir')){
        setTimeout(() => {
            document.querySelector('.maquina-escribir').remove();
        }, 8000);
    }
}