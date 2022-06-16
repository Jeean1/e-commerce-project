
function cardGeneratorStorage() {

    let html = ""
    let array = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    console.log(array)

    for(let i = 0; i < array.length; i++){
        
        html += `

            
                <div class="product-img-div">
                    ${array[i].productImg}
                </div>
                <p>${array[i].productItem}</p>
                <p>${array[i].productColor}</p>
                <p>ID: ${array[i].id}</p>
                <span>$${array[i].productPrice}</span>
            </div>
        
        `;
    }

    const container = document.getElementById("generate-card-shoping");
    container.innerHTML = html
}
cardGeneratorStorage();


function totalPrice(){

    console.log("hola")
    let resultado = "$" + JSON.parse(localStorage.getItem("total-price-ls"))



    const container = document.getElementById("total-price")
    container.innerHTML = resultado

}

totalPrice()


function finalizarCompra(){
    alert("¡Compra exitosa!")
    localStorage.clear()
}