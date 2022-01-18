$(()=>{
    console.log("Ready Set GO");



    $("#cDk").submit( (e)=> { 
        e.preventDefault();
        
       
     
        
    });
   
   
    $("#botonTfg").click( (e)=> { 
        e.preventDefault();
    
       

        
        class Paciente{
            constructor(creatinina, peso, sexo, edad ){
                this.creatinina=creatinina;
                this.peso=peso;
                this.sexo=sexo;
                this.edad=edad;
                
                
               
                
            };
        };

        const pacient= new Paciente($("#creatinina").val(), $("#peso").val(), $("#sexo").val(), $("#edad").val() );

        console.log(pacient);

         /* Ecuacion Aclaramiento de creatinina = (140-edad) x peso /72 x creatinina x 0.85 (si mujer)*/

        function creaHombre(edad, peso, creatinina, constantes){
           return (140-parseInt(pacient.edad))*parseInt(pacient.peso)/(72*parseInt(pacient.creatinina))
            
        };

        function creaMujer(edad, peso, creatinina, constantes){
            return (140-parseInt(pacient.edad))*parseInt(pacient.peso)/((72*parseInt(pacient.creatinina))*0.85)
        };
        

console.log(creaHombre());
console.log(creaMujer());

if (pacient.sexo=="mujer") {
    $("#tasaFiltracion").append(` <label class="visually-hidden" for="edad">TFG</label>
    <div class="input-group">
      <div class="input-group-text">TFG</div>
      <input type="text" class="form-control" id="TFG" placeholder="${creaMujer().toFixed(2)}">
    </div>`);  
    
}
else if (pacient.sexo=="hombre") {
    $("#tasaFiltracion").append(` <label class="visually-hidden" for="edad">TFG</label>
    <div class="input-group">
      <div class="input-group-text">TFG</div>
      <input type="text" class="form-control" id="TFG" placeholder="${creaHombre().toFixed(2)}">
    </div>`);
    
} 
else{

    $("#tasaFiltracion").append(` <label class="visually-hidden" for="edad">TFG</label>
    <div class="input-group">
      <div class="input-group-text">TFG</div>
      <input type="text" class="form-control" id="TFG" placeholder="Ingrese una opción válida.">
    </div>`);
}

if (creaMujer()< 50 && pacient.sexo=="mujer" ) {
    $("#alerta").append(`<p id="ale">Recuerde ajustar dosis de medicamentos de ser necesario.</p>`);
   
    
}

else if  (creaHombre()< 50 && pacient.sexo=="hombre" ) {
    $("#alerta").append(`<p id="al">Recuerde ajustar dosis de medicamentos de ser necesario.</p>`);
    
};
$("#ale").animate({
    
    

}).fadeOut(800).delay(150).fadeIn(800).fadeOut(800).delay(150).fadeIn(800);

$("#al").animate({
    
    

}).fadeOut(800).delay(150).fadeIn(800).fadeOut(800).delay(150).fadeIn(800);


$("#cDk").trigger("reset");

        
     });
   
    
    
  


});

 
    
