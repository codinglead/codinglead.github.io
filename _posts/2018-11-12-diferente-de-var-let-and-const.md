---
layout: project
title: la diferencia entre var, let, y const
date:  2018-10-12 3:02 -0700
updated: 2021-11-14 10:13 -0700
meta: explicación de const, let, y var declaración cuando usando JavaScript
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<span class="highlight__code">var</span>, <span class="highlight__code">let</span>, y <span class="highlight__code">const</span> son formas para declarar variables.

Cada uno trabajan differente. es importante a usar las declaraciones correctas para ayudar el desarrollador y hacer el codigo mas facil para leer.

<p class="highlight__file-desc">JavaScript</p>

### se declaran y definen así

```javascript
// estan Block scoped
// solamente usar cunado el valor es constante
// no se puede reasignar or redeclara
const nombre = "Brian";

// estan Block scoped
// se puede reasignar y redeclara
let anos = 18;

// estan Function scoped
// se puede reasignar y redeclara
var estado = "California";
```

## que es scope

Scope es como JavaScript encontra declaraciones.

Hay <span class="highlight__code">Block scope</span> y <span class="highlight__code">Function scope</span>.

### que es block scope

Puedes definir un <span class="highlight__code">Block scope</span> con "curly braces".

El uso de <span class="highlight__code">let</span> o <span class="highlight__code">const</span> en <span class="highlight__code">Block scope</span> evitar que las variables sean accesibles fuera de él.

Cuando usas var en un <span class="highlight__code">Block scope</span> si puedes usarlo afurea.

<p class="highlight__file-desc">JavaScript</p>

```javascript
{
  var varDeclaracion = "soy var en Block Scoped";
  console.log(varDeclaracion); // soy var en Block Scoped
}
console.log(varDeclaracion); // soy var en Block Scoped

{
  let letDeclaracion = "soy let en Block scoped";
  console.log(letDeclaracion); // soy let en Block scoped
}
console.log(letDeclaracion); // Uncaught ReferenceError: letDeclaracion is not defined

{
  const constDeclaracion = "soy const en Block scoped";
  console.log(constDeclaracion); // soy const en Block scoped
}
console.log(constDeclaracion); // Uncaught ReferenceError: constDeclaracion is not defined
```

"curly braces" crea un <span class="highlight__code">Block scope</span>.

Otro ejemplos son if-else declaraciones y for-loops.

### que es Function Scope

<span class="highlight__code">Function scope</span> es cualquier cosa dentro una function. Todo lo declarado dentro de una función no es accesible afuera.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const diManzanas = "manzanas de global scope";

function decirFruta () {
  let diManzanas = "manzanas de decirFruta()";
  const diPlatanos = "platanos de decirFruta()";
  var diNaranjas = "Naranjas de decirFruta()";
  console.log(diManzanas);
}

decirFruta(); // manzanas de decirFruta()

console.log(diManzanas); // manzanas de global scope

console.log(diPlatanos);
// Uncaught ReferenceError: diPlatanos is not defined

console.log(diNaranjas);
// Uncaught ReferenceError: diNaranjas is not defined
```

Cunando ejecutar <span class="highlight__code">decirFruta()</span> se imprime "manzanas de decirFruta()" en lugar de "manzanas de global scope" porque <span class="highlight__code">diManzanas</span> en la función se define en el mismo scope que donde se ejecuta <span class="highlight__code">console.log()</span>.

Cunando buscando variables comienza donde se hace referencia y sube el scope hasta llegue <span class="highlight__code">global scope</span>

## el significado de var

<span class="highlight__code">var</span> puedes redeclarado y reasignado.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var fruta = "Naranjas";
fruta = "Manzanas";
var fruta = "Platanos";

console.log(fruta); // Platanos
```

<span class="highlight__code">var</span> esta <span class="highlight__code">hoisted</span> y inicializado a <span class="highlight__code">undefined</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted) // undefined
var hoisted = "hola";
```

<span class="highlight__code">var</span> no le importa block scope.

si no hay <span class="highlight__code">var</span> declaración JavaScript asume tú querías hacer un variable y pone el variable dentro el <span class="highlight__code">global scope</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  var fruta = "Naranjas";
}

if (true) {
  vegetal = "Zanahoria";
}

console.log(fruta); // Naranjas
console.log(vegetal); // Carrot
```

### por qué var es malo

<span class="highlight__code">var</span> contamina el <span class="highlight__code">global scope</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (var i = 0; i < 10; i++) {
  // code
}

