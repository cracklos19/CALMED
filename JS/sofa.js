class Paciente
            {
                constructor(paO2, fiO2, plaquetas, glasgow, creatinina, bilirrubina, estabilidad)
                {
                    this.paO2= paO2;
                    this.fiO2= fiO2;
                    this.plaquetas= plaquetas;
                    this.glasgow= glasgow;
                    this.creatinina= creatinina ; 
                    this.estabilidad= estabilidad;  
                    this.bilirrubina= bilirrubina;
                    
                };
               
              
            };

const pacientes= [];
const sofa= document.getElementById("sofa");
const mensaje= document.getElementById("mensaje");
sofa.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);
   
    const paO2= document.getElementById("paO2").value;
    const fiO2= document.getElementById("fiO2").value;
    const plaquetas= document.getElementById("plaquetas").value;
    const glasgow= document.getElementById("glasgow").value;
    const creatinina= document.getElementById("creatinina").value;
    const bilirrubina= document.getElementById("bilirrubina").value;
    const estabilidad= document.getElementById("estabilidad").value;
    

    
    const paciente1= new Paciente( parseFloat(paO2), parseFloat(fiO2), parseFloat(plaquetas), parseFloat(glasgow), parseFloat(creatinina), parseFloat(bilirrubina), parseFloat(estabilidad));
    pacientes.push(paciente1);
    console.log(paciente1);

    function pafi(pao, fiO) {
        return (parseFloat(paO2)/parseFloat(fiO2))*100
        
    };

    function paf(PAFI) {
        if (  pafi() >= 300 &&   pafi() < 400 ) {
            return 1
            
        }
        else if (  pafi() >= 200 &&   pafi() < 300 ) {
            return 2
            
        }

        else if  (  pafi() >= 100 &&   pafi() < 200 ) {
            return 3
            
        }

        else if  (  pafi() < 100 ) {
            return 4
            
        }

        else{
            return 0
        }
        
    };

    function plax(plaqueta) {

        if (  parseFloat(plaquetas) >= 100000 &&  parseFloat(plaquetas) < 150000 ) {
            return 1
            
        }
        else if  (  parseFloat(plaquetas) >= 50000 &&  parseFloat(plaquetas) < 100000 ) {
            return 2
            
        }

        else if  (  parseFloat(plaquetas) >= 20000 &&  parseFloat(plaquetas) < 50000 ) {
            return 3
            
        }

        else if  (  parseFloat(plaquetas) < 20000 ) {
            return 4
            
        }

        else{
            return 0
        }
        
    };

function higado(bilirrubin) {

    if (  parseFloat(bilirrubina) >= 1.2 &&  parseFloat(bilirrubina) <= 1.9 ) {
        return 1
        
    }
    else if  (  parseFloat(bilirrubina) >= 2.0 &&  parseFloat(bilirrubina) <= 5.9 ) {
        return 2
        
    }

    else if  (  parseFloat(bilirrubina) >= 6 &&  parseFloat(bilirrubina) <= 11.9 ) {
        return 3
        
    }

    else if  (  parseFloat(bilirrubina) >= 12 ) {
        return 4
        
    }

    else{
        return 0
    }
    
};

function snc(glasg) {

    if (  parseFloat(glasgow) >= 13 &&  parseFloat(glasgow) <15 ) {
        return 1
        
    }
    else if  (  parseFloat(glasgow) >= 10 &&  parseFloat(glasgow) <13 ) {
        return 2
        
    }

    else if  (  parseFloat(glasgow) >= 6 &&  parseFloat(glasgow) < 10 ) {
        return 3
        
    }

    else if  (  parseFloat(glasgow) < 6 ) {
        return 4
        
    }

    else{
        return 0
    }
    
};

function renal(crea) {
    if (  parseFloat(creatinina) >= 1.2 &&  parseFloat(creatinina) <2 ) {
        return 1
        
    }
    else if  (  parseFloat(creatinina) >= 2 &&  parseFloat(creatinina) <3.5 ) {
        return 2
        
    }

    else if  (  parseFloat(creatinina) >= 3.5 &&  parseFloat(creatinina) < 5 ) {
        return 3
        
    }

    else if  (  parseFloat(creatinina) >= 5 ) {
        return 4
        
    }

    else{
        return 0
    }
    
};
    console.log(plax());
    console.log(pafi());
    console.log(paf());
    console.log(higado());
    console.log(snc());
    console.log(renal());

    function scoreSofa(pla,pa, higad, sn, rena, cardiovascular) {

        return plax()+paf()+higado()+snc()+renal()+parseInt(estabilidad)
        
    };

    console.log(scoreSofa());


    mensaje.innerHTML+= `<p> El puntaje de su paciente es de  ${scoreSofa()} puntos.</p>` ;

if(scoreSofa() >0 && scoreSofa()<2 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 0%.</p>`;
}

else if(scoreSofa() >1 && scoreSofa()<5 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 7%.</p>`;
}

else if(scoreSofa() >4 && scoreSofa()<8 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 23.5%.</p>`;
}

else if(scoreSofa() >=7 && scoreSofa()<=10 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 33.5%.</p>`;
}

else if(scoreSofa() >9 && scoreSofa()<12 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 50%.</p>`;
}

else if(scoreSofa() >11 && scoreSofa()<15 ){
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es de 80%.</p>`;
}


else{
    mensaje.innerHTML+= `<p>La mortalidad inicial del paciente en UCI es superior a 92%.</p>`;
};





sofa.reset();

      });
     

      const botCalc= document.getElementById("botonCalcMet")
botCalc.onclick= () =>{
};


