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
window.onload =function(){
    displayAbbreviations();
    quickAccessList();
}