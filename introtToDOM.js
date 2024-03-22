let a = document.getElementById("num1")
let b = document.getElementById("num2")
let c = document.getElementById("results")

let btn = document.querySelector("#btnView")
let toggler = document.querySelector("#toggler")
let output = document.querySelector("#pText")

let p = document.getElementById("emoticon")


btn.addEventListener("click", ()=>{
    output.style.border ="1px solid"
    let results= parseInt(a.value) + parseInt(b.value)
    output.innerHTML= results
    

})

toggler.addEventListener("click", ()=>{

    if (p.innerHTML=="😗"){
        p.innerHTML = "😘"
    }
    else if (p.innerHTML=="😘"){
        p.innerHTML = "😗"
    }


})

window.addEventListener("resize")
