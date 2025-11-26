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

 


 function saveNote() {
    // Make notes section visible
    notesSection.style.visibility = "visible";

    // Create new note card
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    // Create title for the note
    const newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.value = titleInput.value; // take modal input value
    newTitle.readOnly = true;           // make it read-only
    newTitle.classList.add("note-title");

    // Create content for the note
    const newContent = document.createElement("textarea");
    newContent.value = textInput.value; // take modal input value
    newContent.readOnly = true;          // make it read-only
    newContent.classList.add("note-text");

    // Append title and content to note card
    noteCard.appendChild(newTitle);
    noteCard.appendChild(newContent);

    // Append note card to #allNotes
    document.getElementById("allNotes").appendChild(noteCard);

    // Hide modal and clear modal inputs
    container.style.visibility = 'hidden';
    titleInput.value = "";
    textInput.value = "";
    titleNote.value = "";  // reset live preview
    textDisplay.value = ""; // reset live preview
}
