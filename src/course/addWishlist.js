const productData = [
    {
        productDescription: {
            span: "1",
            name: "ИС-64",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:1,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:2,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:3,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:4,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:5,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:6,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:7,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:8,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:9,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:10,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:11,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:12,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID:13,
    }
]
const userDate={
    wishlist:[],
    shopping:[],
}

function wishlistInitial() {
    const $wishlist=document.getElementById("wishlistId")
    $wishlist.innerText=`(${userDate.wishlist.length})`
}
wishlistInitial()
function shoppingInitial() {
    const $shopping=document.getElementById("shoppingId")
    $shopping.innerText=`(${userDate.shopping.length})`
}
shoppingInitial()




function moveProduct($product,) {
    const $moveProduct = $product.cloneNode(true);
    const productLayout = $product.getBoundingClientRect()
    const {left, top, height, width} = document.getElementById("shoppingId").getBoundingClientRect()
    $moveProduct.classList.add("productMoveStyle")
    $moveProduct.style.paddingBottom = "0px"
    $moveProduct.style.width = `${productLayout.width}px`
    $moveProduct.style.height = `${productLayout.height}px`
    $moveProduct.style.top = `${productLayout.top}px`
    $moveProduct.style.left = `${productLayout.left}px`
    console.log($moveProduct)
    const $body = document.getElementById("bodyId")

   /* $moveProduct.addEventListener("mouseover", () => {
        $moveProduct.style.transform = `translate3d(${left + width / 2 - productLayout.width / 2 - productLayout.left}px, ${top + height / 2 - productLayout.height / 2 - productLayout.top}px, 0px)
         scale3d(0.1,0.1,0.1) rotate(360deg)`
        $moveProduct.style.opacity = 0.2
        console.log($moveProduct)

        $moveProduct.addEventListener("transitionend", () => {
            $moveProduct.remove()
        })
    })*/
     setTimeout(()=>{
            $moveProduct.style.transform = `translate3d(${left + width / 2 - productLayout.width / 2 - productLayout.left}px, ${top + height / 2 - productLayout.height / 2 - productLayout.top}px, 0px)
         scale3d(0.1,0.1,0.1) rotate(360deg)`
            $moveProduct.style.opacity=0.2
            console.log($moveProduct)

            $moveProduct.addEventListener("transitionend",()=>{
                $moveProduct.remove()
            })

        })
    $body.append($moveProduct)

}
function createProduct($parent, productData) {
    const $product = document.createElement("div")
    $product.classList.add('product')
    $product.innerHTML = `
                <a href="#"><img class="imgBG" src="assets/images/Layer40.svg"
                                 alt="Танк"></a>
                <button class="like likeNotActive">Поставить лайк</button>
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
    $product.style.gridColumn = `span ${productData.productDescription.span}`;
    $product.style.paddingBottom = `${100 / productData.productDescription.span}%`;
    const $button = $product.querySelectorAll("button")
    userDate.wishlist.forEach(value => {
        if(value.productID === productData.productID){
            $button[0].classList.remove("likeNotActive")
            $button[0].classList.add('likeActive')
        }
    })

    $button[1].addEventListener("click", (event) => {
        moveProduct($product)
        userDate.shopping.push(productData)
        shoppingInitial()
    }, false)

    $button[0].addEventListener("click", (event) => {
        const filterWishlist=userDate.wishlist.filter(value => value.productID !== productData.productID)
        if(filterWishlist.length === userDate.wishlist.length){
            userDate.wishlist.push(productData)
            $button[0].classList.remove("likeNotActive")
            $button[0].classList.add('likeActive')
        }else {
            userDate.wishlist=filterWishlist
            $button[0].classList.remove("likeActive")
            $button[0].classList.add('likeNotActive')
        }
        wishlistInitial()
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


