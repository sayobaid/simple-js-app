function addNewTodo()
{
    let title=document.getElementById("newtodotitle").value;
    
    let content=document.getElementById("newtodocontent").value;
    if(title===""||content==="")
    {
        alert("Please add title and content")
        return;
    }
    let alltodo=document.getElementById("alltodo");
    console.log(alltodo)
    alltodo.innerHTML+="<div id='todo'><span><h3>"+title+"</h3></span><br><span>"+content+"</span><br><input type='checkbox' onclick='trueopp(this)'><button onclick='deletetodo(this)'>Delete</button></div>";
    console.log(title+":"+content)
    document.getElementById("newtodotitle").value="";
    document.getElementById("newtodocontent").value="";

}


function trueopp(element)
{
    if(element.checked)
    {
        element.parentElement.style="background-color:green"
    }
    else
    {
        element.parentElement.style="background-color:red"
    }
    
}
function deletetodo(element)
{
    element.parentElement.remove();


}