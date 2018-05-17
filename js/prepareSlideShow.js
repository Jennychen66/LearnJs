function prepareSlideShow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;

    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;

    var linklist = document.getElementById("linklist");
    var preview = document.getElementById("preview");
    var superlink = linklist.getElementsByTagName("a");
    // set the left of preview
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px"

    for (let i = 0; i < superlink.length; i++) {
        
        superlink[i].onmouseover = function(){
            var movestep = (-1)*i*250;
            //preview 的 position 进行 移动
            abstractMove("preview",movestep,0,0.01,"left","top");
        }
    }

}
window.onload = prepareSlideShow;