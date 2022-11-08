module.exports = {
	//部署目录是的基本url
    publicPath:"",
    //build是构建文件的目录
    outputDir:'dist',
    //build是放置生成的静态资源(css js img)的目录
    assetsDir:'static',
    //指定生成的index.html
    indexPath:'index.html',
    //设置代理请求
    devServer:{
        proxy:{
        	'/api':{
        		target:'http://localhost:3000',//指向服务端地址
        		ws:true, //是否使用websockets
        		changeOrigin:true,//是否跨域
                pathRewrite:{   //路径重写
                    "^/api":"http://localhost:3000"
                }
        	}
        }
    }
}