const productData = [
    {
        productDescription: {
            name: "ИС-64",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    },
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
    ,
    {
        productDescription: {
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
    }
]

function moveProduct($product,) {
    const $moveProduct = $product.cloneNode(true);
    const productLayout = $product.getBoundingClientRect()
    const {left, top} = document.getElementById("wishlistId").getBoundingClientRect()
    $moveProduct.classList.add("productMoveStyle")
    $moveProduct.style.width=`${productLayout.width}px`
    $moveProduct.style.height=`${productLayout.height}px`
    $moveProduct.style.top= `${productLayout.top}px`
    $moveProduct.style.left= `${productLayout.left}px`
    console.log($moveProduct)
    const $body = document.getElementById("bodyId")

    $moveProduct.addEventListener("mouseover",()=>{
        $moveProduct.style.transform = `translate3d(${left - productLayout.left}px, ${top- productLayout.top}px, 0px)
         scale3d(0.1,0.1,0.1) `
        $moveProduct.style.opacity=0.2
        console.log($moveProduct)

        $moveProduct.addEventListener("transitionend",()=>{
            $moveProduct.remove()
        })
    })



    $body.append($moveProduct)

/*    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("DOM fully loaded and parsed");
    },false);*/


   /* setTimeout(()=>{
        $moveProduct.style.transform = `translate3d(${left - productLayout.left}px, ${top- productLayout.top}px, 0px)
         scale3d(0.1,0.1,0.1) `
        $moveProduct.style.opacity=0.2
        console.log($moveProduct)

        $moveProduct.addEventListener("transitionend",()=>{
            $moveProduct.remove()
        })

    })*/
   /* $moveProduct.addEventListener("DOMContentLoaded", () => {
        console.log("translate3d")
    })*/
}


function createProduct($parent, productData) {
    const $product = document.createElement("div")
    $product.classList.add('product')
    $product.innerHTML = `
                <a href="#"><img class="imgBG" src="./assets/images/Layer40.svg"
                                 alt="Танк"></a>
                <button class="like">Поставить лайк</button>
                <div class="description">
                    <div class="description_Product">
                        <span class="description_flag">${productData.productDescription.country}</span>
                        <span class="description_typ">${productData.productDescription.type}</span>
                        <h2>${productData.productDescription.name}</h2>
                    </div>
                    <span class="description_price">$ 58.99</span>
                    <button id="wishButton" class="description_button">purchase</button>
                </div> 
    `
    const $button = $product.querySelectorAll("button")
    $button[1].addEventListener("click", (event) => {
        moveProduct($product)
        console.log("добавил обработчик")
    }, false)
    $parent.append($product)
}


function addProducts() {
    const $container = document.getElementById('main')
    productData.forEach(value => {
        createProduct($container, value)
    })
}

addProducts()


