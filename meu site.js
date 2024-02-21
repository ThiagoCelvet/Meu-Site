const url = "https://www.youtube.com/watch?v=WBtysgBsCA0"
const btn = document.querySelector('#aceitou')
function openInNewTab(url) {
  const win = window.open(url, 'blank')
  win.focus()  
}

btn.addEventListener('click', ()  => {
    openInNewTab(url)
})

function sim(){
    alert("Você aceitou :)")
}

function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.top = Geraposição(10, 90);
    btn.style.right = Geraposição(10, 90);
    console.log("ksksks")
}

function Geraposição(min, max){
    return (Math.random() * (max - min) + min) + '%';
}