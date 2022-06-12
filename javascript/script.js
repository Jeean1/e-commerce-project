"use strict"

function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("hidden");
}

function cardGenerator(array) {
    // 1. Generar el codigo Html que voy a poenr en la pagina
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código

    let html = ""

    for(let i = 0; i < array.length; i++){
        
        html += `

            <div class = "${array[i].divNro} col-2 card-style">
                ${array[i].productImg}
                <p>${array[i].productImage}</p>
                <p>${array[i].productItem}</p>
                <p>${array[i].productColor}</p>
                <p>${array[i].productPrice}</p>
            </div>
        
        `;
    }

    const container = document.getElementById("products-container")
    console.log(container)
    console.log("hola")
    container.innerHTML = html
}



let product = [

    {productImg:'<img src="./images/product-1.png"></img>',productImage: "image1", productItem: "productItem1", productColor: "productColor1", productPrice: "productPrice", divNro: "div1"},
    {productImg:'<img src="./images/product-2.png"></img>' ,productImage: "image2", productItem: "productItem2", productColor: "productColor2", productPrice: "productPrice", divNro: "div2"},
    {productImg:'<img src="./images/product-3.png"></img>' ,productImage: "image3", productItem: "productItem3", productColor: "productColor3", productPrice: "productPrice", divNro: "div3"},
    {productImg:'<img src="./images/product-4.png"></img>' ,productImage: "image4", productItem: "productItem4", productColor: "productColor4", productPrice: "productPrice", divNro: "div4"},
    {productImg:'<img src="./images/product-5.png"></img>' ,productImage: "image5", productItem: "productItem5", productColor: "productColor5", productPrice: "productPrice", divNro: "div5"},
    {productImg:'' ,productImage: "image6", productItem: "productItem6", productColor: "productColor6", productPrice: "productPrice", divNro: "div6"},
    {productImg:'' ,productImage: "image7", productItem: "productItem7", productColor: "productColor7", productPrice: "productPrice", divNro: "div7"},
    {productImg:'' ,productImage: "image8", productItem: "productItem8", productColor: "productColor8", productPrice: "productPrice", divNro: "div8"},
    {productImg:'' ,productImage: "image9", productItem: "productItem9", productColor: "productColor9", productPrice: "productPrice", divNro: "div9"},
    {productImg:'' ,productImage: "image10", productItem: "productItem10", productColor: "productColor10", productPrice: "productPrice", divNro: "div10"},
    {productImg:'' ,productImage: "image11", productItem: "productItem11", productColor: "productColor11", productPrice: "productPrice", divNro: "div11"},
    {productImg:'' ,productImage: "image12", productItem: "productItem12", productColor: "productColor12", productPrice: "productPrice", divNro: "div12"},
    {productImg:'' ,productImage: "image13", productItem: "productItem13", productColor: "productColor13", productPrice: "productPrice", divNro: "div13"},
    {productImg:'' ,productImage: "image14", productItem: "productItem14", productColor: "productColor14", productPrice: "productPrice", divNro: "div14"},
    {productImg:'' ,productImage: "image15", productItem: "productItem15", productColor: "productColor15", productPrice: "productPrice", divNro: "div15"},    
]

cardGenerator(product)