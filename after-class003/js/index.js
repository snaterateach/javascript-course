
// Datos de la compra del plan
let message = document.getElementById("message");
// formulario
let formPlan = document.getElementById("formPlan");
// Seccion de todos los planes
let allPlans = document.getElementById("allPlans");

formPlan.addEventListener("submit",createPlan);

// Variable Global
let planList;
let stotageList;

// falsy
planList = JSON.parse(localStorage.getItem("planList")) || [];




/**
 * Construye el bloque que mostará los datos del 
 * plan seleccionado.
 * @param {Object} plan 
 */
const buyPlan = (type,price,description)=>{
    console.log('tipo = ' + type)
    message.innerHTML="";
    let messageBody = document.createElement("div");
    messageBody.innerHTML = `
                            <h4>Felicitaciones</h4>
                            <p>El plan seleccionado es:
                                <ul>
                                <li>${type}</li>
                                <li>${price}</li>
                                <li>${description}</li>
                                </ul>
                            </p>`;
    
    message.append(messageBody);
    message.className="alert alert-success visible";
}


/**
 * Arma la estructura del nuevo plan y lo asocia
 * al nodo padre.
 *  
 */
const showPlans = ()=>{
    let stotaged = planList;
    stotageList = [];
    allPlans.innerHTML = "";

    for(const objeto of stotaged){
        console.log(objeto);
        stotageList.push(new Plan(objeto));
    }
    console.log(stotageList);

    for(const plan of stotageList){
        let firstDiv = document.createElement("div");
        firstDiv.className="col";
        let secondDiv = document.createElement("div");
        secondDiv.className ="card mb-4 rounded-3 shadow-sm";
        /*secondDiv.innerHTML =` <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">${plan.type}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$${plan.price}<small class="text-muted fw-light">/mo</small></h1>
                    <p>
                    ${plan.description}
                    </p>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar Plan</button>
                </div>`;*/
        secondDiv.innerHTML = plan.assemble();
        firstDiv.append(secondDiv);
        allPlans.append(firstDiv)
    }
  
}

/**
 * Agrega un nuevo plan al Storage
 * @param {Object} plan 
 */
const newPlan = (plan) =>{
   //console.log(plan)
   planList.push(plan);
   //console.log(planList)
   localStorage.setItem("planList", JSON.stringify(planList));
   showPlans();
}

/**
 * Recibe los datos del formulario para la creación 
 * del nuevo Plan.
 * @param {Object} e 
 */
function createPlan(e){
   // Inputs
    let planType = document.getElementById("planType").value;
    let planPrice = document.getElementById("planPrice").value;
    let planDescription = document.getElementById("planDescription").value;

    e.preventDefault();

    let plan = {
        type: planType,
        price: planPrice,
        description: planDescription
    }

    newPlan(plan);

}

showPlans();



