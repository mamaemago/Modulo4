let frutas = ["maça","pera","limão","Uva"]

let tamanho = frutas.length
console.log(tamanho)

console.log(frutas [0])
console.log(frutas [1])
console.log(frutas [2])
console.log(frutas [3])

frutas.push("tangerina")
console.log(frutas.length)
frutas.pop()

frutas.splice(1,1)

frutas.forEach((frutas,index)=>{
console.log(frutas,index)}
)

console.log(frutas.includes("abacaxi"))