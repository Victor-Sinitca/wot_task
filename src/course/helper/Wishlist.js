const productData = [
    {
        productDescription: {
            span: "1",
            name: "ИС-64",
            type: "танк",
            country: "СССР",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 1,
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
        productID: 2,
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
        productID: 3,
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
        productID: 4,
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
        productID: 5,
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
        productID: 6,
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
        productID: 7,
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
        productID: 8,
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
        productID: 9,
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
        productID: 10,
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
        productID: 11,
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
        productID: 12,
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
        productID: 13,
    }
]
const userDate = {
    wishlist: [],
    shopping: [],
}

export class Wishlist {
    #productData = []
    #userDate = {
        wishlist: [],
        shopping: [],
    }
    setData() {
        //добавить запрос на сервер дляполучения данных
        this.#productData = productData
        this.#userDate = userDate
    }
    wishlistInitial() {
        const $wishlist = document.getElementById("wishlistId")
        $wishlist.innerText = `(${this.#userDate.wishlist.length})`
    }
    shoppingInitial() {
        const $shopping = document.getElementById("shoppingId")
        $shopping.innerText = `(${this.#userDate.shopping.length})`
    }
    createProduct($parent, productData) {
        const $product = document.createElement("div")
        $product.classList.add('product')
        $product.innerHTML = `               
                <a href="http://localhost:63342/wot_c/src/course/item.html">
                    <img class="imgBG" src="assets/images/Layer40.svg" alt="Танк">
                    <div class="description">
                        <div class="description_Product">
                            <span class="description_flag">${productData.productDescription.country}</span>
                            <span class="description_typ">${productData.productDescription.type}</span>
                            <h2>${productData.productDescription.name}</h2>
                        </div>
                        <span class="description_price">$ 58.99</span>                        
                    </div> 
                </a>                             
                <button id="wishButton" class="description_button">purchase</button>     
                <button class="like likeNotActive">Поставить лайк</button>                
    `
        $product.style.gridColumn = `span ${productData.productDescription.span}`;
        $product.style.paddingBottom = `${100 / productData.productDescription.span}%`;
        const $button = $product.querySelectorAll("button")
        const $likeButton = $button[1]
        const $purchaseButton = $button[0]
        userDate.wishlist.forEach(value => {
            if (value.productID === productData.productID) {
                $likeButton.classList.remove("likeNotActive")
                $likeButton.classList.add('likeActive')
            }
        })

        $purchaseButton.addEventListener("click", (event) => {
            moveProduct($product, "shoppingId", "bodyId", "productMoveStyle",
                [{name: "paddingBottom", property: "0px"}])
            userDate.shopping.push(productData)
            this.shoppingInitial()
        }, false)

        $likeButton.addEventListener("click", (event) => {
            const filterWishlist = userDate.wishlist.filter(value => value.productID !== productData.productID)
            if (filterWishlist.length === userDate.wishlist.length) {
                userDate.wishlist.push(productData)
                $likeButton.classList.remove("likeNotActive")
                $likeButton.classList.add('likeActive')
            } else {
                userDate.wishlist = filterWishlist
                $likeButton.classList.remove("likeActive")
                $likeButton.classList.add('likeNotActive')
            }
            this.wishlistInitial()
        }, false)

        /*const $link = $product.querySelectorAll("a")
        $link.addEventListener("click", (event) => {
            createItem($parent,productData)
        }, false)*/
        $parent.append($product)
    }
    addProducts() {
        this.wishlistInitial()
        this.shoppingInitial()
        const $container = document.getElementById('main')
        this.#productData.forEach(value => {
            this.createProduct($container, value)
        })
    }
}
function moveProduct($product, targetID, parentID, style = null, additionalStyles = null) {
    const $moveProduct = $product.cloneNode(true);
    //определение размеров и положения продукта для анимации
    let {left: leftProduct, top: topProduct, height: heightProduct, width: widthProduct} = $product.getBoundingClientRect()
    //определение размеров и положения цели для анимации

    // объект по targetID расположен в заголовке с position: fixed в верхней части экрана
    const {left, top, height, width} = document.getElementById(targetID).getBoundingClientRect()

    //добавление стиля для объекта анимации
    if (style) $moveProduct.classList.add(style)
    // смещение положения старта анимации в случае если прототип анимации сместился за видимую часть экрана
    if ((topProduct + heightProduct * 0.75) < top) {
        topProduct = 175
        leftProduct = 15
    }
    //добавлене дополнительных переданных стилей по типу [{name:название, property:значение}] значения - строки
    if (additionalStyles) {
        additionalStyles.forEach(value => {
            $moveProduct.style[value.name] = value.property
        })
    }
    //установка layout для анимации
    $moveProduct.style.width = `${widthProduct}px`
    $moveProduct.style.height = `${heightProduct}px`
    $moveProduct.style.top = `${topProduct}px`
    $moveProduct.style.left = `${leftProduct}px`

    //нахождение родительского контейнера для анимации
    const $parent = document.getElementById(parentID)

    //определяем список правил CSS документа
    let styleSheet = document.styleSheets[0];
    //создаем уникальное имя анимации
    let animationName = `keyframe${Date.now()}`
    //определяем параметры необходимой анимации
    let keyframes =
        `@-webkit-keyframes ${animationName} {
                     100% {transform: translate3d(${left + width / 2 - widthProduct / 2 - leftProduct}px, ${top + height / 2 - heightProduct / 2 - topProduct}px, 0px) scale3d(0.1,0.1,0.1) rotate(360deg)}
                 }`
    //добавляем правило @-webkit-keyframes в список правил CSS документа
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    //устанавливаем правила выполнения анимации для анимируемого объекта
    $moveProduct.style.animation = `${animationName} 1.5s ease-in-out `
    // подписываемся на окончание анимации
    $moveProduct.addEventListener("animationend", () => {
        // находим добавленный @-webkit-keyframes, сохраненный в document.styleSheets
        let index = null
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.rules[i].name) {
                if (styleSheet.rules[i].name === animationName) {
                    //нахождение анимации по имени стиля  и опредление его индекса в таблице стилей
                    index = i
                }
            }
        }
        if (index !== null) {
            //если стиль найден  - удаляем его из таблице по индексу
            styleSheet.deleteRule(index)
        }
        //удаляем  обьект созданный для анимации
        $moveProduct.remove()
    })


    //коостыль добавления анимации на setTimeout
    /* setTimeout(() => {
         $moveProduct.style.transform = `translate3d(${left + width / 2 - widthProduct / 2 - leftProduct}px, ${top + height / 2 - heightProduct / 2 - topProduct}px, 0px)
          scale3d(0.1,0.1,0.1) rotate(360deg)`
         $moveProduct.style.opacity = 0.2
         $moveProduct.addEventListener("transitionend", () => {
             $moveProduct.remove()
         })
     })*/
    $parent.append($moveProduct)
}

module.exports = Wishlist
