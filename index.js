function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('.target')
}
function deepestChild(){
  const lis = document.querySelector('#grand-node').querySelectorAll("div")
  for(let i = 0; i < lis.length; i++){
    if (i === 3){
      return lis[i]
    }
  }
}

function increaseRankBy(n){

  const lis = document.querySelectorAll('.ranked-list')

  // for (let i = 0; i < lis.length; i++){
  //    lis[i].getElementsByTagName('li')[i].innerHTML = parseInt(lis[i].getElementsByTagName('li')[i].innerHTML) + (n)
  // }
  for(let i = 0; i < lis[0].children.length; i++){
    // debugger
     lis[0].getElementsByTagName('li')[i].innerHTML = parseInt(lis[0].getElementsByTagName('li')[i].innerHTML) + (n)
  }
  for(let i = 0; i < lis[1].children.length; i++){
    lis[1].getElementsByTagName('li')[i].innerHTML = parseInt(lis[1].getElementsByTagName('li')[i].innerHTML) + (n)
  }



}
