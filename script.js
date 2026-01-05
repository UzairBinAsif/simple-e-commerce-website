let resturantData = [
    {
        name: "Shalwar Kameez",
        price: "$15.99",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.-DsTA0CHj0tgt7KRmdchWQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "men"
    },
    {
        name: "kurti",
        price: "$2.99",
        desc: "Lorem Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://tse3.mm.bing.net/th/id/OIP.-6L6iVgF_iEZQewahqxKkgHaKL?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "women"
    },
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
        name: "Cosmetics",
        price: "$14.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/OIP.AZOIvYV0zibkXIbnVr-AnwHaFj?w=264&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        category: "women"
    }
]

function allMap() {
    resturantData.map((item) => {
        menuContainer.innerHTML += `<div class="card">
        <div class="image" id="image${imageNum}"></div>
            <div class="details">
                <div>
                    <h3 id="uiItemName">${item.name}</h3>
                    <div id="uiPrice">${item.price}</div>
                    <button onclick="addToCart(this.parentElement)" class="addToCart">Add to cart</button>
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

function itemsFinder(x) {
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
                    <button onclick="addToCart(this.parentElement)" class="addToCart">Add to cart</button>
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
                            <button onclick="addToCart(this.parentElement)" class="addToCart">Add to cart</button>
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
    console.log(x)
}
let allBtn = document.querySelector("#all")
let menuContainer = document.querySelector(".menuContainer")
let imageNum = 0

allMap()