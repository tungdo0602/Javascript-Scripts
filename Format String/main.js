function format(...code){
    if (code.length === 1) {
        return `[${code[0]}m`
    } else {
        for (i in code){
            formatList = code.join(";")
        }
        return `[${formatList}m`
    }
}
