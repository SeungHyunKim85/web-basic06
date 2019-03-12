// 덧셈
var number1 = prompt("숫자를 입력하세요", "");
var number2 = prompt("숫자를 입력하세요", "");

number1 = Number(number1);
number2 = Number(number2);
number3 = Number(number3);

if (number1 !=null){
    document.getElementById("number1").innerHTML =
    number1;
}
if (number2 !=null){
    document.getElementById("number2").innerHTML =
    number2;
}
var number3 = Number(number1)+ Number(number2);
    document.write(number3);

var person = prompt("what is your name?", "Put your name")



// BMI 구하기
    var height = prompt ("키를 입력해주세요", "");
    var weight = prompt ("몸무게를 입력해주세요", "");

    weight = Number(weight);
    height = Number(height) / 100;

    var bmi = weight / height ** 2;
    
    if (weight != null){
        document.getElementById("bmi").innerHTML =
        bmi;
    }
    if (bmi < 18.5){
        document.write("당신은 저체중입니다.")
    } else if (bmi < 23){
        document.write("당신은 정상입니다")
    } else if (bmi < 25){
        document.write("당신은 과체중입니다")
    } else if (bmi < 30){
        document.write("당신은 비만입니다")
    } else {
        document.write("당신은 고도비만 입니다")
    }



// 시간별 그리딩
    var time = prompt("지금 시간은?", "")

    if (time <= 12) {
        greeting = "Good Morning";
    } else if (time >= 12 && time <= 18){
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    // alert(greeting);
    document.write(greeting);



// 점수
    var score = prompt ('점수를 입력해주세요');
        if (score >= 90 || score <= 100){
            // A학점 90~100
            alert ('당신은 A입니다')
        } else if (score >= 80 || score <= 89){
            // B학점 80~89
            alert ('당신은 B입니다')
        } else if (score >= 70 || score <= 79){
            //  C학점 70~79
            alert ('당신은 C입니다')
        }  else if (score >= 60 || score <= 69){
            //  D학점 60~69
            alert ('당신은 D입니다')
        }  else {
            // F학점 0~59
            alert ('당신은 F입니다')
        }



// 구구단 출력
function gugu(){
    var i = prompt ("몇단을 출력할까요?");
    var gugu = Number(i);
    for (j=1; j <=9; j++){
        document.write(i + "*" + j + "=" + i*j + "<br>");
        }
    } 
 


// 연습
for ([초기화];[조건문];[증감식]) {
}
     1~50 출력하는 프로그램
    for (i=100;i>=51;--i){
        console.log(i)
    }

    1~100까지의 정수들 중에 홀수들의 합을 구해 출력
    total = 0;
    for (i=1; i<=100; i++){
        if (i%2!=0){
            total += i;
            // total - total = i;
        }
    }console.log(i)
        
    total = 0;
    total (i=1; i<=100; i+=2){
        total += i;
        //  total = total + i;
    }

        i = 0;
        while(i < 100) {
            console.log("hi");
            break; 
        }
        while (true) {
            console.log("메뉴"); 
            console.log("1. 숫자 입력");
            console.log("2. 문자 입력");
            menu = prompt ("메뉴를 선택", "1");
            if (menu =="1"){
                console.log("숫자 입력");
            } else if (menu =="2"){
                console.log("문자 입력");

            } else if (menu == "3"{
                console.log("종료")
            })
        }