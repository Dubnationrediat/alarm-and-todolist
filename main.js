let mytodo_list=[]
// create
function CreateTask(){
    let task=document.getElementById("add-task").value
    if(task==""){
        alert('please enter a task')
    }else{
        mytodo_list.push(task);
        document.getElementById("add-task").value=""
        ReadAllTask()
    }
}
// read
function ReadAllTask(){
    let data = ""
    for(var i=0;i<mytodo_list.length;i++){
        data+="<tr>"
        data+="<td>"+ mytodo_list[i]+ "</td>";
        data+="<td><button class='btn btn-primary' onClick=UpdateTask(" + i+")>Update</button></td>"
        data+="<td><button class='btn btn-danger' onClick=DeleteTask(" + i+")>Delete</button></td>";
        data+= "</tr>"
    }
    document.getElementById("counter").innerHTML=mytodo_list.length+"Task";
    document.getElementById("mytodo-tasks").innerHTML=data;
}
ReadAllTask()

// update
function UpdateTask(item){
    document.getElementById("UpdateForm").style.display="block"
    document.getElementById("update-task").value=mytodo_list[item]
    document.getElementById("UpdateForm").onsubmit=function(){
        let task= document.getElementById("update-task").value;
        mytodo_list.splice(item,1,task.trim());
        ReadAllTask()
        CloseInput()
    }
}
// Delete
function DeleteTask(item){
    mytodo_list.splice(item,1);
    ReadAllTask()
}

function CloseInput(){
    document.getElementById("UpdateForm").style.display="none"
}

window.addEventListener('beforeunload',(e)=>{
 e.preventDefault();
 let confirmMessage = "are you sure to reload? you will be loosing all data if you reload"

 e.returnValue=confirmMessage;
 return confirmMessage
})



const currentTime= document.querySelector("digitalClock");
content= document.querySelector(".content")
selectMenu=document.querySelectorAll("select")
setAlarmBtn=document.querySelector('button')

let alarmTime,isAlarmSet
ringtone  = new Audio(files/ringtone.mp3)
for (let i = 12; i>0; i--) {
    i=i<10?`0${i}`: i
    let option = `<option value="${i}>${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
    
}