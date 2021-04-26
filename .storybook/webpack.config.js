const path = require("path");

module.exports = {
    module : {
        rules : [
            {
                test : /\.scss$/ ,
                loaders : ["sass-loader"],//sass구문을 css로 변환
                include : path.resolve(__dirname, "../") 
            }
        ]
    }
};