---
layout: project
title: la diferencia entre var, let, y const
date:  2018-11-12 3:02 -0700
updated: 2020-06-12 18:11 -0700
meta: explicación cuando usar const, let y var declaración cuando usando javascript
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

## Que es var, let, y const

<span class="highlight__code">var</span>, <span class="highlight__code">let</span>, y <span class="highlight__code">const</span> son formas para declarar variables. cada uno trabajan differente. es importante a usar las declaraciones correctas para ayudar el desarrollador y hacer el codigo mas facil para leer.

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
// estan declarados asi

// estan block scoped
// solamente usar cunado el valor es constante
// no se puede reasignar
const nombre = "Brian";

// estan block scoped
// no se puede reasignar con un nuevo
let anos = 18;

// como declarar antes de es6
var estado = "California"
```

## primero hablar sobre "scope"

"scope" es como JavaScript encontra declaraciones. Block Scope y function scope son similares pero tienen una pequeña diferencia.

### que es block scope

Puedes definir un Block scope con "curly braces". cunado usas let y const en un block scope no puedes usarlo afuera de un block scope. Cuando usas var en un block scope (pero que no sea un function scope) si puedes usarlo afurea de block scope.

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
// esta es normale javascript
{
  var a = 10
  console.log(a) // 10
}

{
  let b = "soy let en block scoped"
  console.log(b) // soy let en block scoped
}

{
  const c = "soy const en block scoped"
  console.log(c) // soy let en block scoped
}

console.log(a) // 10
console.log(b) // Uncaught ReferenceError: b is not defined
console.log(c) // Uncaught ReferenceError: c is not defined
```

"curly braces" crea un block scope. otro ejemplos son if-else declaraciones y for-loops.

### que es Function Scope

function scope es cualquier cosa dentro una function. Tiene lo mismo reglas como block scope solamente como se declara es diferente.


<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
let saludar = "Hola! Cómo estás";

function saludarPersona() {
  let saludar = "la función está diciendo hola";
  console.log(saludar);
}

saludarPersona();
  // impresión 'la función está diciendo hola'
```

cuando llamas <span class="highlight__code">saludarPersona()</span> JavaScript encontrar la función y camina dentro el "scope". primero JavaScript cheques el "scope" dónde <span class="highlight__code">console.log()</span> estaba ejecutado, cual es  function scope, entonces mira para el variable saludar. si no puede encontrar entro el scope, sigue adelante fuera hasta "global scope".esta es la razón por saludar declarar dentro el funcion está impreso en la consola en lugar de saludar declarado en el "global scope".

## el significado de var

<span class="highlight__code">var</span> era la primero manera a declarar antes de es6.

* puedes redeclarado y reasignado.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
var saludar = "Hola";
saludar = "Cómo estás";
var saludar = "aclamaciones";

console.log(saludar);
  // impresión aclamaciones
```

<span class="highlight__code">var</span> esta <span class="highlight__code">hoisted</span> y inicializado a <span class="highlight__code">undefined</span>.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
console.log(hoisted) // undefined
var hoisted = "hola";

```

<span class="highlight__code">var</span> no le importa block scope. si no hay <span class="highlight__code">var</span> declaración JavaScript asume tú querías hacer un variable y pone el variable dentro el "global scope".

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
if (true) {
  var hola = "hola";
}

if (true) {
  // nunca hagas esto
  saludar = "saludar";
}

console.log(hola)
  // impresión hola
console.log(saludar)
  // impresión saludar
```

### por qué var es malo

<span class="highlight__code">var</span> contamina el "global scope".

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
for (var i = 0; i < 10; i++) {
  // code
};

// i está en el "scope" global, ya no lo necesitamos el variable i
console.log(i); // 10
```

Ejemplo tenes un mil lines de codigo y no te das cuenta que usastes el mismo variable dos veces. ahora tu tienes un difícil de encontrar error.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
var saludar = "hola";
if (true) {
  var saludar = "hi";
}

console.log(saludar)
  // impresión hi
```

porque <span class="highlight__code">var</span> se puede redefinir, se mete con el "global scope" versión de el variable.

## el significante de let

<span class="highlight__code">let</span> es usualmente el variable declaración que se usa sobre <span class="highlight__code">var</span> porque tiene mejores características que <span class="highlight__code">var</span> tiene.

no puedes redeclarado pero puede ser redefinido. esto arregla el problema con var que podríamos accidentalmente redeclar un variable no queríamos.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let saludar = "hola";

saludar = "hola, como estas"

console.log(saludar)
  // impresión hola, como estas

let saludar = "hola, otra vez";
// Uncaught SyntaxError: Identifier 'saludar' has already been declared
```

<span class="highlight__code">let</span> esta hoisted pero no inicializado.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

let hoisted = "Hola, estoy hoisted pero no inicializado";
```

<span class="highlight__code">let</span> usando block scope solamante puede referenciado en el mismo "scope" se definió. Esto soluciona el problema que tuvimos con <span class="highlight__code">var</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  let saludar = "hola";
  console.log(saludar);
    // impresión hola
}

console.log(saludar);
// Uncaught ReferenceError: saludar is not defined
```


### Por que let es mejor de var

<span class="highlight__code">let</span> no contamina el "global scope".

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

variables declarado con <span class="highlight__code">const</span> los valores deben ser constants.

<span class="highlight__code">const</span> no puede ser redeclarado o redefinido.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const greeting = "hola";
greeting = "hola, como estas";
// Uncaught TypeError: Assignment to constant variable

const greeting = "hola";
// Uncaught SyntaxError: Identifier 'greeting' has already been declared
```
<span class="highlight__code">const</span> debe ser inicializado cuando se declara.

como <span class="highlight__code">let</span> y <span class="highlight__code">const</span> es hoisted pero no inicializado.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

const hoisted = "Hola, estoy hoisted pero no inicializado";
```

<span class="highlight__code">const</span> variable declaraciones son block scoped como <span class="highlight__code">let</span>

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  const saludar = "Hola";
  console.log(saludar);
}

console.log(saludar);
// Uncaught ReferenceError: saludar is not defined
```
### const no es constante

Todavía puedes cambiar algo de valor con <span class="highlight__code">const</span> variable declaración.

En los objetos todavía puedes cambiar los valores.

```javascript
const Brian = {
  nombre: 'Brian',
  idioma: 'JavaScript'
}

Brian.idioma = "HTML"

console.log(Brian)
// {name: "Brian", language: "HTML"}
```


añadir y eliminar elementos de arrays.

```javascript
const arr = [1,2,3];
​
arr.pop();
​
console.log(arr)
  // [1, 2]
​
arr.push(5)
​
console.log(arr)
  // [1,2,5]
```

## resumen de las diferencias



uso <span class="highlight__code">let</span> y <span class="highlight__code">const</span> la mayor parte del tiempo. solo usa <span class="highlight__code">var</span> Cuando intentas usarlo como una opción estilística.

1. <span class="highlight__code">let</span> y <span class="highlight__code">var</span> no tiene que ser inicializado cuando se declara. <span class="highlight__code">const</span> Tiene que ser inicializado cuando se declara.

2. <span class="highlight__code">var</span> Se puede redefinir y redeclar; <span class="highlight__code">let</span> se puede redfinir pero no redeclarado; <span class="highlight__code">const</span> no puede ser redefinido o redeclarado.

3. <span class="highlight__code">var</span>declaraciones son globales o de función, mientras que<span class="highlight__code">let</span> and <span class="highlight__code">const</span> son bloque de ámbito.

4. usar <span class="highlight__code">const</span> cuando querer declarar una variable no debería cambiar.