let todo = {
    meetingDone  :0,
    totalMeetings : 0
}

let addmeetings = function(todo,meetings=0){

    todo.totalMeetings = todo.totalMeetings + meetings 
}

let donemeetings = function(todo,donemeetings=0){
    todo.meetingDone = todo.meetingDone + donemeetings
}

let getsummarymeetings= function(){
    let remainingMeeting = todo.totalMeetings - todo.meetingDone
   
    console.log(`your total no of meetings are ${todo.totalMeetings} and reamining meetings are ${remainingMeeting}`);
}

addmeetings(todo,4)
addmeetings(todo,2)

donemeetings(todo,5)

getsummarymeetings()

