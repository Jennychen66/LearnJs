function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var img = document.getElementById("placeholder");
   // img.setAttribute("src",source); // "src" 一定要加引号,因为是一个属性. 如果不加,会导致<a>标签发生默认行为
    //return false;
    img.src = source;

    var title = whichPic.getAttribute("title");
    var tit = document.getElementById("showTitle");
   // tit.textContent = title;
   tit.childNodes[0].nodeValue = title;
} 

function countBodyChildElements(){
    
    var body_element = document.body; // document.getElementById("body")[0]
    for(var i =0 ; i< body_element.childNodes.length;i++){
        console.log("Jenny: " + i + " " +  body_element.childNodes[i].nodeType);
    }
   // body_element.childNodes.forEach()
    //alert(body_element.childNodes.length);
}
window.onload = countBodyChildElements;