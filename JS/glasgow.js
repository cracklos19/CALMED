class Paciente
            {
                constructor(motora, ocular, habla)
                {
                    this.motora= motora;
                    this.ocular= ocular;
                    this.habla= habla;
                    
                    
                };
               
              
            };

const pacientes= [];
const glasgow= document.getElementById("glasgow");
const mensaje= document.getElementById("mensaje");
glasgow.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);
   
    const motora= document.getElementById("motor").value;
    const ocular= document.getElementById("ocular").value;
    const habla= document.getElementById("verbal").value;
    
    const paciente1= new Paciente( parseInt(motora), parseInt(ocular), parseInt(habla));
    pacientes.push(paciente1);
    console.log(paciente1);

    function calcGlas(motora,ocular,habla){
        return parseInt(paciente1.motora)+parseInt(paciente1.ocular)+parseInt(paciente1.habla)
    };
    console.log(calcGlas());

    mensaje.innerHTML+= `<p> El puntaje de su paciente es de  ${calcGlas()} puntos sobre 15 (M:${parseInt(paciente1.motora)}-O:${parseInt(paciente1.ocular)}-V:${parseInt(paciente1.ocular)}).</p>` ;

if(calcGlas()<= 9){
    mensaje.innerHTML+= `<p>Valorar la posibilidad de intubación orotraqueal según cuadro del paciente.</p>`;
}

else{
    mensaje.innerHTML+= `<p>Continue valorando con la escala periódicamente al paciente según cuadro clínico.</p>`;
};


glasgow.reset();

      });
     

      const botCalc= document.getElementById("botonCalcMet")
botCalc.onclick= () =>{
};
