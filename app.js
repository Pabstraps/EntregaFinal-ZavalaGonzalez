//DOM

const cards = document.getElementById(`cards`)
const items = document.getElementById(`items`)
const footer = document.getElementById(`footer`)
const templateCard = document.getElementById(`template-card`).content
const templatefooter = document.getElementById(`template-footer`).content
const templateCarrito = document.getElementById(`template-carrito`).content
const fragment = document.createDocumentFragment()

//Se declara el Objeto

let carrito = {}


document.addEventListener(`DOMContentLoaded`, () => {
    fetchData()
})
cards.addEventListener(`click`, e => {
    addCarrito(e)
})

//Se hace el Fetch del archivo JSON

const fetchData = async () => {
    try {
        const response = await fetch ("api.json")
        const data = await response.json()
        
        pintarCards(data)

    } catch (error) {
        console.log (error)
    }
}


//se imprimen las cards en HTML

const pintarCards = data => {
    data.forEach(producto =>{
        templateCard.querySelector(`h5`).textContent = producto.title
        templateCard.querySelector(`p`).textContent = producto.precio
        templateCard.querySelector(`img`).setAttribute("src",producto.thumbnailUrl)
        templateCard.querySelector(`.btn-dark`).dataset.id = producto.id 

        const clone = templateCard.cloneNode (true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    if(e.target.classList.contains(`btn-dark`)){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

//se pushea al objeto
const setCarrito = objeto => {

    const producto = {
        id: objeto.querySelector(`.btn-dark`).textContent,
        tittle: objeto.querySelector(`h5`).textContent,
        precio: objeto.querySelector(`p`).textContent,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad +1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
}

//Se imprime el carrito

const pintarCarrito = () => {
    console.log (carrito)
}

