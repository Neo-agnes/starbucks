const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// footer(푸터) 영역 자바스크립트
const thisYear = document.querySelector('.this-year') //.this-year라는 요소를 찾아서 thisYear변수에 할당해줍니다.
// 그 찾은 요소의 내용으로 무엇인가를 추가할 것인데 textContent라는 속성으로 그 요소가 가지고 있는 말 그대로 글자 내용들을 값을 알아내거나 거기에 값을 지정하는 용도로 쓸 수 있습니다.
// 이번엔 =(이퀄)기호로 값을 지정하는데 이곳에는 올해가 몇년도인지에 대한 숫자가 들어가면 됩니다.
// 값을 지정해주는 것은 생성자 함수이자 키워드인 new를 사용하여 대문자 D로 시작하는 Date를 실행하는데 자바스크립트에는 현재 날짜 정보를 가지고 있는 Date라는 객체를 가지고 있습니다.
// 그래서 이 Date라는 객체에서 현재 날짜를 뽑아 낼때 Date객체를 생성자 함수로 실행을 하여 그 안에 들어있는 getFullYear라는 메소드를 실행 해주면 그 메소드에서 현재 년도의 정보가
// 숫자 데이터로 반환이 되게 됩니다. 즉, 이부분에서 올해가 2022년도니까 2022가 나오게 되는것입니다. 그리고 이 현재 년도가 thisYear라는 요소에 글자 내용으로 삽입이 되는것을 알 수 있습니다.
thisYear.textContent = new Date().getFullYear()