// Clase constructora
class Plan{
    constructor(plan){
        this.type = plan.type;
        this.price = plan.price;
        this.description = plan.description;
    }
    assemble(){
        console.log(this.type)
        return ` <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">${this.type}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$${this.price}<small class="text-muted fw-light">/mo</small></h1>
                    <p>
                    ${this.description}
                    </p>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary" onclick="buyPlan('${this.type}', '${this.price}', '${this.description}')">Comprar Plan</button>
                </div>`;
    }
}