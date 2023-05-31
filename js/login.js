function validate(){
    // alert("OK");
    //Lấy đối tượng cần tương tác thông qua id
    let username = document.getElementById("username");
    //Lấy các thuộc tính của đối tượng
    if(username.value == ""){
        username.style.backgroundColor = "yellow";
        alert("Bạn phải nhập username!");
    }
    else{
        username.style.backgroundColor = "white";
    }
    //Lấy đối tượng cần tương tác thông qua selector
    let password = document.querySelector("#password");
    let passError = document.querySelector("#pass-error");
    if(password.value.length < 6){
        //Thay đổi nội dung bên trong đối tượng
        passError.innerHTML = "Mật khẩu tối thiểu 6 ký tự!";
        //Thay đổi CSS (màu chữ)
        passError.style.color = "red";
    }
    else{
        passError.innerHTML = "";
    }
    //Kiểm tra ô remember me
    let remember = document.querySelector("#remember");
    console.log(remember.checked)
}

 //Gán hàm xử lý sự kiện cho đối tượng
 let cancelButton = document.querySelector(".cancelbtn");
 cancelButton.addEventListener("click",function(){
     alert("Bạn hủy đăng nhập!!!")
 })