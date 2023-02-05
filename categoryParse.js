function getAllCategory(response) {
  var arr = JSON.parse(response);
  var i, j;
  var categoryList = new Array();
  var newCategoryList = new Array();
  var newCategoryListSecond = new Array();
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].category.length; j++) {
      categoryList.push(arr[i].category[j]);
    }
  }
  var unique = categoryList.filter((v, i, a) => a.indexOf(v) === i);
  var array = new Array();
  for (i = 0; i < unique.length; i++) {
    array.push(unique[i].split("/"));
    array[i].shift();
  }
  for(i =0; i<array.length;i++){
    newCategoryListSecond.push(array[i][1]);
    newCategoryList.push(array[i][0]);
  }
  var uniqueNew = newCategoryList.filter((v,i,a) => a.indexOf(v) === i);
  uniqueNewSecond = newCategoryListSecond.filter((v,i,a) => a.indexOf(v) === i);
  responsee = response;
  var out = `<div class="menu"><button onclick="getAllContents(responsee)">Home</button>`;

  for (i = 0; i < uniqueNew.length; i++) {
    out += `<button onclick="myFunction(this,uniqueNewSecond)">${uniqueNew[i]}</button>`;
  }
  out += `</div>`;
  document.getElementById("menu").innerHTML = out;
}

function myFunction(categoryName,uniqueNewSecond){
  document.getElementById("demo").innerHTML = "";
  
  for(var i = 0 ; i<uniqueNewSecond.length;i++){
    dataAccess.ContentCategory(categoryName,uniqueNewSecond[i]);
  }
}



