let getmygrade = function(marks,totalmarks){
    let percentage = (marks/totalmarks)*100
    
    let grade = ''

    if(percentage>=90){
        grade = 'A'
    }
    else if(percentage>=80){
        grade = 'B'
    }
    else if(percentage>=70){
        grade = 'C'
    }
    else if(percentage>=60){
        grade = 'D'
    }
    else
        grade = 'E'

        return  `your grade is ${grade}  and percentage is ${percentage}`
}

let yourgrade = getmygrade(60,100)
console.log(yourgrade)