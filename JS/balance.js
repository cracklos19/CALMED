class Paciente
            {
                constructor(peso, dren, depo, ventilacion, horasArm, tempe, horasFiebre, enteral, parenteral, diuresis)
                {
                    this.peso= peso;
                    this.dren= dren;
                    this.depo= depo;
                    this.ventilacion= ventilacion;
                    this.horasArm= horasArm ; 
                    this.tempe= tempe;  
                    this.horasFiebre= horasFiebre;
                    this.enteral= enteral;
                    this.parenteral=parenteral
                    this.diuresis=diuresis
                    
                };
               
              
            };

const pacientes= [];
const balance= document.getElementById("balance");
const mensaje= document.getElementById("mensaje");
balance.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);
   
    const peso= document.getElementById("peso").value;
    const dren= document.getElementById("dren").value;
    const depo= document.getElementById("depo").value;
    const ventilacion= document.getElementById("ventilacion").value;
    const horasArm= document.getElementById("horasArm").value;
    const horasFiebre= document.getElementById("horasFiebre").value;
    const tempe= document.getElementById("tempe").value;
    const enteral= document.getElementById("enteral").value;
    const parenteral= document.getElementById("parenteral").value;
    const diuresis= document.getElementById("diuresis").value;
    

    
    const paciente1= new Paciente( parseFloat(peso), parseFloat(dren), parseFloat(depo), parseFloat(ventilacion), parseFloat(horasArm), parseFloat(horasFiebre), parseFloat(tempe), parseFloat(enteral), parseFloat(parenteral), parseFloat(diuresis));
    pacientes.push(paciente1);
    console.log(paciente1);

    

    function febril() {
        if (parseFloat(tempe)==0){
            return 0*parseFloat(horasFiebre)
        }

        else if (  parseFloat(tempe)==1) {
            return 20* parseFloat(horasFiebre)
        }

        else if (  parseFloat(tempe)==2) {
            return 40* parseFloat(horasFiebre)
        }

        else{
            return 60* parseFloat(horasFiebre)

        }
        
    };

    function ventilado() {
        if (parseFloat(ventilacion)==0){
            return 0*parseFloat(horasArm)
        }

        else if (  parseFloat(ventilacion)==1) {
            return 20* parseFloat(horasArm)
        }

        else if (  parseFloat(ventilacion)==2) {
            return 24* parseFloat(horasArm)
        }

        else if (  parseFloat(ventilacion)==3) {
            return 28* parseFloat(horasArm)
        }

        else if (  parseFloat(ventilacion)==4) {
            return 32* parseFloat(horasArm)
        }
        else if (  parseFloat(ventilacion)==4) {
            return 36* parseFloat(horasArm)
        }

        else{
            return 40* parseFloat(horasArm)

        }
        
    };

    function egresos(){
        return ventilado()+febril()+(parseFloat(peso*24)*0.5)+parseFloat(depo)+parseFloat(dren)+parseFloat(diuresis)
    };

    function ingresos(){
        return parseFloat(enteral)+parseFloat(parenteral)
    };

    function bal(){
        return ingresos()-egresos()
    };


    console.log(febril())
    console.log(ventilado())
    console.log(egresos())
    console.log(ingresos())
    console.log(bal())





    
    


    mensaje.innerHTML+= `<p> El balance hídrico  de su paciente es de  ${bal()} ml.</p>` ;



balance.reset();

      });
     

      const botCalc= document.getElementById("botonCalcMet")
botCalc.onclick= () =>{
};
