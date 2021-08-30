
//PARTE 1

   var student = {
       name: "Manuel", 
       surname: "Infante", 
       età: "21"
    } 

    for (var k in student) {
        
        console.log(k,student[k])
    
   document.getElementById("output").innerHTML +=  student[k] + " \n  "; 
    }

//PARTE 2

//array di oggetti

var friendsList = [
    {
        name: "Giorgio",
        surname: "Abate",
        età: "65"
    },

    {
        name: "Mario",
        surname: "Roveta",
        età: "30" 
    },

    {
        name: "Riccardo",
        surname: "Brera",
        età: "20"
    }
    ]

    for (var x = 0; x < friendsList.length; x++){
        console.log(friendsList[x].name)
        console.log(friendsList[x].surname);
    }
 

//PARTE 3

var classList = {
    student : []
}
    var nameStudent = prompt("Inserisci il nome ")
    var surnameStudent = prompt(" Inserisci il cognome ")
    var ageStudent = prompt(" Inserisci l'età ")

    classList.student.push({
        name: nameStudent,
        surname: surnameStudent, 
        age : ageStudent 
    });

for(var x = 0; x < classList.student.length; x++){
    for (var k in classList.student[x]) {
        document.getElementById("output3").innerHTML += classList.student[x][k];
    }
}
