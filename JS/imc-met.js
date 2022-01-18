
class Persona
            {
                constructor(nombre, peso, talla, edad, sexo, actividad)
                {
                    this.nombre= nombre;
                    this.peso= peso;
                    this.talla= talla;
                    this.edad= edad;
                    this.sexo= sexo;
                    this.actividad= actividad;
                    
                };
               
              
            };

const personas= [];
const calcMet= document.getElementById("calcMet");
const mensaje= document.getElementById("mensaje");
calcMet.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);
    const nombre= document.getElementById("nombre").value;
    const peso= document.getElementById("peso").value;
    const talla= document.getElementById("altura").value;
    const edad= document.getElementById("edad").value;
    const sexo= document.getElementById("sexo").value;
    const actividad= document.getElementById("nivelAct").value;
    
    

    const persona= new Persona(nombre, parseInt(peso), parseInt(talla), parseInt(edad), sexo, actividad);
    personas.push(persona);
    localStorage.setItem("keyPersona", JSON.stringify(personas));
    
    

    
function mts(nro1, nro2, resultado) {
    return parseInt(persona.talla)/100
    
};

function restahombres (promedio,estaturaPaciente,resultado) {
    return parseInt(persona.talla)-174.6
    
};

function restamujeres(promedio,estaturaPaciente,resultado) {
    return parseInt(persona.talla)-159.2
    
};


function iMc(peso, TallaCubo, resultado){
    return parseInt(persona.peso) / (mts()*mts());
} ;
mensaje.innerHTML= `Hola ${persona.nombre}:`

mensaje.innerHTML+= `<p>Su índice de masa corporal es  ${iMc().toFixed(1)}.</p>` ;

if(iMc()< 19){
    mensaje.innerHTML+= `<p>Usted se encuentra en el rango de desnutrición.</p>`;
}

else if(iMc()>= 19 && iMc() <25 ){
    mensaje.innerHTML+= `<p>Usted se encuentra en un rango saludable de peso.</p>`;
}

else if( iMc() >25 && iMc()<30){
    mensaje.innerHTML+= `<p>Usted se encuentra en el rango de sobrepeso.</p>`;
}

else{
    mensaje.innerHTML+= `<p>Usted se encuentra en el rango de obesidad.</p>`;
};

function tMb(Harris,Benedict ) {
    return (66.4730 + (13.7516 * parseInt(persona.peso))) + (5.0033 * parseInt(persona.talla)) - (6.7550 * parseInt(persona.edad))
    
}

mensaje.innerHTML+= `Su tasa metabólica basal es igual a:  ${tMb().toFixed(1)}.` ;


mensaje.innerHTML+= `<p>Su talla en metros es de:   ${mts().toFixed(1)}.</p>` ;


if (mts()>1.746 && sexo=="hombre") { 
    mensaje.innerHTML+=  `<p>Su talla es superior al promedio de hombres argentinos por ${restahombres().toFixed(1)} centímetros.</p>` ;
}
else if (mts()<1.746 && sexo=="hombre") { 
    mensaje.innerHTML+=  `<p>Su talla es inferior al promedio de hombres argentinos por ${restahombres().toFixed(1)} centímetros.</p>` ;
}
else if (mts()==1.746 && sexo=="hombre") { 
    mensaje.innerHTML+=  `<p>Su talla es igual al promedio de hombres argentinos.</p>` ;

  
}

else if (mts()>1.592 && sexo=="mujer") { 
    mensaje.innerHTML+=  `<p>Su talla es superior al promedio de mujeres argentinas por ${restamujeres().toFixed(1)} centímetros</p>` ;
}
else if (mts()<1.592 && sexo=="mujer") { 
    mensaje.innerHTML+=  `<p>Su talla es inferior al promedio de mujeres argentinas por ${restamujeres().toFixed(1)} centímetros</p>` ;
}
else if (mts()==1.592 && sexo=="mujer") { 
    mensaje.innerHTML+=  `<p>Su talla es igual al promedio de mujeres argentinas.</p>` ;
};


console.log(personas);

calcMet.reset();


    
})


const botCalc= document.getElementById("botonCalcMet")
botCalc.onclick= () =>{
};



fetch("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true.")
.then(response => response.json())
.then(data => {
    console.log(data)

    
});
















  
  