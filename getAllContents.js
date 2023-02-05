function getAllContents(response, subCategory) {
  var out = "";
  var arr = JSON.parse(response);
  var i;

  if (subCategory === undefined) {
    document.getElementById("demo").innerHTML = out;
    out += "<div><h1>Tüm Filmler</h1><hr></div>";
    for (i = 0; i < arr.length; i++) {
      out +=
        `<div onclick="dataAccess.getByTitle(this)" class="container">`
        + `<img src="${arr[i].poster}">`
        + `<center>` + `<p>${arr[i].title}</p>` + `</center>`
        + `</div>`;
    }
  } else {
    if (arr.length !== 0) {
      out = `<div><h1>${subCategory}</h1><hr></div>`;
      for (i = 0; i < arr.length; i++) {
        out +=
          `<div onclick="dataAccess.getByTitle(this)" class="container">`
          + `<img src="${arr[i].poster}">`
          + `<center>` + `<p>${arr[i].title}</p>` + `</center>`
          + `</div>`;
      }
    }
  }
  document.getElementById("demo").innerHTML += out;
}

