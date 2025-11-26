const add = document.getElementById('addBtn');
const container = document.getElementById('container');
const closeBtn = document.querySelector(".close-button");
const notesSection = document.getElementById("notesSection");

add.onclick = () => {
    container.style.visibility = 'visible';
}

closeBtn.onclick = () => {
    container.style.visibility = 'hidden';
}

function closeModal() {
    container.style.visibility = 'hidden';
}


function  saveNote(){
 
  document.getElementById("notesSection").style.visibility = "visible";  

  container.style.visibility = 'hidden';


}  


const titleInput = document.getElementById("title");
const titleNote = document.getElementById("titlenote");

titleInput.addEventListener("input", function() {
    titleNote.value = titleInput.value;
});



 const textInput = document.getElementById("textcontent"); 
 const  textDisplay = document.getElementById("textdisplay");

 textInput.addEventListener("input", function() {
     textDisplay.value = textInput.value;
 }); 

 


 