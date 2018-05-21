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
  for (let i = 0; i < lis.length; i++){
    debugger
    return lis[i].getElementsByTagName('li')[i].innerHTML = parseInt(lis[i].getElementsByTagName('li')[i].innerHTML) * n
  }
}
