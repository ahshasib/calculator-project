function deletme(){
  document.getElementById("myresult").value = "";
}


function calculator(newvalue){
  document.getElementById("myresult").value += newvalue;
}

function hasib(){
  document.getElementById("myresult").value ="It was created by HASIB";
}



function result(){
  let a = document.getElementById("myresult").value;
  let b = eval(a);
  document.getElementById("myresult").value = b;
}