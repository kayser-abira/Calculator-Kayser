function deletedata(){
    document.getElementById('display').value = "";
}

function calculator(Newvalue){
  document.getElementById('display').value  +=Newvalue;
}

function answer(){
   var a = document.getElementById('display').value;

   var b =eval(a);

   document.getElementById('display').value = b;
}