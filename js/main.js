function showAvatar() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  var avatarImg = document.getElementById("show-img");
  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      avatarImg.src = reader.result;
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
}

//Trigger lỗi rỗng
// var required_input = document.querySelectorAll('input[required]')
// console.log(required_input);

// required_input.forEach((item)=> {
//   item.addEventListener("onchange", nullErr(item));
// });

// function nullErr(item) {
//   let helpTextId = item.id + "-errNull";
//   let nullErr = document.getElementById(helpTextId);
//   console.log(nullErr);
//   if (!item.value) {
//     item.setCustomValidity("Không được để trống");
//     nullErr.style.display="inline";
//   } else {
//     item.setCustomValidity("");
//     nullErr.style.display="none";
//   }
// }


// Confirm password
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirmPassword");
var confirm_password_errorText = document.getElementById("error-confirmPassword");

function validatePassword() {
    console.log(confirm_password_errorText.style.display);

  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Mật khẩu chưa khớp");
    confirm_password_errorText.style.display = 'inline';
  } else {
    confirm_password.setCustomValidity("");
   confirm_password_errorText.style.display = 'none';
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
