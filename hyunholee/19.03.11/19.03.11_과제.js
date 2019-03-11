// LV 1 과제  
//     + 섭씨 ㅡ>화씨
//     + 화씨ㅡ>섭씨
// =   이전에 변환한 기록이 있으면 해당 기록을 반환

// ex) 37.5 -> 화씨 / 2를 주면 위에값 그대로 반환

//     1 번들어갔다가 2번들어가면 반환,
//     2번들어갔다가 1번가면 기록말소
//     + 상태를 저장할 수 있어야함 (플래그) 변수하나 만들어서 값이 있냐 없냐 undefinded, null

//     1.화씨 섭씨 변환하기:
//     2.섭씨 화씨 변환하기:
//     3.프로그램 종료하기
//     콘솔에 띄우기

// LV2 변환기만 구현하는데, 출력값도 HTML 화면

function temp(){
var cd = 0;
var fd = 0;

while (true) {
    var menu = prompt ("1. 섭씨값을 입력해주세요\n2. 화씨값을 입력해주세요\n3. 종료하기");
    var menu = Number(menu)

    if (menu == 1){
        if (fd !==0) {
            console.log((fd * 9/5)+32);
            fd = 0;
        } else {
        var c_to_f = prompt ("화씨를 입력해주세요");
        c_to_f_num = ((c_to_f * 9/5) + 32);
        cd = c_to_f_num;
        console.log(c_to_f_num);
    }
        
        } else if (menu == 2){
            if (cd !==0){
                console.log((cd - 32) * 5/9);
                cd = 0;
            } else {
            var f_to_c = prompt ("섭씨를 입력해주세요");
            f_to_c_num = ((f_to_c - 32) * 5/9);
            fd = f_to_c_num;
            console.log(f_to_c_num);
            }
        } else if (menu == 3){
            alert ("종료하기");
            break;
        }

}
}
