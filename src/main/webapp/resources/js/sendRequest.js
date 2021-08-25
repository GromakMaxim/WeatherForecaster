export default function sendRequest(link, method, async, callback){
    if (link === "" || typeof link !== "string") throw new Error("wrong link!");
    if (typeof method !== "string"){
        if (method.toUpperCase() !== "GET" && method.toUpperCase() !== "POST") throw new Error("only GET and POST methods supported here!");
    }
    if (typeof async !== "boolean") throw new Error("async attr must bu boolean type");


    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");//Internet Explorer ?
    }

    request.open(method, link, async);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let json = JSON.parse(request.responseText);
            //console.log(request.responseText);
            callback(json);
            return json;
        }
    }
    request.onerror = function (){
        return new Error("error occurred while transmitting the request");
    }

    request.onabort = function(){
        return new Error("request was aborted");
    }
}
