let side=document.getElementById("side-bar")
function sideOpen()
{
    if(side.style.display=="none"){
        side.style.display="block"
    }
    else{
        side.style.display="none"
    }
}
function btnOpen(a)
{
    let claName="Khulja-sim-sim-"
    claName+=a
    let btn=document.getElementById(claName)

    if(btn.style.display=="none"){
        btn.style.display="block"
    }
    else{
        btn.style.display="none"
    }
}
