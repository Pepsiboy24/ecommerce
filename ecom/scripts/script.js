const template = document.querySelector("[data-product-template]")
const cardContainer = document.querySelector("[data-card-container]")
const searchBar = document.querySelector("[data-search-bar]")

searchBar.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    produce.forEach(product => {
        // const isVissible = product.name.includes(value)
        const isVissible = product.name.toLowerCase().startsWith(value)
        
        product.element.classList.toggle("hide", !isVissible)
        console.log(product.card)
    })
    
})
const products =[
    {name: "SHIRTS", img: "ddd", page: "./pages/shirts.html"},
    {name: "JEANS", img: "ddd" , page: "./pages/jeans.html"},
    {name: "HODDIES", img: "ddd" , page: "./pages/hoddies.html"},
    {name: "BAGS", img: "ddd" , page: "./pages/bags.html"},
    {name: "SNEAKERS", img: "ddd", page: "./pages/sneakers.html"},
    {name: "WATCHES", img: "ddd", page: "./pages/watches.html"},
]
let produce = []
produce = products.map(product => {
    const card = template.content.cloneNode(true).children[0];
    const name = card.querySelector("[data-card-name]")
    card.setAttribute("href", product.page)
    // const price = card.querySelector("[data-card-price]")
    // price.innerText = "$ " + product.price
    name.innerText = product.name
    cardContainer.append(card)
    return {name: product.name, element: card};
    console.log(card)
})

products.forEach(product => {
    const card = template.content.cloneNode(true).children[0];
    const name = card.querySelector("[data-card-name]")
    // const price = card.querySelector("[data-card-price]")
    // price.innerText = "$ " + product.price
    // name.innerText = product.name
    // cardContainer.append(card)
    // return {name: product.name, element: card};
    console.log(card)
})