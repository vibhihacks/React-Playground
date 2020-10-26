var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet  = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunther';
console.log('nameConst',nameConst);

function getPetName() {
    const petName = 'srk';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping 

var fullName = 'Vibudh Vishal';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);