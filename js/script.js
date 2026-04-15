window.onload = function() {
		const toggle = document.getElementById('switchCheckDefault'); //Checkbox asignado a la variable toggle para activar/desactivar el modo oscuro
		
		//Función para definir la animación de las particulas
		function initParticles(isDark, color, value1, value2){
			particlesJS("particles-js", {
				particles: {
					number: { value: 80, density: { enable: true, value_area: 800 } },
					color: { value: color },
					shape: { type: "circle" },
					opacity: { value: 0.7 },
					size: { value: 3 },
					line_linked: { enable: true, distance: 150, color: "#3976e6", opacity: value1, width: value2 },
					move: { enable: true, speed: 2 }
				},
				interactivity: {
					events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
					modes: { grab: { distance: 200, line_linked: { opacity: 1 } } }
				},
				retina_detect: true
			});
		};
			
		initParticles(false, "#525457", "0.4", "1"); //La función se activa automáticamene
		
		
		function themeEnabled(dark){ //Función para aplicar los estilos según el modo oscuro esté activado o no
			if(dark){
				initParticles(true, "#e1e4e8", "0.8", "2");
				document.documentElement.setAttribute('data-bs-theme', 'dark');
				document.getElementById("particles-js").style.backgroundColor = "black";
				document.getElementById("nav").style.backgroundColor = "#858585";
				const enlaces = document.querySelectorAll('#nav a');
					
				enlaces.forEach(enlace => {
					enlace.style.color = "white";
						
				});
				
				document.body.style.color = "white";
			}else{
				initParticles(true, "#525457", "0.4", "1");
				document.documentElement.setAttribute('data-bs-theme', 'light');
				document.getElementById("particles-js").style.backgroundColor = "#f5f5f5";
				document.getElementById("nav").style.backgroundColor = "lightgrey";
				const enlaces = document.querySelectorAll('#nav a');
					
				enlaces.forEach(enlace => {
					enlace.style.color = "black";
						
				});
				
				document.body.style.color = "black";
			}		
		}
		
		const savedTheme = localStorage.getItem('myTheme'); //Constante para revisar el tema guardado en el navegador
		
		if (savedTheme === 'dark') { //Si el valor en memoria es 'dark', el checkbox se marca como activado y se aplican los estilos del tema oscuro de la función themeEnabled
			toggle.checked = true;
			themeEnabled(true);
		} else {					 //Si el valor en memoria no es 'dark', el checkbox se marca como desactivado y se aplican los estilos del tema normal de la función themeEnabled
			toggle.checked = false;
			themeEnabled(false);
		}
		
		toggle.addEventListener('change', function() { //Evento para aplicar los estilos y guardar el tema en memoria según el checkbox esté marcado o no
			if (this.checked) {
				themeEnabled(true);
				localStorage.setItem('myTheme', 'dark'); //Si el tema está activo, se guarda el valor 'dark' al item 'myTheme'
			} else {
				themeEnabled(false);
				localStorage.setItem('myTheme', 'light'); //Si el tema no está activo, se guarda el valor 'light' al item 'myTheme'
			}
		});
		
		
};
