const add = document.querySelector('.add-note');

add.addEventListener('click', addNote)
document.addEventListener('click', function(evt){
    item = evt.target;
   if( item.classList[0] == 'delete-note'){
        item.parentElement.remove();
   }
})
 
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
 
 
