const dosificacion= document.getElementById("dosis");
const mensaje= document.getElementById("mensaje");
dosificacion.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);
   
    const farma= document.getElementById("activo").value;
  
    console.log(farma);

    if (farma== "noradrenalina") {
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="nora">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(noradrenalina) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 4 mg/4ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="500">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="peso">peso</label>
      <div class="input-group">
        <div class="input-group-text">Peso del paciente en kilogramos</div>
        <input type="number" class="form-control" id="peso" placeholder="70">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="microgramos">microgramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de noradrenalina en microgramos</div>
        <input type="text" class="form-control" id="micro" placeholder="0.05-0.5 mcg/kg/min">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div>
          </form>
        
        </p>`;

        const nora = document.getElementById("nora");
const mensaje2= document.getElementById("mensaje2");

nora.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const peso= document.getElementById("peso").value;
    const micro= document.getElementById("micro").value;
    const mlCorregido= parseFloat(ml)+(4*parseFloat(ampollas));

    function ampoMcg(nroAmpollas, constante) {
        return parseFloat(ampollas)*4000
        
    };

    function microKg(pesoPaciente, dosisMicro) {
        return (parseFloat(peso)*parseFloat(micro))*60
        
    };

    function infusionNora(mililitrosCorregidos, dosisPorPeso, mlDilucion) {
        return (microKg()*mlCorregido)/ampoMcg()
        
    };




console.log(infusionNora());

mensaje2.innerHTML+= `<p>A una dosis de  ${parseFloat(micro)} mcg/kg/min, su infusión debe ser de ${infusionNora().toFixed(2)} mililitros/hora</p>`;
mensaje2.innerHTML+= `<p>Tener en cuenta que no se debe usar nunca noradrenalina en bolo, dosis reflejada para infusión continua.</p>`;

    

    



    nora.reset();

    

})

const calculo= document.getElementById("calculo")
calculo.onclick= () =>{
};
        
    }

    else if (farma=="midazolam"){
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="mida">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(midazolam) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 15 mg/3ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="250">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="peso">peso</label>
      <div class="input-group">
        <div class="input-group-text">Peso del paciente en kilogramos</div>
        <input type="number" class="form-control" id="peso" placeholder="70">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="miligramos">miligramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de midazolam en miligramos</div>
        <input type="text" class="form-control" id="miligramos" placeholder="0.02-0.2 mg/kg/hr">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div>
          </form>

          <div>
           
            <h4 id= "mensaje3"> 

            </h4>
          </div>
        
        </p>`;

        const mida = document.getElementById("mida");
const mensaje3= document.getElementById("mensaje3");

mida.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const peso= document.getElementById("peso").value;
    const miligramos= document.getElementById("miligramos").value;
    const mlCorregido= parseFloat(ml)+(3*parseFloat(ampollas));

    function ampoMg(nroAmpollas, constante) {
        return parseFloat(ampollas)*15
        
    };

    function miligramosKg(pesoPaciente, dosisMicro) {
        return parseFloat(peso)*parseFloat(miligramos)
        
    };

    function infusionMida(mililitrosCorregidos, dosisPorPeso, mlDilucion) {
        return (miligramosKg()*mlCorregido)/ampoMg()
        
    };




console.log(infusionMida());

mensaje3.innerHTML+= `<p>A una dosis de  ${parseFloat(miligramos)} mg/kg/hr, su infusión debe ser de ${infusionMida().toFixed(2)} mililitros/hora</p>`;
mensaje3.innerHTML+= `<p>NOTA: Dosis de mantenimiento para infusión continua.</p>`;

    

    



    mida.reset();

    

})
const calculo= document.getElementById("calculo")
calculo.onclick= () =>{
};
    }

    else if (farma=="fentanilo"){
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="fenta">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(fentanilo) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 250 mcg/5ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="250">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="peso">peso</label>
      <div class="input-group">
        <div class="input-group-text">Peso del paciente en kilogramos</div>
        <input type="number" class="form-control" id="peso" placeholder="70">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="microgramos">microgramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de fentanilo en microgramos</div>
        <input type="number" class="form-control" id="microgramos" placeholder="1-2 mcg/kg/hr">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div>
          </form>

          <div>
           
            <h4 id= "mensaje3"> 

            </h4>
          </div>
        
        </p>`;

        const fenta = document.getElementById("fenta");
const mensaje3= document.getElementById("mensaje3");

fenta.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const peso= document.getElementById("peso").value;
    const microgramos= document.getElementById("microgramos").value;
    const mlCorregido= parseFloat(ml)+(5*parseFloat(ampollas));

    function ampoMcg(nroAmpollas, constante) {
        return parseFloat(ampollas)*250
        
    };

    function microgramosKg(pesoPaciente, dosisMicro) {
        return parseFloat(peso)*parseFloat(microgramos)
        
    };

    function infusionFenta(mililitrosCorregidos, dosisPorPeso, mlDilucion) {
        return (microgramosKg()*mlCorregido)/ampoMcg()
        
    };




console.log(infusionFenta());

mensaje3.innerHTML+= `<p>A una dosis de  ${parseFloat(microgramos)} mcg/kg/hr, su infusión debe ser de ${infusionFenta().toFixed(2)} mililitros/hora</p>`;
mensaje3.innerHTML+= `<p>NOTA: Dosis de mantenimiento para infusión continua.</p>`;

    

    



    fenta.reset();

    

})
const calculo= document.getElementById("calculo")
calculo.onclick= () =>{
};
    }
   

    else if (farma=="atracurio"){
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="atra">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(atracurio) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 50 mg/5ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="250">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="peso">peso</label>
      <div class="input-group">
        <div class="input-group-text">Peso del paciente en kilogramos</div>
        <input type="number" class="form-control" id="peso" placeholder="70">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="microgramos">microgramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de atracurio en microgramos</div>
        <input type="number" class="form-control" id="microgramos" placeholder="4-30 mg/kg/min">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div>
          </form>

          <div>
           
            <h4 id= "mensaje3"> 

            </h4>
          </div>
        
        </p>`;

        const atra = document.getElementById("atra");
const mensaje3= document.getElementById("mensaje3");

atra.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const peso= document.getElementById("peso").value;
    const microgramos= document.getElementById("microgramos").value;
    const mlCorregido= parseFloat(ml)+(5*parseFloat(ampollas));

    function ampoMcg(nroAmpollas, constante) {
        return parseFloat(ampollas)*50000
        
    };

    function microgramosKg(pesoPaciente, dosisMicro) {
        return (parseFloat(peso)*parseFloat(microgramos))*60
        
    };

    function infusionAtra(mililitrosCorregidos, dosisPorPeso, mlDilucion) {
        return (microgramosKg()*mlCorregido)/ampoMcg()
        
    };




console.log(infusionAtra());

mensaje3.innerHTML+= `<p>A una dosis de  ${parseFloat(microgramos)} mcg/kg/min, su infusión debe ser de ${infusionAtra().toFixed(2)} mililitros/hora</p>`;
mensaje3.innerHTML+= `<p>NOTA: Dosis de mantenimiento para infusión continua.</p>`;

    

    



    atra.reset();

    

})
const calculo= document.getElementById("calculo");
calculo.onclick= () =>{
};
    }

    else if (farma=="isoproterenol"){
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="iso">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(isoproterenol) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 1 mg/5ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="250">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="microgramos">microgramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de isoproterenol en microgramos</div>
        <input type="number" class="form-control" id="microgramos" placeholder="2-10 mcg/min">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div>
          </form>

          <div>
           
            <h4 id= "mensaje3"> 

            </h4>
          </div>
        
        </p>`;

        const atra = document.getElementById("atra");
const mensaje3= document.getElementById("mensaje3");

iso.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const microgramos= document.getElementById("microgramos").value;
    const mlCorregido= parseFloat(ml)+(5*parseFloat(ampollas));

    function ampoMcg(nroAmpollas, constante) {
        return parseFloat(ampollas)*1000
        
    };

    function microgramosHora(pesoPaciente, dosisMicro) {
        return parseFloat(microgramos)*60
        
    };

    function infusionIso(mililitrosCorregidos, dosisMinuto, mlDilucion) {
        return (microgramosHora()*mlCorregido)/ampoMcg()
        
    };




console.log(infusionIso());

mensaje3.innerHTML+= `<p>A una dosis de  ${parseFloat(microgramos)} mcg/min, su infusión debe ser de ${infusionIso().toFixed(2)} mililitros/hora</p>`;
mensaje3.innerHTML+= `<p>NOTA: Dosis de mantenimiento para infusión continua.</p>`;

    

    



    iso.reset();

    

})
const calculo= document.getElementById("calculo")
calculo.onclick= () =>{
};
    }

    else if (farma=="nitroglicerina"){
        mensaje.innerHTML+= `<p>

        <form class=" row g-3 align-items-center" id="nitro">

        <div class="col-12">
        <label class="visually-hidden" for="ampollas">ampollas</label>
        <div class="input-group">
          <div class="input-group-text">(nitroglicerina) Número de ampollas</div>
          <input type="number" class="form-control" id="ampollas" placeholder=" ampollas de 25 mg/5ml">
        </div>
      </div>

      <div class="col-12">
      <label class="visually-hidden" for="mililitros">mililitros</label>
      <div class="input-group">
        <div class="input-group-text">Mililitros de dilución</div>
        <input type="number" class="form-control" id="ml" placeholder="500">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="peso">peso</label>
      <div class="input-group">
        <div class="input-group-text">Peso del paciente en kilogramos</div>
        <input type="number" class="form-control" id="peso" placeholder="70">
      </div>
    </div>

    <div class="col-12">
      <label class="visually-hidden" for="microgramos">microgramos</label>
      <div class="input-group">
        <div class="input-group-text">Dosis de nitroglicerina en microgramos</div>
        <input type="text" class="form-control" id="microgramos" placeholder="0.1-4 mg/kg/min">
      </div>
    </div>
            
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary" id=calculo>Calcular dosis</button>
              <button type="submit" class="btn btn-primary" id=refrescar><a class="links" href="../scores/dosis.html">Refrescar</a></button>
            </div> 
           
          </form>

          <div>
           
            <h4 id= "mensaje3"> 

            </h4>
          </div>
        
        </p>`;

        const nitro = document.getElementById("nitro");
const mensaje3= document.getElementById("mensaje3");

nitro.addEventListener("submit", (Event)=> {
    Event.preventDefault(Event);

    const ampollas= document.getElementById("ampollas").value;
    const ml= document.getElementById("ml").value;
    const peso= document.getElementById("peso").value;
    const microgramos= document.getElementById("microgramos").value;
    const mlCorregido= parseFloat(ml)+(5*parseFloat(ampollas));

    function ampoMcg(nroAmpollas, constante) {
        return parseFloat(ampollas)*25000
        
    };

    function microgramosKg(pesoPaciente, dosisMicro) {
        return (parseFloat(peso)*parseFloat(microgramos))*60
        
    };

    function microgramosMin(pesoPaciente, dosisMicro) {
        return parseFloat(peso)*parseFloat(microgramos)
    };

    function infusionNitro(mililitrosCorregidos, dosisPorPeso, mlDilucion) {
        return (microgramosKg()*mlCorregido)/ampoMcg()
        
    };




console.log(infusionNitro());

mensaje3.innerHTML+= `<p>A una dosis de  ${parseFloat(microgramos)} mcg/kg/min, su infusión debe ser de ${infusionNitro().toFixed(2)} mililitros/hora. La dosis se encuentra fijada a ${microgramosMin()} mcg/min </p>`;
mensaje3.innerHTML+= `<p>NOTA: Con un rango de 10 a 50 mcg/min el efecto es venodilatador, con un rango de 51 a 200 mcg/min el efecto es vasodilatador.</p>`;

    

    



    nitro.reset();

    

})
const calculo= document.getElementById("calculo")
calculo.onclick= () =>{
};
    }
        

    
    dosificacion.reset();

})


const seleccion= document.getElementById("seleccion")
seleccion.onclick= () =>{
};

 





       
    



