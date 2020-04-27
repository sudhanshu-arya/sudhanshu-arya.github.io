var cell = document.getElementsByTagName("td")
var bt = document.getElementsByTagName("button")
var arr = []
while (arr.length < 12) {
    var r = Math.floor(Math.random() * 48);
    if (arr.indexOf(r) === -1) arr.push(r);
}
for (i = 0; i < 12; i++) {
    cell[arr[i]].style.backgroundColor = "gray"
}

function  getIndex(element) {
    return(6*element.closest('tr').rowIndex + element.closest('td').cellIndex);
}

var res=[]
function changecolor() {
    if (this.style.backgroundColor == "gray") {
        this.style.backgroundColor = "whitesmoke"
        res.pop(getIndex(this))
        
    }
    else {
        this.style.backgroundColor = "gray"
        if(res.indexOf(getIndex(this))==-1)
            res.push(getIndex(this))
    }
}

function clear() {
    for (i = 0; i < 48; i++) {
        cell[i].style.backgroundColor = "whitesmoke"
    }
}

function check(){
    ans=true;
    arr.sort(function(a, b){return a - b});
    res.sort(function(a, b){return a - b});
    if(arr.length==res.length){
        for(i=0;i<arr.length;i++){
            if(arr[i]!=res[i])
                ans=false;
                break;
        }
    }
    else{
        ans=false;
    }
    alert(ans?"You won the game":"Please try again")
}

function rel(){
    document.location.reload(true)
}

cell_len = cell.length;
for (i = 0; i < cell_len; i++) {
    cell[i].addEventListener('click', changecolor)
}

bt[0].addEventListener('click', clear);
bt[1].addEventListener('click', check);
bt[2].addEventListener('click', rel);