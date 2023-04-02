var btn = document.getElementById('btn');
var inp = document.getElementById('inp');
var boxs = document.querySelectorAll('.box');
var drag = null;

btn.onclick = function(){
    if(inp.value !=''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}<p/>
        `
        inp.value = '';      
    }
    dragItem();
}
function dragItem(){
    var items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
           drag = item;
           item.style.opacity = '0.5'; 
        })
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
         })
         boxs.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault()
                this.style.background = '#090';
                this.style.color = '#090';
            })
            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })
            box.addEventListener('drop', function(){
                this.append(drag);
            })
         })
} )
}