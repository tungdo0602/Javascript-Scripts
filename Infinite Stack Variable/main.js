function infiniteStack(n){
    if(typeof n=='string'){
        window[n]={}
        if(!window[n][n]){
            window[n][n]=window[n]
        }
    }else{
        throw new TypeError('Value must be string')
    }
}
