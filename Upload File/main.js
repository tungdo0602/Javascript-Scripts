async function uploadFile(){
    return new Promise(function(resolve){
    var a = document.createElement("input")
    a.type = 'file'
    a.click()
    a.onchange = function(){resolve(a.files[0])}
    })
}