// i está en el "scope" global, ya no lo necesitamos el variable i
console.log(i); // 10
```

<span class="highlight__code">var</span> se puede redeclara.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var tarea = "mira las estrellas.";
if (true) {
  var tarea = "ve al zoológico.";
}

console.log(tarea); // ve al zoológico.
```

El <span class="highlight__code">global scope</span> versión de el variable se cambia.

## el significante de let

<span class="highlight__code">let</span> es usualmente el variable declaración que se usa sobre <span class="highlight__code">var</span> porque tiene mejores características que <span class="highlight__code">var</span> tiene.

no se puedes redeclarado, pero se puede redefinir.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let jugoFavorito = "jugo de naranja";

jugoFavorito = "jugo de manzana";

console.log(jugoFavorito); // jugo de manzana

let jugoFavorito = "jugo de arándano";
// Uncaught SyntaxError: Identifier 'jugoFavorito' has already been declared
```

<span class="highlight__code">let</span> esta hoisted pero no inicializado.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

let hoisted = "estoy hoisted pero no inicializado";
```

<span class="highlight__code">let</span> usa <span class="highlight__code">Block scope</span>, lo que significa que solo se puede acceder en el scope en el que se definió.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let frutaFavorita = "Naranjas";
if (true) {
  let frutaFavorita = "Platanos";
  console.log(frutaFavorita); // Platanos
}

console.log(frutaFavorita); // Naranjas
```


### Por que usar let over var

<span class="highlight__code">let</span> no contamina el <span class="highlight__code">global scope</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (let i = 0; i < 10; i++) {
  // code
}

console.log(i)
// Uncaught ReferenceError: i is not defined
```

<span class="highlight__code">let</span> es block scope el problema que tuvimos with <span class="highlight__code">var</span> no se aplica con <span class="highlight__code">let</span>.


## el significante de const

Las variables declaradas con <span class="highlight__code">const</span> deben contener valores que sean constantes

<span class="highlight__code">const</span> no puede ser redeclarado o reasignar.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const colorFavorito = "verde";
colorFavorito = "rojo";
// Uncaught TypeError: Assignment to constant variable.

const colorFavorito = "amarillo";
// Uncaught SyntaxError: Identifier 'colorFavorito' has already been declared
```
<span class="highlight__code">const</span> debe ser inicializado cuando se declara.

Al igual que <span class="highlight__code">let</span> <span class="highlight__code">const</span> es hoisted pero no se inicializa.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

const hoisted = "estoy hoisted pero no inicializado";
```

<span class="highlight__code">const</span> variable declaraciones son <span class="highlight__code">Block scoped</span> como <span class="highlight__code">let</span>

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  const eresBrillante = true;
  console.log(eresBrillante); // true
}

console.log(eresBrillante);
// Uncaught ReferenceError: eresBrillante is not defined
```
### const no es constante

Algunos valores se pueden cambiar con <span class="highlight__code">const</span> variable declaración.

los valores se pueden cambiar en los <span class="highlight__code">objetos</span>.

```javascript
const recetaBurritoFrijoles = {
  tortilla: "harina",
  frijoles: "pintos"
};

recetaBurritoFrijoles.tortilla = "maiz";

console.log(recetaBurritoFrijoles);
// { tortilla: 'maiz', frijoles: 'pintos' }
```

poner, modifique y quitar elementos de una <span class="highlight__code">array</span>.

```javascript
const numeros = [1, 2, 3];

numeros.pop();
console.log(numeros); // [1, 2]

numeros.push(5);
console.log(numeros); // [1, 2, 5]

numeros[1] = 10;
console.log(numeros); // [1, 10, 5]
```

## resumen de las diferencias

La mayoría, si no todo el tiempo, usa <span class="highlight__code">let</span> y <span class="highlight__code">const</span>.

1. <span class="highlight__code">let</span> y <span class="highlight__code">var</span> no tiene que ser inicializado cuando se declara. <span class="highlight__code">const</span> Tiene que ser inicializado cuando se declara.

2. <span class="highlight__code">var</span> Se puede redefinir y redeclara, <span class="highlight__code">let</span> se puede redfinir pero no redeclarado, <span class="highlight__code">const</span> no se puede redefinido o redeclarado.

3. <span class="highlight__code">var</span>declaraciones estans <span class="highlight__code">Function scoped</span> mientras <span class="highlight__code">let</span> y <span class="highlight__code">const</span> estan <span class="highlight__code">Block scoped</span>.

4. usar <span class="highlight__code">const</span> cuando querer declarar una variable que no debería cambiar.