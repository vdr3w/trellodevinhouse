import Triangulo from "./Triangulo.js"; // Importando o calculo de Triangulo
import Quadrado from "./Quadrado.js"; // Importando o calculo de Quadrado
import Retangulo from "./Retangulo.js"; // Importando o calculo de Retangulo

const triangulo = new Triangulo(6, 8);
const areaTriangulo = triangulo.calcular();
console.log(areaTriangulo); // 24 - (this.base * this.altura) / 2

const quadrado = new Quadrado(4, 4);
const areaQuadrado = quadrado.calcular();
console.log(areaQuadrado); // 16 - (this.base * this.altura)

const retangulo = new Retangulo(4, 6);
const areaRetangulo = retangulo.calcular();
console.log(areaRetangulo); // 24 - (this.base * this.altura)

// Exemplos extras para teste
const trianguloGrande = new Triangulo(10, 12);
const areaTrianguloGrande = trianguloGrande.calcular();
console.log(areaTrianguloGrande); // 60 - (this.base * this.altura) / 2

const quadradoGrande = new Quadrado(8, 8);
const areaQuadradoGrande = quadradoGrande.calcular();
console.log(areaQuadradoGrande); // 64 - (this.base * this.altura)

const retanguloGrande = new Retangulo(10, 15);
const areaRetanguloGrande = retanguloGrande.calcular();
console.log(areaRetanguloGrande); // 150 - (this.base * this.altura)
