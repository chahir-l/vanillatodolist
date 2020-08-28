let add = document.querySelector('.add-note');

add.addEventListener('click', function(){
    let champs = document.querySelector('input[name="note"]').value; 
    alert(champs)
    document.prepend('ul li').innerHTML = champs;
})