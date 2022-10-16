document.addEventListener("DOMContentLoaded", async () => {
    let loginBtn = document.getElementById("submit");
    let logoutBtn = document.getElementById('logoutBtn');

    let loader = document.getElementById("loaderContainer");
    let userInfo = await getUserInfo();

    if(!userInfo.token) {
        showForm();

        //login click listener
        loginBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if(email && password) {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "http://words.radoszszymon.usermd.net/api/login", true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({
                    email: email,
                    password: password
                }));
    
                //loader start
                loader.style.display = "block"
    
                xhr.onreadystatechange = async function() {
                    if (xhr.readyState == 4) {
                        let response = JSON.parse(readBody(xhr))
                        // alert(response)
                        
                        //invalid credentials
                        if(xhr.status !== 200) {
                            await handleLogout();
    
                            handleSetAlert(response.result, "danger")
    
                            //loader stop
                            loader.style.display = "none"
                        }
                        //success sign in
                        else{
                            let userToken = response.result.token;
                            let userEmail = response.result.user.email;
                            let userId = response.result.user.id;

                            //loader stop
                            loader.style.display = "none"
    
                            await handleSetUser(userToken, userEmail, userId)

                            showLogout();

                            document.getElementById('userEmail').innerHTML = `User: ${userEmail} ${userId}`;
                            logoutBtn.addEventListener("click", async function() {
                                await handleLogout();
                            })
                        }
                    }
                }  
            } else {
                handleSetAlert("Prosimy podać nazwę i hasło", "danger")
            }
        });
    } else{
        showLogout();
        document.getElementById('userEmail').innerHTML = `User: ${userInfo.email} ${userInfo.id}`;
        logoutBtn.addEventListener("click", async function() {
            await handleLogout();
        })
    }

    function handleSetUser(token, email, userId) {
        return new Promise((resolve) => {
            chrome.storage.local.set({ "user" : {
                "token": token,
                "email": email,
                "id": userId
            }}, function(){
                document.getElementById('userEmail').innerHTML = `User: ${email} ${userId}`;
                handleSetAlert("Sucessfully logged in", "success")
                showLogout();
            });

            resolve(token);
        })
    }

    function handleSetAlert(message, type) {
        document.getElementById('alert').innerHTML = message;
        if(type === "danger") {
            document.getElementById('alert').style.color = "red"
        }else {
            document.getElementById('alert').style.color = "green"
        }

        setTimeout(() => {
            document.getElementById('alert').innerHTML = ""
        }, 2000)
    }

    function handleLogout() {
        return new Promise((resolve) => {
            chrome.storage.local.set({ "user": {} });
            showForm();
            resolve("token clear")
        });
    }

    function showForm() {
        document.getElementById('formLogin').style.display = 'block';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('userEmail').innerHTML = '';
    }

    function showLogout() {
        document.getElementById('formLogin').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
    }
});