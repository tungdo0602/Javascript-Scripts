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
