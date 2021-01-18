const objPerson = {}

for (let i = 1; i < 4; i++) {
    let name = prompt('Введите имя пользователя');
    let age = +prompt('Введите возраст');


    objPerson[i] = {
        name: name,
        age: age
    }
    
}  


for (const key in objPerson) {
    console.log( `пользователь ${key}`);

    for (const newkey in objPerson[key]) {
        console.log( `имя ${objPerson[key][newkey]} возраст ${objPerson[key][newkey]}`);
       
                
           
        }
       
    }
   

console.log(objPerson);