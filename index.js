function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  const children = grandNode.querySelectorAll('div');
  return children[children.length-1]
}
function increaseRankBy(n) {
  const rankings = document.querySelectorAll('.ranked-list li')
  Array.prototype.map.call( rankings, function(i){
    i.innerHTML = parseInt(i.innerHTML) + n
  });
}
