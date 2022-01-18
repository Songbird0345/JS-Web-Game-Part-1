
function newImage(source, left, bottom) {
    let newImage = document.createElement('img')
    

    newImage.src = source;
    newImage.style.left = left;
    newImage.style.bottom = bottom;
    newImage.style.position = 'fixed';
    document.body.append(newImage);
    return newImage

}
function newItem(source, left, bottom) {
    let newItem = newImage(source, left, bottom)


    newItem.addEventListener('dblclick', function(){
    newItem.remove()
})

}

    
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

