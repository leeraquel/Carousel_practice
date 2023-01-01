const ImgSrc = ["https://i.imgur.com/vRxIGQc.jpg","https://i.imgur.com/Nb0cKVi.jpg","https://i.imgur.com/dvEBmwc.jpg","https://i.imgur.com/z3lXcml.jpg","https://i.imgur.com/3ozKqnL.jpg"];
const getImage = document.querySelector("img");
const nextbutton = document.querySelector(".right");
const beforbutton = document.querySelector(".left");
const dots = document.querySelectorAll("li");


let i=0;
  function next(){
    i++;
    if(i>4){
      i=0;
    }
    getImage.src=ImgSrc[i];
  };
  function before(){
    i--;
    if(i<0){
      i=4;
    }
    getImage.src=ImgSrc[i];
  }
nextbutton.addEventListener("click", next);
beforbutton.addEventListener("click", before);


function dot(n){
  dots[n].addEventListener("click", function change(){
    i = n;
    return getImage.src=ImgSrc[n]
  });
};

for(var j=0; j<5; j++){
  dot(j);
};


/*
dots[0].addEventListener("click", function change(){
  i = 0;
  return getImage.src=ImgSrc[0]
})
dots[1].addEventListener("click", function change(){
  i = 1;
  return getImage.src=ImgSrc[1]
})
*/
