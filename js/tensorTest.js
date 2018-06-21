import * as tf from '../node_modules/@tensorflow/tfjs';
"use strict";  
  
var num = [1, 2, 3, 4];  
var plusDouble = num.map(function (item) {  
  return item * 2;  
});  
console.log(plusDouble);
let num1 = [1,2,3,4];  
let plusDouble1 = num1.map(item => item * 2);  
console.log(plusDouble);  


const a = tf.tensor1d([1, 2, 3]);
const b = tf.scalar(2);
const result = a.add(b);
result.data().then(data => console.log(data));
console.log(result.dataSync());


const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);
await model.fit(xs, ys, {epochs: 500});
const output = model.predict(tf.tensor2d([[5]], [1, 1]));
output.print();