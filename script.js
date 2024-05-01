//selecting popup-overlay
//selecting popup-box
//selecting add-popup-button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancel=document.getElementById("cancel-popup")
 
cancel.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

// seleect container,select book-title-input,select book-author-input,select book-description-input,select add-book

var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbook=document.getElementById("add-book")

addbook.addEventListener("click",function(event){
    
    var div=document.createElement("div")
    div.setAttribute("class","container-book")
    div.innerHTML=`<h2>${booktitleinput.value}</h2> <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p> <button onClick="deleteitem(event)">Delete</button>`
    container.append(div)
    event.preventDefault()

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deleteitem(event){
    console.log(event)
    event.target.parentElement.remove()
    
}