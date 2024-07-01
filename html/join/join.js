//아이디 유효성 검사

let loginid = document.querySelector('#login');
let login_fail = document.querySelector('.login_fail_message');
let login_suc = document.querySelector('.login_suc_message');

function idCheck(value) {
    return value.length >= 4 && value.length <= 16
}

function onlyNE(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

loginid.onkeyup = function () {
    if (loginid.value.length !== 0) {
        // 영어 또는 숫자 외의 값을 입력했을 경우, 글자 수가 4~12글자가 아닐 경우
        if (idCheck(loginid.value) === false) {
            login_suc.classList.add('hide');
            login_fail.classList.remove('hide');
        }
        else if (onlyNE(loginid.value) === false) {
            login_suc.classList.add('hide');
            login_fail.classList.remove('hide');
        }
        // 조건 모두 만족
        else if (idCheck(loginid.value) || onlyNE(loginid.value)) {
            login_suc.classList.remove('hide');
            login_fail.classList.add('hide');
        }
    } else {
        login_suc.classList.add('hide');
        login_fail.classList.add('hide');
    }
}


let pwd1 = document.querySelector('#pwd');
let pwd2 = document.querySelector('#pwd_check');
let pwd_fail = document.querySelector('.pwd_fail_message');
let pwd_suc = document.querySelector('.pwd_suc_message');


function lengthPwd(value) {
    return value.length >= 8 && value.length <= 16
}

function strongPwd(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}
pwd1.onkeyup = function () {
    // 값을 입력한 경우
    if (pwd1.value.length !== 0) {
        if (lengthPwd(pwd1.value) === false) {
            pwd_suc.classList.add('hide');
            pwd_fail.classList.remove('hide');
        }
        else if (strongPwd(pwd1.value) === false) {
            pwd_suc.classList.add('hide');
            pwd_fail.classList.remove('hide');
        }
         else if (lengthPwd(pwd1.value) || strongPwd(pwd1.value)) {
             pwd_suc.classList.remove('hide');
             pwd_fail.classList.add('hide');
            }
        } else {
            pwd_suc.classList.add('hide');
            pwd_fail.classList.add('hide');
        }
    };
    

    function isMatch(password1, password2) {
        return password1 === password2;
    }

    elInputPasswordRetype.onkeyup = function () {

        // console.log(elInputPasswordRetype.value);
        if (elInputPasswordRetype.value.length !== 0) {
          if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
            elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
          }
          else {
            elMismatchMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
          }
        }
        else {
          elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
        }
      };