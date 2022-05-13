const frutas = ["bana", "uva", "abacaxi", "laranja"]
//
for(let i= 0; i <frutas.length; i++){
    console.log(frutas[i],i)
    if(frutas[i] == "uva")break

}

frutas.forEach((fruta)=>{console.log(fruta)
if(fruta == "uva")return
})

let contador = 0

while(contador <5){
    console.log("estou bebado")
    contador++
}