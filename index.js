// function newImage() {
//     let newImage = document.createElement('img')
//     position = 'fixed'

//     greenCharacter {
//         greenCharacter.src = 'assets/green-character.gif'
//         style.left = '100px'
//         style.bottom = '100px'
//     }

//     pineTree {
//         pineTree.src = 'assets/pine-tree.png'
//         style.left = '450px'
//         style.bottom = '200px'
//     }

//     tree { 
//         tree.src = 'assets/tree.png'
//         style.left = '200px'
//         style.bottom = '300px'
//     }

//     pillar {
//         pillar.src = 'assets/pillar.png'
//         style.left ='350px'
//         style.bottom = '100px'
//     }

// well {
//     well.src = 'assets/well.png'
//     style.left = '500px'
//     style.bottom = '425px'
// }

// crate {
//     crate.src = 'assets/crate.png'
//     style.left = '150px'
//     style.bottom = '200px'
// }


//     document.body.append(newImage)
// }




let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = ' 100px'
document.body.append(pillar)

let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)

let well = document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let shield = document.createElement('img')
shield.src = 'assets/shield.png'
sword.style.position = 'fixed'
sword.style.left = '165px'
sword.style.bottom = '185px'
document.body.append(shield)

shield.addEventListener('click', function(){
    shield.remove()
})