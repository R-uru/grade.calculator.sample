window.onload = function start(){
  //getting values
  var math = prompt("Math Grade:", "93");
  var eng = prompt("English Grade:", "91");
  var sci = prompt("Science Grade:", "94");
  var fil = prompt("Filipino Grade:", "90");
  var ict = prompt("ICT Grade:", "98");
  //Applying
  document.getElementById("math-progress").innerHTML = math;
  document.getElementById("english-progress").innerHTML = eng;
  document.getElementById("science-progress").innerHTML = sci;
  document.getElementById("filipino-progress").innerHTML = fil;
  document.getElementById("ict-progress").innerHTML = ict;
  //progress
  document.getElementById("math-progress").style.width = math+"%";
  document.getElementById("english-progress").style.width = eng+"%";
  document.getElementById("science-progress").style.width = sci+"%";
  document.getElementById("filipino-progress").style.width = fil+"%";
  document.getElementById("ict-progress").style.width = ict+"%";
  //parseFloat or parseInt
  var math1 = parseInt(math);
  var eng1 = parseInt(eng);
  var sci1 = parseInt(sci);
  var fil1 = parseInt(fil);
  var ict1 = parseInt(ict);
  //average
  var calcu = (math1+eng1+sci1+fil1+ict1)/5;
  document.getElementById("average").innerHTML = "Average "+calcu;
}
start();