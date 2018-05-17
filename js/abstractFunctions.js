function abstractMove(moveElementID, final_x,final_y,interval,xAttr,yAttr){
    var Ele = document.getElementById(moveElementID);

    // we need to firstly clear timeout handler , otherwise it will be confused when mouseover switching between elements
    if(Ele.movement){
        clearTimeout(Ele.movement);
    }
    var xpos = parseInt(Ele.style[xAttr]);
    var ypos = parseInt(Ele.style[yAttr]);
    if(xpos == final_x && ypos == final_y ) return true;
    if(xpos < final_x){
        // add this dist to move faster than just add 1px for each step
        var dist = Math.ceil((final_x-xpos)/10)
        xpos+=dist;
    }else if(xpos > final_x){
        var dist = Math.ceil((xpos-final_x)/10)
        xpos-=dist;
    }
    if(ypos < final_y){
        var dist = Math.ceil((final_y-ypos)/10)
        ypos+=dist;
    }else if(ypos > final_y){
        var dist = Math.ceil((ypos-final_y)/10)
        ypos-=dist;
    }
    Ele.style[xAttr] = xpos + "px";
    Ele.style[yAttr] = ypos+ "px";
    var repeat = `abstractMove("${moveElementID}", ${final_x},${final_y},${interval},"${xAttr}","${yAttr}")`; //ES6 真的很好用
    Ele.movement = setTimeout(repeat,interval);
 }