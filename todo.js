function addt(event){
    event.preventDefault();
    const val=document.getElementsByClassName("inp")[0].value;
    if(val===""){
        alert("⚠️ Enter any task");
        return;
        }
    let row=document.getElementsByClassName("table")[0].insertRow();
   let cel= row.insertCell(0);
    cel.innerHTML = val;
    row.insertCell(1).innerHTML='<button class="check" ">✅</button><button class="del">🗑️</button>';
    row.querySelector(".del").addEventListener('click',function(){row.remove()});
    row.querySelector(".check").addEventListener('click',function(){
        cel.classList.toggle("checked");
    });
    document.getElementsByClassName("inp")[0].value="";
}
document.querySelector(".inp").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addt(event); 
    }
});
