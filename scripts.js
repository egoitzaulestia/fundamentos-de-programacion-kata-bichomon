console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const titleGen1 = document.querySelector("#gen-1")

titleGen1.textContent = "Generasión 1 Pokimon"


// 2. Cambia el color de fondo de la primera generación de Pokimon.

const backgroundGen1 = document.querySelector(".infocard-list")

backgroundGen1.style.backgroundColor = "yellow"


// 3. Imprime por consola la URL de la página.

// const url = document.URL
// console.log("La URL de la página es:",url);

function imprimirURL() {
    const url = document.URL
    console.log(`La URL de la página es: ${url}`)
}

imprimirURL()


// 4. Imprime por consola el dominio de la página.

// const dominio = document.domain;
// console.log("El dominio de la página es:", dominio);

function imprimirDominio() {
    const domain = document.domain
    console.log(`El dominio de la página es: ${domain}`)
}

imprimirDominio()



// 5. Imprime todos los nodos de imagen.
// const images = document.querySelectorAll("img")
// console.log(images);

function imprimirNodosImg() {
    const imagenes = document.querySelectorAll('img')
    imagenes.forEach(image => {
        console.log(`Nodo de imagen encontrado: ${image}`)
    })
}

imprimirNodosImg()


// 6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const allImages = document.querySelectorAll("img")

// for (let i = 0; i < allImages.length; i++) {
//     console.log(allImages[i])
//     allImages[i].setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
// }

// allImages.forEach(image => {
//     image.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
// })

document.querySelectorAll("img").forEach(image => {
    image.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
})



// Premium:

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const cards = document.querySelectorAll(".infocard");

cards.forEach(card => {
  const flyingType = card.querySelector(".itype.flying");

  if (flyingType) {
    card.style.backgroundColor = "blue";
  }
});

// document.querySelectorAll(".infocard").forEach(card => 
//     card.querySelector(".itype.flying") && (card.style.backgroundColor = "blue")
//   );

console.log(cards[5])


