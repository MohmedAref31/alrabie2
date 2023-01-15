let salary = document.getElementById("salary");
let months = document.getElementById("months");
let btn = document.getElementById("sub");
let table = document.getElementById("table");
// console.log(salary,months, btn, table)

btn.onclick= function (){
    if(salary.value =="" || months.value == ""){
     alert("اكتب السعر والشهور")
    }else{
        let z = (months.value * 0.025 +1 ) * salary.value;
        table.innerHTML =`
        <tr>
        <td>${months.value}</td>
        <td>${parseFloat(z).toFixed(4)}</td>
        <td>${parseFloat(z/months.value).toFixed(2)}</td>
    </tr>
        `
    }
    console.log(salary.value,months.value)
   };

    
    