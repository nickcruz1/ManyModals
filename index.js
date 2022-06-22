function modal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.transition = "all 2s";
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

function getModals() {
  let manyModals = document.getElementsByClassName("m");
 
  for(let i = 0; i < manyModals.length; i++)  {
    manyModals[i].style.backgroundColor = "red" 
    manyModals[i].innerHTML = "I am now red";
    manyModals[i].style.marginTop = "10px";
    manyModals[i].style.marginBottom = "10px";
    
    manyModals[2].style.marginBottom = "50px";
    manyModals[2].style.backgroundColor = "green";
    manyModals[2].innerHTML = "I am number 2";
    manyModals[2].style.transition = "5s";
    manyModals[2].style.transform = "rotate(50deg)";
  
    
    
    manyModals[3].style.marginLeft = "50px";
    manyModals[3].innerHTML = "Three is me";
    manyModals[3].style.backgroundColor = "blue";
    manyModals[3].style.transform = "rotate(-50deg)";
    manyModals[3].style.transition = "5s";
  
  }

  
}
