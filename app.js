localStorage.setItem("bar", "hidden");

function sitebar(bar) {
  let burger = localStorage.getItem(bar);
  if (burger == "flex") {
    document.getElementById(bar).style.width = "0";
    document.getElementById(bar).style.paddingLeft = "0";
    document.getElementById("change1").style.position = "static"
    document.getElementById("change1").style.rotate = "0deg"
    document.getElementById("change2").style.opacity = "1"
    document.getElementById("change3").style.position = "static"
    document.getElementById("change3").style.rotate = "0deg"
    localStorage.setItem(bar, "hidden");
  } else {
    document.getElementById(bar).style.width = "350px";
    document.getElementById(bar).style.paddingLeft = "56px";
    document.getElementById("change1").style.position = "absolute"
    document.getElementById("change1").style.zIndex = "10"
    document.getElementById("change1").style.rotate = "45deg"
    document.getElementById("change2").style.opacity = "0"
    document.getElementById("change3").style.position = "absolute"
    document.getElementById("change3").style.zIndex = "10"
    document.getElementById("change3").style.rotate = "-45deg"
    localStorage.setItem(bar, "flex");
  }
  document.getElementById(bar).style.transition = "300ms";
}
