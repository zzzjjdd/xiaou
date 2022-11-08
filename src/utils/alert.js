//引入vue
import Vue from 'vue'
const vm = new Vue()

//成功消息提示
export const success = (msg)=>{
    vm.$message({
        message: msg,
        type: 'success'
      });
}

export const successAlert = (msg)=>{
    vm.$message({
        message: msg,
        type: 'success'
      });
}


// 警告消息提示
export const warning = (msg)=>{
    vm.$message({
        message: msg,
        type: 'warning'
      });
}

//错误消息提示
export const error = (msg)=>{
    vm.$message.error(msg);
}

//错误消息提示
export const errorAlert = (msg)=>{
    vm.$message.error(msg);
}