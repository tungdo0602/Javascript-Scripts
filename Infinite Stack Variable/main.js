function infiniteStack(n){
    if(typeof n!=='object'){
        window[n]={}
        if(window[n][n]){
            window[n]
        }else{
            window[n][n]=window[n]
        }
    }
}
