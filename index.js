var xhr = new XMLHttpRequest();
var ipUrl = "https://ipapi.co/json/";

xhr.open('GET',ipUrl,true);
xhr.send();

    
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
            
        if (response.region_code == "US") {
            window.location.replace("https://google.com/")
        };
        if (response.region_code == "CA") {
            window.location.replace("https://google.ca/")
        };
            
        console.log(response);
        
        var Ip = document.getElementById("ip");
        
        Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")"
        console.log('你的'+response.version+'地址为:'+response.ip)
        console.log('IP位于：'+response.country+" "+response.city)
    }
}
































/**try {
    var ipUrl = "http://ip-api.com/json/?fields=66846719";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.response);
        
            if (response.status !== 'success') {
                console.log("url连接成功，但"+response.message);
                return
            };
        
    
            if (response.countryCode == "US") {
                window.location.replace("https://google.com/")
            };
            if (response.countryCode == "CA") {
                window.location.replace("https://google.ca/")
            };
            console.log(response);
        
            var Ip = document.getElementById("ip");
        
            Ip.textContent = '当前IP为:'+response.query;
            console.log('你的IP为:'+response.query);
            console.log('IP位于：'+response.country+" "+response.regionName);
        }
    }

} catch (error) {
    xhr.onerror = function () {
        console.error('connect time out');
    
        var ipUrl = "https://ipapi.co/json/";
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
            
                if (response.region_code == "US") {
                    window.location.replace("https://google.com/")
                };
                if (response.region_code == "CA") {
                    window.location.replace("https://google.ca/")
                };
            
                console.log(response);
        
                var Ip = document.getElementById("ip");
        
                Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")"
                console.log('你的'+response.version+'地址为:'+response.ip)
                console.log('IP位于：'+response.country+" "+response.city)
            }
        }
    }
}
xhr.open('GET',ipUrl,true);
xhr.send();*/