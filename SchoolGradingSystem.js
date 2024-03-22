    //Grade catagory
 const grades = ["A","B","C","F"]

let student1 = {
    name:"John",
    surname: "Doe",
    mark: 90,
    gradeCate:"unkown"


}
if (student1.mark>=0 && student1.mark<50){
    student1.gradeCate=grades[3]

}
else if (student1.mark>=50 && student1.mark<60){
    student1.gradeCate = grades[2]
    
}
else if (student1.mark>=60 && student1.mark<80){
    student1.gradeCate = grades[1]  
}
else if (student1.mark>=80 && student1.mark<=100){
    student1.gradeCate = grades[0]  
}


console.log(student1)

//
console.log(`Hey!${student1.name} ${student1.surname} your got symbol:\n ${student1.gradeCate}`)

/**
 * 
 * 
 * 
 * 
 */
//----------------------------------LOOPS-----------------------------------------
//for loop
 /*



 const grades = ["A","B","C","F"]

let student1 = {
    name:"John",
    surname: "Doe",
    mark: 90,
    gradeCate:"unkown"


}
if (student1.mark>=80){
    student1.gradeCate=grades[1]

}
else if (student1.mark>=60){
    student1.gradeCate = grades[1]
    
}
else if (student1.mark>=50){
    student1.gradeCate = grades[2]  
}
else if (student1.mark>=0){
    student1.gradeCate = grades[3]  
}


console.log(student1)

//
console.log(`Hey!${student1.name} ${student1.surname} your got symbol:\n ${student1.gradeCate}`)



  
  */









for(start=0;start<10;start++){
    console.log(start)
    

}
num=0
console.log(++num)