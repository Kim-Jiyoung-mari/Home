console.log('====================================== ')
/* 탭 제목과 내용 자바스크립트 알고리즘 정리 */
//1. (초기세팅)
//1-1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//1-2. 탭내용 1 보이기
//1-3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//1-4. 탭제목 1 클래스 적용
const tabC = document.querySelectorAll('.tab_contents > div');
const tabT = document.querySelectorAll('.tab_title a');
console.log(tabC, tabT);
for(let i of tabC){
    function tabCHide (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
        for(let i of tabC) i.style.display = 'none';
    }
}
function tabClsReset(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT) i.classList.remove('active');
}
tabCHide(); /* 탭내용 모두 숨기기 함수 : 호출 */
tabClsReset(); /* 클래스 초기화 함수 : 호출 */

tabC[0].style.display = 'block';
tabT[0].classList.add('active');

//2. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)
// for문 안에서 동시에 사용 하는데 forEach를 사용하고 클릭 이벤트
//2-1. 탭제목 클래스 초기화 
//2-2. 탭제목 클래스 적용(현재 이벤트 대상) 
//2-3. 탭내용 모두 숨기기 
//2-4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스) 
tabT.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        // console.log(target);
        tabClsReset(); // 호출하기만 하면 됨
        target.classList.add('active');//누를 때 클래스를 옮기기
        tabCHide();//탭 내용 숨기기 함수 호출
        tabC[index].style.display = 'block';//탭제목 현재 이벤트 대상의 내용의 인덱스
    })
})
