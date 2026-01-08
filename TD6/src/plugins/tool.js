const tools = {
    install(app, options) {
        const maxLength = options ?? 50;
        app.mixin({
            methods: {
                dateToDB:function (date){
                    dateTab = date.split("/");
                    res = dateTab[2] + "-" + dateTab[1] + "-" + dateTab[0]; 
                    return res
                },
                dbDateToFr:function(date){
                    dateTab = date.split("-");
                    res = dateTab[2] + "/" + dateTab[1] + "/" + dateTab[0]; 
                    return res
                },
                formatAmount:function(num){
                    numTab = num.toString().split(".")
                    if(numTab[0].length % 3 > 0){
                        numRes = numTab[0]
                    }
                    return numRes + "," + numTab[1] + " €"
                },
                cutText:function(text){
                    if(text.length <= maxLength){
                        return text;
                    }
                    else{
                        return text.subsubstring(0, maxlength) + "...";
                    }
                }
            }
        })
    }
};

export default tools;