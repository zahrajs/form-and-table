var sw=false;
var tbl=document.createElement("table");
tbl.setAttribute("border","2");
tbl.setAttribute("bordercolor","#885573");
var show=document.getElementById("showbox")
var input=document.getElementsByClassName("input");
var row=document.createElement("tr");
var r=0; //number of rows that user import that
function senddata(event)
{ 
 event.preventDefault(); /*this line solve form show but don't work required in html codes
 and inputs filed can be empty!!!  

 /******************table header*************************/
  if(sw==false){
  tbl.insertRow(0);
  row.insertCell(0).innerHTML="name";
  row.insertCell(1).innerHTML="famili";
  row.insertCell(2).innerHTML="age";
  row.insertCell(3).innerHTML="about";
  row.insertCell(4).innerHTML="field";
  row.insertCell(5).innerHTML="interest";
  row.insertCell(6).innerHTML="gender";
  row.insertCell(7).innerHTML="skills";
  tbl.appendChild(row);
  sw=true;
  }
 /********************get input**************************/
  var count=document.getElementById("count").value; //get number of rows that user want to import
  tbl.insertRow();
  if(r<Number(count))  // check number of rows that user import
  { 
    for(var i=0;i<input.length;i++){
    var cell=document.createElement("td");
    cell.innerHTML=document.getElementsByClassName("input")[i].value;
    row.appendChild(cell);
    tbl.appendChild(cell);
    show.appendChild(tbl);
    document.getElementsByClassName("input")[i].value="";
         }
         r+=1; //increment counter r after add row to table 
  }
 }
    
   