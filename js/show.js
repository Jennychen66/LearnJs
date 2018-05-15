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

// add another element <a> to split javascript from html, now we only need a class to bind between them
function show(){
    var label = document.getElementsByTagName("a");
    for(var i=0;i<label.length;i++){ 
        if(label[i].className == "showpopup"){  // another way : label[i].getAttribute("class") == "showpopup"
            label[i].onclick = function(){
                showPic(this);
                return false;
            }
        }
    }
}
//window.onload = show;

//this is the 7th chapter, create a dynamic HTML content
var showInnerHtml = function(){
    var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML);  // alert  <p>This is <em>my</em> content. </p>
};
window.onload = showInnerHtml;

// use DOM the create HTML dynamically
var createEle = function(){
    var testdiv = document.getElementById("testdiv");
    var pElement = document.createElement("p");
    testdiv.appendChild(pElement);
    var pNode = document.createTextNode("Hello, I'm using DOM to create HTML dynamically");
    pElement.appendChild(pNode);
}
window.onload = createEle;