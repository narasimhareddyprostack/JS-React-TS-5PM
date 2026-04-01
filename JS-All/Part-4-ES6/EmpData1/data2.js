let employees=[
    {eid:101,ename:"Rahul",esal:45000.45},
    {eid:102,ename:"Sonia",esal:55000.45},
    {eid:103,ename:"Priyanka",esal:65000.45},
    {eid:104,ename:"Modi",esal:75000.45},
    {eid:105,ename:"Amith",esal:85000.45},
    {eid:106,ename:"DK",esal:95000.45},
]
//write script to dipslay above employee data in html table.
function displayEmpData(){
   let rows="";
   for(let emp of employees){
        rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                    </tr>`
   }
   document.getElementsByTagName('tbody')[0].innerHTML=rows
   //document.getElementsByTagName('tbody')[0].innerHTML="GE"
}