let imagens = document.getElementsByTagName("img")
let modal = document.querySelector("dialog")
let buttonClose = document.querySelector("dialog button")
let imagemModal = document.querySelector(".image-modal")

for(let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', e => {
        imagemModal.src = imagens[i].src
        console.log(imagens[i].src)
        modal.showModal()
    })
}

buttonClose.onclick = function () {
    modal.close()
}