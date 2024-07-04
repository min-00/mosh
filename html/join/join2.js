// 필수입력항목

// 회원가입 유효성 검사 주의점
// 이름에는 글자수 제한을 넣지 말 것(외국인 또는 이름 긴 사람이 존재하기 때문)
function join_form_check() {
    const login = document.getElementById("login")
    const pwd = document.getElementById("pwd")
    const pwd_check = document.getElementById("pwd_check")
    const u_name = document.getElementById("user_name")
    const user_birth = document.getElementById("user_birth")
    const user_number = document.getElementById("user_number")
    const terms = document.getElementById("terms")
    const terms2 = document.getElementById("terms2")

    if (!login.value) {//(!u_name.value) 입력하지 않음 | (u_name.val) 입력했다면
        alert("아이디를 입력하세요")
        login.focus(); //이름 입력칸으로 포커스됨
        return false; //제출되지 않음(필수를 작성하지 않았을 경우 제출페이지로 넘어가지 않게) | false -> 이 하단 문장은 기능하지 않도록함 
    }
    let id_len = login.value.length;
    if (id_len < 4 || id_len > 20) {
        alert("4 ~ 20자의 영문, 숫자만 사용해주세요.")
        login.focus();
        return false;
    }

    if (!pwd.value) {
        alert("비밀번호를 입력하세요")
        pwd.focus();
        return false;
    }
    let pwd_len = pwd.value.length;
    if (pwd_len < 4 || pwd_len > 20) {
        alert("8~16자리/영문 대소문자, 숫자, 특수문자 조합만 사용해주세요.")
        pwd.focus();
        return false;
    }
    if (!pwd_check.value) {
        alert("8~16자리/영문 대소문자, 숫자, 특수문자 조합만 사용해주세요.")
        pwd_check.focus();
        return false;
    }
    if (pwd.value !== pwd_check.value) {
        alert("비밀번호 확인이 비밀번호와 일치하지 않습니다.")
        pwd_check.focus();
        return false;
    }

    if (!pwd_check.value) {
        alert("비밀번호 확인을 입력하세요")
        pwd_check.focus();
        return false;
    }
    if (!u_name.value) {
        alert("이름을 입력하세요")
        u_name.focus();
        return false;
    }
    if (!user_birth.value) {
        alert("생년월일을 입력하세요")
        user_birth.focus();
        return false;
    }
    if (!user_number.value) {
        alert("전화번호를 입력하세요")
        user_number.focus();
        return false;
    }

    const reg = / *[0-9]+$/g;
    if (!reg.test(user_number.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.")
        terms2.focus();
        return false;
    }

    //정규식이 들어가면 필수 항목으로 전환됨
    //이걸 막기 위해선 if가 값이 있을 때에만 작동할 수 있도록 설정 

    // if(user_number.value){
    //     if(!reg.test(user_number.value)){
    //         alert("전화번호는 숫자만 입력할 수 있습니다.")
    //         terms2.focus();
    //         return false;
    //     }
    // }

    if (!terms.checked) {
        alert("[필수] 만 14세 이상입니다.에 약관동의가 필요합니다.")
        terms.focus;
        return false;
    }

    if (!terms2.value) {
        alert("[필수] 약관에 동의하세요")
        terms2.focus();
        return false;
    }

}

function change_email() {
    let u_email_input = document.getElementById("user_email2")
    let user_email_list = document.getElementById("user_email_list")

    //undefind가 나왔던 이유 index에 i를 소문자로 써서
    let idx = user_email_list.options.selectedIndex;
    // console.log(idx);

    let selected = user_email_list.options[idx].value;
    // console.log(selected)
    //함수 이름 잘 확인할 것 

    u_email_input.value = selected

    if (selected == "") {
        u_email_input.readOnly = false;
        u_email_input.focus()
    } else {
        u_email_input.readOnly = true;
    }
}

function search_id() {
    //window.open("팝업될 문서의 URL", "팝업될 문서의 이름", "옵션(위치, 크기,bar표시 등등)")
    // a 는 팝업창을 하나만 띄울 때 사용
    window.open("./html/id.html", "a", "width=550px, height=500px, left=1000, top=300")
}

function search_add() {
    window.open("./html/add.html", "b", "width=550px, height=500px, left=1200, top=300")
}


     function Postcode_button() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("user_address_basic").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("user_address_detail").focus();
            }
        }).open();
    }

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#top-btn').fadeIn();
            } else {
                $('#top-btn').fadeOut();
            }
        });

        $('#top-btn').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

    });