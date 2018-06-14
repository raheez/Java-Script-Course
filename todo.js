const mytodo = []

mytodo.unshift('learn js')
mytodo.unshift('learn dance')
mytodo.unshift('live life')

for(let i =0;i<mytodo.length;i++){
    // console.log(`your todo list is :${i+1} ${mytodo[i]}`)
}

mytodo.forEach(function(todo,index){
// console.log(`${index+1} ${todo}`)
})


let videoObject = {
    title:'loops in javascript',
    author:'hitesh',
    length:'14',
    description:'long video'
}
console.log(videoObject.author);
