const add = document.querySelector('.add-note');
const deleteNoteElt = document.querySelector('.delete-note');

add.addEventListener('click', addNote)
deleteNoteElt.addEventListener('click', deleteNote.bind(this))

function addNote()
{
    const noteValue = document.querySelector('input[name="note"]').value; 
    

    const newLi = document.createElement('li');
    const liContent = document.createTextNode(noteValue)
    const btnDelNote = document.createElement('button')
    btnDelNote.innerHTML = 'supprimer'
    btnDelNote.classList.add('delete-note')
    newLi.appendChild(liContent) 
    newLi.appendChild(btnDelNote)
    document.querySelector('.elements').appendChild( newLi );
}

function deleteNote(elt)
{
    elt.remove()
}