(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})()


//lib.js
//导出常量
export const sqrt = Math.sqrt;
//导出函数
export function square(x) {
    return x * x;
}
//导出函数
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
