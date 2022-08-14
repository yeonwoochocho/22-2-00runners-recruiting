// document.querySelectorAll('h4').innerHTML = "hi";
// alert("running?");

const curr = new Date();
const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
const krTimediff = 9 * 60 * 60 * 1000;
const krCurr = new Date(utc + krTimediff);

// 로컬 타임존 테스트를 위한 nyTime 코드
// const nyTimediff =  -5 * 60 * 60 * 1000;
// const nyCurr = new Date(utc + nyTimediff);

//날짜 차이 계산하기
const closingTime = new Date("2022/08/24 18:00:00");
console.log("closingTime:" + closingTime);
console.log("krCurr:" + krCurr);

const timeLeft = (closingTime - krCurr);
const timeLeftMin = timeLeft / (60 * 1000); //마감까지 남은 분
const timeLeftHr = timeLeft / (60 * 60 * 1000);
const timeLeftDate = timeLeft / (24 * 60 * 60 * 1000);

let timeLeftMsg = "";

if (timeLeftDate >= 3){ //72시간 이상 남았을 때
    timeLeftMsg = `${parseInt(timeLeftDate)}일`;
} else {
    if (timeLeftDate >= 1){ //24시간 이상 남았을 때
       timeLeftMsg = `${parseInt(timeLeftDate)}일 ${parseInt(timeLeftHr % 24)}시간`;
    } else {
        if (timeLeft > 0){ //신청 마감 ms 전일 때
            timeLeftMsg = `${parseInt(timeLeftHr)}시간 ${parseInt(timeLeftMin % 60)}분`;
        } else { //신청 마감된 경우
            timeLeftMsg =  "0초 ";
        }
    }
}



console.log(timeLeftMsg);

let timeLeftEcho = `서두르세요! 가입 신청 마감이 <br> ${timeLeftMsg} 남았습니다.`;

document.getElementById('timeLeftMsg').innerHTML = timeLeftEcho;

//******디데이 계산 */

let dDayMsg = "";
const dDayNum = closingTime.getDate() - krCurr.getDate() ;

if (dDayNum >= 0){
    dDayMsg = `마감 D-${dDayNum}`;
} else {
    dDayMsg = "지원하기";
}

console.log(dDayMsg);

document.getElementById('dDayMsg').innerHTML = dDayMsg;