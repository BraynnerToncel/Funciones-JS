function generatorId(){
  let idMax = Math.max.apply(Math, students.map(o => o.id));
  newStudent.forEach(element =>{
    element.id = ++idMax;
});
return(idMax)
}
function buscarCampo(students, consulta) {
  let contar = 0;
   students.filter((e) => {
     for (const campo in consulta) {
       if (e[campo] !== consulta[campo]) return false;
     }
        contar += 1;
   });
   return (contar);
} 

function unirCalificacion(students, califications){
  const rest = [];
      students.forEach(e => {
        const z = califications.filter(z => z.id === e.id)[0]; 
        if (z){
        e['calification'] = z.calification;
          rest.push({e});
        } 
      });
    return(rest)
}

function addStudent(students, newStudent){
     generatorId();
      students = students.concat(newStudent);
      return(students);
}    

function addCalification(id,students,califications){
  const index = students.findIndex(e => e.id === id.id);
    if (index !== -1){
      const index1 = califications.findIndex(item => item.id === id.id);
      if (index1 !== -1){

      }
    }
}

Array.prototype.Sum = function (exp) {
  if (exp instanceof Function) return this.reduce((a, i) => (a += exp(i)), 0);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Variables
const students = [
  { id: 1, name: "juan", age: 17, height: 1.6, gender: "M" },
  { id: 4, name: "pedro", age: 15, height: 1.9, gender: "M" },
  { id: 2, name: "ana", age: 16, height: 1.65, gender: "F" },
  { id: 3, name: "sofia", age: 17, height: 1.72, gender: "F" },
  { id: 6, name: "pedro", age: 12, height: 1.7, gender: "M" },
  { id: 5, name: "rosa", age: 19, height: 1.67, gender: "F" },
];
const califications = [
  { id: 1, calification: 5 },
  { id: 4, calification: 5 },
  { id: 3, calification: 5 },
  { id: 2, calification: 1 },
  { id: 5, calification: 3 },
  { id: 6, calification: 4 },
];
const sumArray = students.Sum((a) => a.height);
const promedio = sumArray / students.length;
const  resultadoF = unirCalificacion(students, califications);
const consulta = { gender: "F" };
const res = buscarCampo(students, consulta);
const newStudent =[
  {id:'', name: "Braynner", age: 20, height: 1.78, gender: "M"}, {id:'', name: "Javier", age: 20, height: 1.78, gender: "M"}
  ];
const resultGeneratorId = generatorId();
const result =  addStudent(students, newStudent);
const id = {id:2 , calification:10}
const  resultAddCalifcation = addCalification(id, califications);
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Imprimir
//console.log(resultGeneratorId);
//console.log(res);
//console.log("El promedio es de las alturas es: ", promedio);
//console.log (resultadoF);
console.log(resultAddCalifcation);
//console.log(result);