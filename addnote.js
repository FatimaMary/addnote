let myNotes = []
const inputEl = document.getElementById("input-el")
const addNote = document.getElementById("addnote")
const ulEl = document.getElementById("ul-el")

function getNote(myNotes) {
    let listItems = ""

for (let i = 0; i < myNotes.length; i++) {
    listItems +=  "<li>"+ myNotes[i] + "</li>"
}
ulEl.innerHTML = listItems
}

addNote.addEventListener("click", function() {
    myNotes.push(inputEl.value)
    inputEl.value = ""
    getNote(myNotes)
})
