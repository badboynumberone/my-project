import axios from 'axios'
export default function ajax (url,type="GET",data={}) {
    return new Promise(function(resolve,reject){
        let promise;
        if(type ==="GET"){
            let datastr = '';
            for(let key in Object.keys(data) ){
                datastr = key + "=" + data[key] + "&";
            }
            if(datastr !==''){
                datastr=datastr.substr(datastr.lastIndexOf('&'),1);
                url = '?' + datastr;
            }
            // 发送get请求
            promise = axios.get(url);
        }else{
            //发送post请求
            promise = axios.post(url, data)
        }
        promise.then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err)
        })
    });
}