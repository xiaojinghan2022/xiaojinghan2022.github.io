var lang = navigator.language || navigator.userLanguage;
        if(lang.substr(0, 3) == "zh-") location = "./Tianxing/zh-CN";
        else if(lang.substr(0, 2) == "en") location = "./Tianxing/en-US";	
        else location = "./Tianxing";