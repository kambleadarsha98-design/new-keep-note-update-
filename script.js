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

    // Create title heading
    const titleH1 = document.createElement("h3");
    titleH1.textContent = "Title:";

    // Create title input (read-only)
    const newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.value = titleInput.value;
    newTitle.readOnly = true;
    newTitle.classList.add("note-title");

    // Create content heading
    const contentH1 = document.createElement("h3");
    contentH1.textContent = "Content:";

    // Create content textarea (read-only)
    const newContent = document.createElement("textarea");
    newContent.value = textInput.value;
    newContent.readOnly = true;
    newContent.classList.add("note-text");

    // Append headings and inputs to note card
    noteCard.appendChild(titleH1);
    noteCard.appendChild(newTitle);
    noteCard.appendChild(contentH1);
    noteCard.appendChild(newContent);

    // Append note card to notes section
    notesSection.appendChild(noteCard);

    // Hide modal and clear modal inputs
    container.style.visibility = 'hidden';
    titleInput.value = "";
    textInput.value = "";
    titleNote.value = "";  // reset live preview
    textDisplay.value = ""; // reset live preview
}
