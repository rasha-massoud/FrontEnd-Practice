let send_btn = document.getElementById("send");
send_btn.addEventListener("click", send);

function send() {
    let mail=document.getElementById("mail").value;
    let password=document.getElementById("password").value;
    let data = new FormData();
    console.log(mail,password);

    data.append("mail",mail);
    data.append("password",password);

    axios({
        "method":"post",
        "url":"http://localhost/APIsUsingPHP/formatValidate.php",
        "data":data
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}