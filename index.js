
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

// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)

// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('dblclick', function(){
//     sword.remove()
// })

// let shield = document.createElement('img')
// shield.src = 'assets/shield.png'
// sword.style.position = 'fixed'
// sword.style.left = '165px'
// sword.style.bottom = '185px'
// document.body.append(shield)

// shield.addEventListener('dblclick', function(){
//     shield.remove()
// })

// let staff = document.createElement('img')
// staff.src = 'assets/staff.png'
// staff.style.position = 'fixed'
// staff.style.left = '600px'
// staff.style.bottom = '100px'
// document.body.append(staff)

// staff.addEventListener('dblclick', function(){
//     staff.remove()
// })