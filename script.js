const inptxt = document.querySelector('#inptxt')
const inpdate = document.querySelector('#inpdate')
const inptime  = document.querySelector('#inptime')
const addbtn = document.querySelector('#addbtn')
const cleartxt = document.querySelector('#cleartxt')
const cleardate = document.querySelector('#cleardate')
const cleartime = document.querySelector('#cleartime')
const tasksarea = document.querySelector('.bottomsite')
const closebtn = document.querySelector('.closebtn')
 




/// evenets 
inptxt.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        if(inptxt.value == '' || inpdate.value == '') {
            alert('goal and deadline must be filled')
        }
        else {
        Addtask()
        ClearText()
        ClearDate()
        ClearTime()
        }
    }
 })
inpdate.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        if(inptxt.value == '' || inpdate.value == '') {
            alert('goal and deadline must be filled')
        }
        else {
        Addtask()
        ClearText()
        ClearDate()
        ClearTime()
        }
    }
})
inptime.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        if(inptxt.value == '' || inpdate.value == '') {
            alert('goal and deadline must be filled')
        }
        else {
        Addtask()
        ClearText()
        ClearDate()
        ClearTime()
        }
    }
 })
            

addbtn.addEventListener('click',function()
 {
     if(inptxt.value == '' || inpdate.value == '') {
         alert('goal and deadline must be filled')
     }
     else {
    Addtask()
    ClearText()
    ClearDate()
    ClearTime()
     }
})
cleartxt.addEventListener('click', function() {
    ClearText()
})
cleardate.addEventListener('click', function() {
    ClearDate()
})
cleartime.addEventListener('click', function() {
    ClearTime()
})

/// functions
let arr =[]
function Addtask() {
    let closebtn = document.querySelector('.closebtn')
    let goal = document.querySelector('#inptxt').value
    let date = document.querySelector('#inpdate').value
    let time = document.querySelector('#inptime').value
    let id = Date.now()
    let newtask = document.createElement('div')
    newtask.className = 'task fade-in'
    newtask.innerHTML = 
    ` 
    <div class="task fade-in">
    <div class="topnote">
        <button class="closebtn" id = "${id}">
        <i class="fas fa-times-circle"></i>
        </button>
    </div>
    <div class="centernote">
        <p>${goal}</p>
    </div>
    <div class="bottomnote">
        <p id="date">${date}</p>
        <p id"time">${time}</P>
    </div>
    </div>
`
tasksarea.appendChild(newtask);

let task = {
    id: id,
    theGoal: goal,
    theDate: date,
    theTime: time
}
arr.push(task)
localStorage.setItem('Tasks' , JSON.stringify(arr))

let uniqueRemoveBtn = document.getElementById(id)
RemoveTask(id,uniqueRemoveBtn,newtask)

}










function ClearText() {
    let inptxt = document.querySelector('#inptxt')
    inptxt.value = ''
}
function ClearDate() {
    let inpdate = document.querySelector('#inpdate')
    inpdate.value = ''
}
function ClearTime() {
    let inptime = document.querySelector('#inptime')
    inptime.value=''
}












function RemoveTask(id,uniqueRemoveBtn,newtask) {
    let tasksarea = document.querySelector('.bottomsite')
    uniqueRemoveBtn.addEventListener('click',function(){
        tasksarea.removeChild(newtask)
        for( let i = 0; i<arr.length; i++) {
            if (arr[i].id == id) {
                arr.splice (i , 1)
            }
        }
        localStorage.setItem('Tasks',JSON.stringify(arr))
    })
}






function ThereIsTasks() {
      if( JSON.parse(localStorage.getItem('Tasks')) != null) {
        arr = JSON.parse(localStorage.getItem('Tasks'))
        for(let i =0; i<arr.length; i++) {
             let newtask = document.createElement('div')
             newtask.className = 'task fade-in'
             newtask.innerHTML = 
            `
            <div class="task fade-in">
            <div class="topnote">
                <button class="closebtn" id = "${arr[i].id}">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
            </div>
            <div class="centernote">
                <p>${arr[i].theGoal}</p>
            </div>
            <div class="bottomnote">
                <p>${arr[i].theDate}</p>
                <p>${arr[i].theTime}</P>
            </div>
            </div>
            
            `
            let tasksarea = document.querySelector('.bottomsite')
            tasksarea.appendChild(newtask)
            let uniqueRemoveBtn = document.getElementById(arr[i].id)
            RemoveTask(arr[i].id,uniqueRemoveBtn,newtask)  
         }
    }
}


ThereIsTasks();