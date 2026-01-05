let resturantData = [
    {
        name: "Gents Sandal",
        price: "$8.99",
        desc: "adipisicing elit. Iusto tempore dolore earum quasi, rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.TnNtvMuwSY2GQNt7nDbSdQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "men"
    },
    {
        name: "slippers",
        price: "$11.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.lyaRavlsV7bU3Im4wL9thwHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "dummy"
    },
    {
        name: "Mens watch",
        price: "$24.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.Bl00sWHqcxZ2pY4ZY-3xtgHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "men"
    },
    {
        name: "Womens watch",
        price: "$9.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.HKIBgcJ4EqNEmcxyZbW9AgHaHZ?w=197&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "women"
    },
    {
        name: "Bag",
        price: "$4.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.JuclB7uLYruokWGVEFu-6gHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "dummy"
    },
    {
        name: "kurti",
        price: "$2.99",
        desc: "Lorem Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://tse3.mm.bing.net/th/id/OIP.-6L6iVgF_iEZQewahqxKkgHaKL?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "women"
    },
    {
        name: "Shalwar Kameez",
        price: "$15.99",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.-DsTA0CHj0tgt7KRmdchWQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "men"
    },
    {
        name: "Cosmetics",
        price: "$14.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.AZOIvYV0zibkXIbnVr-AnwHaFj?w=264&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "women"
    }
]

function allMap() {
    totalForCart.style.display = "none"
    resturantData.map((item) => {
        menuContainer.innerHTML += `<div class="card">
        <div class="image" id="image${imageNum}"></div>
            <div class="details">
                <div>
                    <h3 id="uiItemName">${item.name}</h3>
                    <div id="uiPrice">${item.price}</div>
                    </div><hr>
                    <p id="uiDesc">
                    ${item.desc}
                    </p>
                    <button onclick="addToCart(this)" class="addToCart">Add to cart</button>
            </div>
        </div>`
        document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
        imageNum++
    })
}

function itemsFinder(x) {
    totalForCart.style.display = "none"
    imageNum = 0
    menuContainer.innerHTML = ""
    resturantData.filter((item) => {
        if (x) {
            return item.category == x
        } else {
            return true
        }
    }).map((item) => {
        menuContainer.innerHTML += `
        <div class="card">
            <div class="image" id="image${imageNum}"></div>
            <div class="details">
                <div>
                    <h3 id="uiItemName">${item.name}</h3>
                    <div id="uiPrice">${item.price}</div>
                    <button onclick="addToCart(this)" class="addToCart">Add to cart</button>
                    </div><hr>
                    <p id="uiDesc">
                    ${item.desc}
                    </p>
            </div>
        </div>`
    document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
    imageNum++
    })
}

function searchItems() {
    totalForCart.style.display = "none"
    imageNum = 0
    menuContainer.innerHTML = ""
    let userInput = document.getElementById("search")
    let itemFound = false

    resturantData.forEach((item) => {
        if (item.name.toLowerCase().includes(userInput.value.trim().toLowerCase()) && userInput.value.trim() != "") {
            menuContainer.innerHTML = `
                <div class="card">
                    <div class="image" id="image${imageNum}"></div>
                    <div class="details">
                        <div>
                            <h3 id="uiItemName">${item.name}</h3>
                            <div id="uiPrice">${item.price}</div>
                            <button onclick="addToCart(this)" class="addToCart">Add to cart</button>
                        </div><hr>
                        <p id="uiDesc">
                            ${item.desc}
                        </p>
                    </div>
                </div>`
            document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
            itemFound = true
            imageNum++
        }
    })

    if (itemFound == false) {
        menuContainer.innerHTML = "<h3>No Item Found</h3>"
    }
}

function addToCart(x) {
    let cartData = localStorage.getItem("cart")
    cartData = JSON.parse(cartData) || []

    let itemName = x.closest(".card").querySelector("#uiItemName").innerText
    let itemPrice = x.closest(".card").querySelector("#uiPrice").innerText
    let itemDesc = x.closest(".card").querySelector("#uiDesc").innerText

    let currentCart = {
        itemName : itemName,
        itemPrice : itemPrice,
        itemDesc : itemDesc
    }

    cartData.push(currentCart)

    let jsonCartData = JSON.stringify(cartData)
    localStorage.setItem("cart", jsonCartData)
}

function showCartItems() {
    totalForCart.style.display = "block"
    let totalCost = 0;
    let cartData = localStorage.getItem("cart")
    cartData = JSON.parse(cartData)
    
    menuContainer.innerHTML = ""
    cartData.map((item) => {
        menuContainer.innerHTML += `
        <div class="cartCards">
            <div>
                <h3 id="uiItemName">${item.itemName}</h3>
                <div id="uiPrice">${item.itemPrice}</div>
                </div><hr>
                <p id="uiDesc">
                ${item.itemDesc}
                </p>
            </div>
        </div>`
        totalCost += Number(item.itemPrice.replace(/[^\d.]/g, ""))
    })
    totalSpan.innerText = "$"
    totalSpan.innerText += totalCost
}

let allBtn = document.querySelector("#all")
let menuContainer = document.querySelector(".menuContainer")
let totalForCart = document.querySelector("#totalForCart")
let totalSpan = document.querySelector("#totalSpan")
let AccountName = document.querySelector("#AccountName")
let loginBtn = document.querySelector("#loginBtn")
let imageNum = 0
let loggedInUser = localStorage.getItem("currentUser") || ""

if (loggedInUser) {
    loggedInUser = JSON.parse(loggedInUser).userName
    loginBtn.innerText = "Logout"
} else {
    loginBtn.innerText = "Login / Signup"
}


AccountName.innerText = loggedInUser
allMap()