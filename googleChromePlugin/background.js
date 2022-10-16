//that file determine actions which extension should make outside of the plugin window
//window object not exists in popup.js, plugin is outside the DOM 
//all external actions should be make by chrome api's


saveWordTranslation = (word) => {
    //alert(word.selectionText)

    getTranslation("en", "pl", word.selectionText)
};

chrome.contextMenus.create({
    title: "Translate and save",
    contexts:["selection"],
    onclick: saveWordTranslation
});

const getTranslation = async (fromLanguage, toLanguage, text) =>{
    //alert([fromLanguage, toLanguage, text]);

    let user = await getUserInfo();

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLanguage}&tl=${toLanguage}&dt=t&q=${text}`)
        .then(response => response.json())
        .then(json => {
            let translatedWord = json[0][0][0];


            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://words.radoszszymon.usermd.net/api/words/save", true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + user.token);

            let data = new FormData();
            data.append('userId', user.id);
            data.append('en', text);
            data.append('pl', translatedWord);

            xhr.send(data);

            xhr.onreadystatechange = async function() {
                if (xhr.readyState == 4) {
                    let response = JSON.parse(readBody(xhr))
                    
                    //invalid credentials
                    if(xhr.status !== 200) {
                        alert(["Cannot save the phrase. Please logout and sign in again.", xhr.status])
                    }
                    //success sign in
                    else{
                        alert(`Saved '${text}'! Translation: ${translatedWord}`)
                    }
                }
            }  
           
            // alert(json[0][0][0])
        });
}

function getUserInfo() {
    return new Promise((resolve) => {
        chrome.storage.local.get(["user"], function(response){
            let user = JSON.parse(JSON.stringify(response.user));
            if(user.email && user.token) {
                resolve({
                    token: user.token,
                    email: user.email,
                    id: user.id
                })
            }
            resolve("")
        });
    })
}

function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}

