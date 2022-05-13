const pessoa = {
    altura : 172,
    peso : 60,
    olhos: "azuis",
    aposentado: false,
    calculoIMC(){
        return this.peso / (this.altura * this.altura)
    }
   
}

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.calculoIMC())

pessoa.peso = 45

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.calculoIMC())

const pessoa2 = Object.create(pessoa)
pessoa2.altura = 100
pessoa2.peso = 

console.log(pessoa2.altura)
console.log(pessoa.altura)
console.log(pessoa2.peso)
