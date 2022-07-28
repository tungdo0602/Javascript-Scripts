function blockHttpRequest(uri){
    if (!XMLHttpRequest_setRequestHeader){
        var XMLHttpRequest_setRequestHeader = XMLHttpRequest.prototype.setRequestHeader
    }
    XMLHttpRequest.prototype.setRequestHeader = (_,t)=>{
        if(t.includes(uri))return
        XMLHttpRequest_setRequestHeader.apply(this, arguments)
    }
}
