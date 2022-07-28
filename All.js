function infiniteStack(n){
    if(typeof n=='string'){
        window[n]={}
        if(window[n][n]){
            window[n]
        }else{
            window[n][n]=window[n]
        }
    }else{
        throw new TypeError('Value must be string')
    }
}
function blockHttpRequest(uri){
    if (!XMLHttpRequest_setRequestHeader){
        var XMLHttpRequest_setRequestHeader = XMLHttpRequest.prototype.setRequestHeader
    }
    XMLHttpRequest.prototype.setRequestHeader = (_,t)=>{
        if(t.includes(uri))return
        XMLHttpRequest_setRequestHeader.apply(this, arguments)
    }
}
function clearAllTimeout(){
    for (var i = 0 ; i < setTimeout(";"); i++) {
        clearTimeout(i); 
    }
}
function clearAllInterval(){
    for (var i = 0 ; i < setInterval(";"); i++) {
        clearInterval(i); 
    }
}
Math.random = function random(min,max,raw=false){
    if(raw){
        return Math.random() * (max - min + 1) / 1 + min;
    }else{
        return Math.floor(Math.random() * (max - min + 1) / 1 + min);
    }
}
async function uploadFile(){
    return new Promise(function(resolve){
    var a = document.createElement("input")
    a.type = 'file'
    a.click()
    a.onchange = function(){resolve(a.files[0])}
    })
}
