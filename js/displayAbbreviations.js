function displayAbbreviations(){
    var abbrLabel = document.getElementsByTagName("abbr");
    var dList = document.createElement("dl");
    var def = new Array();
    for(var i =0 ; i< abbrLabel.length;i++){
        var abbrAttr = abbrLabel[i].getAttribute("title");
        var innerHtml = abbrLabel[i].lastChild.nodeValue;
        //store those definitions as key-value
        def[innerHtml] = abbrAttr;
    }
     //create new elements using DOM
     for(key in def){
         var dlNode = document.createElement("dt");
         dList.appendChild(dlNode);
         var dlNode_title = document.createTextNode(key);
         dlNode.appendChild(dlNode_title);
         var ddNode = document.createElement("dd");
         var ddTitle = document.createTextNode(def[key]);
         ddNode.appendChild(ddTitle);
         dList.appendChild(ddNode);
     }

     // insert them into document
     var h2Ele = document.createElement("h2");
     var h2TextNode = document.createTextNode("Abbreviations");
     h2Ele.appendChild(h2TextNode);
     document.body.appendChild(h2Ele);
     document.body.appendChild(dList);

     //alert the type of window.onload
    // alert(typeof window.onload)
}
// window.onload = displayAbbreviations;


// 2. create a quick access list
function quickAccessList(){
    var linkEle = document.getElementsByTagName("a");
    var map = new Array();
    for(var i=0;i<linkEle.length;i++){
        if(! linkEle[i].getAttribute("accesskey")) continue;
        var key = linkEle[i].getAttribute("accesskey");
        var text = linkEle[i].lastChild.nodeValue;
        map[key] = text;
    }
    var pelement = document.createElement("ul");
    for(key in map){
        var lielement = document.createElement("li");
        pelement.appendChild(lielement);
        var str = key + " : " + map[key];
        var textNode = document.createTextNode(str);
        pelement.appendChild(textNode);
       
    }
    var p3Ele = document.createElement("h2");
    var p3Node = document.createTextNode("Quick Access");
    p3Ele.appendChild(p3Node);
    document.body.appendChild(p3Ele);
    document.body.appendChild(pelement);
}

//3. movement 

function move(){
    var Ele = document.getElementById("movement");
    /*var xpos = parseInt(Ele.offsetWidth);
    var ypos = parseInt(Ele.offsetHeight);
    if(xpos == 200 )return true;
    xpos+=5;
    ypos+=5;
    Ele.offsetWidth = xpos ; // 是无效的, 原因: offsetWidth 是DOM属性不是HTML属性, javascript不能够给ＤＯＭ属性赋值.
    Ele.offsetHeight = ypos ;// 是无效的, 原因: offsetWidth 是DOM属性不是HTML属性, javascript不能够给ＤＯＭ属性赋值.
    setTimeout("move()",500);*/

    //设置成宽高变
    /*
    var xpos = parseInt(Ele.style.width);
    var ypos = parseInt(Ele.style.height);
    if(xpos == 200 && ypos == 200) return true;
    xpos+=5;
    ypos+=5;
    Ele.style.width = xpos + "px";
    Ele.style.height = ypos+ "px";
    */ 

    // 设置成从左到右移动
    var lpos = parseInt(Ele.style["margin-left"]);
    if(lpos == 400 ) return true;
    lpos+=5;
    Ele.style["margin-left"] = lpos + "px";
    setTimeout("move()",50);  
}

//4. 抽象之后的movement 函数

function abstractMove(moveElementID, final_x,final_y,interval){
    var Ele = document.getElementById(moveElementID);
    var xpos = parseInt(Ele.style.width);
    var ypos = parseInt(Ele.style.height);
    if(xpos == final_x && ypos == final_y ) return true;
    xpos+=5;
    ypos+=5;
    Ele.style.width = xpos + "px";
    Ele.style.height = ypos+ "px";
    var repeat = `abstractMove("${moveElementID}", ${final_x},${final_y},${interval})`; //ES6 真的很好用
    setTimeout(repeat,interval);
 }

window.onload =function(){
    displayAbbreviations();
    quickAccessList();
    //move(); // 把move()函数换成abstractMove()函数
    abstractMove("movement2",200,200,10);
}