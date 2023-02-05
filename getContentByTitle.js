function getModalFunc(response) {
  modal = document.getElementById("myModal");
  modal.style.display = "block";
  modal.addEventListener("click",function(e){
    if(e.target.classList.contains("modal")){
      modal.style.display ="none";
    }else{
      modal.style.display = "block";
    }
  });
  var arr = JSON.parse(response);
  var out = 
          `<div class="modal-content">`
            +`<img src="${arr.poster}">` 
                +`<h1>${arr.title}</h1>`
                  +`<p>${arr.imDbRating}/10 IMDb</p>`
                +`<p>${arr.description}</p>`
          +`</div>`;

  document.getElementById("modalLine").innerHTML = out;
}

