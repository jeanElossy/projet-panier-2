window.addEventListener("scroll", scroll);
function scroll(){
  if(window.scrollY > 120){
    document.querySelector("header").classList.add("sticky");
  }
}

document.querySelectorAll(".fa-heart").forEach(element => element.addEventListener("click", changeColor));
function changeColor(){
  this.classList.toggle("fa-heart-color");
}

document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", addArticle));
function addArticle(){
  let quantity = this.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[0].children[1].children[0].children[0];
  quantity.innerText = parseInt(quantity.innerText)+1;
}

document.querySelector(".fa-shopping-cart").addEventListener("click", OpenBasket);
function OpenBasket(){
  document.location.href="pagepanier.html";
}

