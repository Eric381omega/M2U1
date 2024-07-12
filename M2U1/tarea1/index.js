function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
}