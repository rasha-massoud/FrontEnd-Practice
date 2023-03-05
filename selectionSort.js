let send_btn = document.getElementById("send");
send_btn.addEventListener("click", send);

function send() {
    let strOfNumbers = document.getElementById("strOfNumbers").value;
    let data = new FormData();
    data.append("strOfNumbers", strOfNumbers);

    axios({
        "method": "get",
        "url": "http://localhost/APIsUsingPHP/selectionSort.php",
        "data": data
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}