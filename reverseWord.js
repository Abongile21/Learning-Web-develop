let reversed =""
reversed
let word = "aapppppppppppapaandjbnjasbcjkansbcnkasbcnxmkcmnwujdkanshcsjncjkanc jhbncjcn hdncb jmbcj"
function reverse(word){

    for (letter = word.length-1 ;letter>=0;letter--){

            reversed += word[letter]
    }
    return reversed
    
}
console.log(reverse("aoop"))



// function palindrome(){

//     if(reverse(word)==word){
//         console.log("It is a palindrome")
//     }
//     else{
//         console.log("Not a palindrome")
//     }

// }
// palindrome()