function modal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.transition = "all 2s";
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Work on this one?
function navHere() {
 let mynav = document.getElementById("navContainer");
  
 mynav.style.display = "flex";
 mynav.style.justifyContent = "center";
  mynav.innerHTML = "Hey Nick";
}

function getModals() {
  let multiModals = document.querySelectorAll(".multiModal");
 
  for(let i = 0; i < multiModals.length; i++)  {
    multiModals[i].style.display = "flex";
     multiModals[i].style.flexDirection = "column";
    multiModals[i].style.justifyContent = "center";
    multiModals[0].style.justifyContent = "end";
    multiModals[2].style.justifyContent = "end";
    multiModals[0].style.left = "50%";
    multiModals[2].style.left = "25%";
  }

}

function reset() {
  let multiModals = document.querySelectorAll(".multiModal");
  
    for(let i = 0; i < multiModals.length; i++)  {
      multiModals[i].style.display = "";
    }
}


