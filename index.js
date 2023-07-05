var ipUrl = "http://ip-api.com/json";
var xhr = new XMLHttpRequest();
xhr.open('GET',ipUrl,true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        console.log(response);
        var Ip = document.getElementById("ip")
        ip.textContent = '当前IP为:'+response.query
        console.log('你的IP为:'+response.query)
        console.log('IP位于：'+response.country+" "+response.regionName)
    }
}
xhr.onerror = function () {
    console.error('connect time out');
}
