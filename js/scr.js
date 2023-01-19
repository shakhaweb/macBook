let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let img = document.querySelector('img')
let img1 = "./img/2.png";
let img2 = "./img/1.png";
let p = document.querySelector('.text p')

btn1.onclick = () => {
    img.setAttribute("src", img1);
    space_grey(btn2);
    white(btn1);
    p.innerHTML = "White";
    console.log('hello');
  };

btn2.onclick = () => {
    img.setAttribute("src", img2);
    space_grey(btn1);
    white(btn2); 
    p.innerHTML = "Space Gray";
  };

let space_grey = (btn) => {
    btn.classList.remove("btn1");
    btn.classList.add("btn2");
    btn.style.color = "white";
  };
let white = (btn) => {
    btn.classList.remove("btn1");
    btn.classList.add("btn2");
    btn.style.color = "grey";
  };

let btn = document.querySelectorAll('.cost button')
  btn[1].onclick = () => {
    document.querySelector('h2').innerHTML = `$${1999 + 200}`
  }
  btn[2].onclick = () => {
    document.querySelector('h2').innerHTML = `$${1999 + 600}`
  }

  btn[3].onclick = () => {
    document.querySelector('h2').innerHTML = `$${1999 + 1200}`
  }

let checkbox = document.querySelector('.checkbox')
let link = document.querySelector('link')

checkbox.addEventListener('click',(event) => {
  if (checkbox.classList.contains('on')) {
    checkbox.setAttribute('aria-checked','false');
    link.href = "css/style.css"
  }else{
    checkbox.setAttribute('aria-checked', 'true');
    link.href = "css/main.css"
  }
  checkbox.classList.toggle('on')   
})



