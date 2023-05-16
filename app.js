//DOM
const items = document.getElementById(`items`)
const templateCard = document.getElementById(`template-card`).content
const fragment = document.createDocumentFragment()


document.addEventListener(`DOMContentLoaded`, () => {
    fetchData()
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
        templateCard.querySelector(`h5`).textContent = producto.tittle
        templateCard.querySelector(`p`).textContent = producto.precio
        templateCard.querySelector(`img`)set
      
        const clone = templateCard.cloneNode (true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}