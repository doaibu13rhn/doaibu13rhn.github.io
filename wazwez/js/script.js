document.getElementById("button").addEventListener("click", function () {
    alert("on progress til reguler bootcamp i'll to complete this task");
});

document.getElementById("category").style.color = "orange";
document.getElementById("category").style.fontWeight = "600";

var a;
function show_hide() {
    if (a == 1) {
        document.getElementById("finish").style.display = "inline";
        return a = 0;
    }
    else {
        document.getElementById("finish").style.display = "none";
        return a = 1;
    }
}