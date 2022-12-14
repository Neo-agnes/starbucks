//뱃지부분영역
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){ //윈도우 객체라는것은 프로젝트 화면을 의미하는것이고, 사용자가 그 화면을 스크롤 할때 어떠한 함수를 실행하는데
  // 그 함수를 적게 실행하기 위해서 throttle(쓰로틀)이라는 로데쉬에서 제공하는 기능도 도입을 하여 적용을 했습니다 그리고 이전에 확인한 대로
  console.log(window.scrollY);
  if (window.scrollY > 500) { // 스크롤이 500px이 넘어가면 뱃지에 헤더에 들어있는 뱃지부분을 숨기게 처리를 해놨는데 그것이 숨겨질때 우측하단에 to-top이라는 id값을 가지는
    // 그 버튼은 이제 나타나주어야 하기때문에 배지 숨기기가 끝나는 부분에 버튼이 보여지게 해야합니다. 그리고 반대로 배지가 보이는 단계가 되면 버튼을 숨겨 주어야 하니 밑에 버튼을
    // 버튼 숨기는 코드를 작성 해줍니다.
    // 배지 숨기기
    //badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // ScrollTo 추가 영역
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 //요소가 둥둥 떠있는 애니메이션을 만들기 위해서 사용했었는데 이부분은 이동과 관련된 옵션입니다.
    });
  } else {
    //badgeEl.style.display = 'block';
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // ScrollTo 추가영역
    // 버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100 //요소가 둥둥 떠있는 애니메이션을 만들기 위해서 사용했었는데 이부분은 이동과 관련된 옵션입니다.
      // 즉, x축의 이동값을 추가하는데 버튼이 숨어질 수 있도록 오른쪽으로 100px지점으로 이동하게 만들어주고 버튼을 다시 보이게 하려면 이 내용의 기본값이 되도록 만들어야 합니다.
      // 버튼 보이기 부분으로 올라가서 x의 값을 원래 위치인 0으로 바꿔 줍니다. 그렇게 하면 버튼이 보일때는 그요소의 원래 위치 버튼이 숨겨질때는 그 요소가 오른쪽으로 100px지점으로
      // 이동 하게 되는 것입니다.
    }); //gsap의 to라는 메소드를 실행하여 애니메이션을 제어하고자 하는 그 요소를 명시해줍니다. 기존에는 badge라는 요소를 직접 찾아서 badgeEl라는 변수에 담아서
    // 그것을 gsap.to에 첫번째 인수, 즉, 요소를 사용하는 그부분에 삽입을 해주었지만 gsap이라는 자바스크립트 라이브러리는 요소를 직접적으로 찾아서 넣어주면 충분히 고마워 하지만
  }// 사실 css선택자만 적어도 gsap의 to라는 메소드가 해당하는 요소를 자동으로 찾아 줄 수 있습니다.
}, 300));
// _.throttle(함수, 시간)

// ScrollTo 영역
// const toTopEl = document.querySelector('#to-top'); //아이디가 to-top라는 요소를 html에서 찾아서 toTopEl에 할당합니다.
toTopEl.addEventListener('click', function() { //변수 toTopEl에 이벤트를 생성하여 첫번째 인수로 click이벤트 두번째 인수 익명의 함수로 toTopEl를 클릭하면 익명의 함수가 실행하겠고 그렇게 실행되는 익명의 함수는 핸들러라 부릅니다.
  // 로직 작성 영역
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(window, .7, { // 즉, window객체라는것은 화면 그 자체 하나의 창을 의미합니다 이것을 애니메이션 처리를 하면서 특정한 위치로 옮겨줄 수 있습니다. 두번째 객체로는 움직여지는 시간을 적습니다
    scrollTo: 0 //즉, 화면의 위치를 0px지점으로 옮겨주겠다는 의미이며 해석하자면 0.7초간 화면의 위치를 0px부분으로 옮겨주겠다는 것을 의미합니다.
  });
});
// 이렇게 하면 내용이 잘 동작을 하지만 생각해보면 #to-top라는 아이디 선택자를 통해서 특정한 요소를 찾고 있는데 그이유는 그 요소를 클릭했을때 어떠한 상황을 만들어 주기 위해서 입니다.
// 그런데 위쪽에서 gsap.to()라는 메소드 부분에 선택자만 가지고도 요소를 찾을 수 있다는것을 확인하기 위해 요소대신에 선택자를 입력했는데 그러면 gsap의 to()라는 메소드 내부에서
// 역시 이 선택자를 이용해서 해당하는 요소를 찾는 행위를 하게 됩니다 그렇게 되면 조금 비효율 적이 됩니다 그 이유는 click이라는 이벤트를 요소에 연결하기 위해서 어차피 한번은 요소를 찾아야 되는데
// gsap.to()라는 메소드 부분에 첫번째 인수로 요소를 넣을 수 도 있고, 어떤 특정한 요소의 선택자도 명시할 수 있다는 것만 기억해두고 좀더 효율적으로 관리하기 위해서 그부분을 찾은
// 그 요소에 해당하는 변수 toTopEl라는 부분으로 대체해 줄 것이며 const toTopEl = document.querySelector('#to-top'); 이 부분을 잘라서 위로 올라가서 배치 엘리먼트를
// 찾는부분 밑에다 붙여 넣어줍니다 그렇게 되면 toTopEl라는 부분을 버튼이 보이는 버튼보이기 부분에 선택자('#to-top')를 대신해서 사용할 수 있습니다.

//fade-in영역
const fadeEls = document.querySelectorAll('.visual .fade-in');
//해석 : .visual안에 fade-in이라는 선택자들을 전부다 찾아서 fadeEls라는 변수에 할당을 해줍니다.
//Tip:s붙는것 주의해야합니다.
//Tip:ALL 메소드입니다.
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7s, 1.4s, 2.1s, 2.7s
    opacity: 1
  });  
});
//해석:실제 HTML부분에서 찾은 fade-in이라는 요소들의 개수만큼 forEach(포이츠)라는 메소드의 인수로 적은 함수가 실행이 됩니다.
//Tip:반복함수:forEach 
//Tip:반복처리하는 함수는 기본적으로 그렇게 찾은 fade-in이라는 클래스를 가지고 있는 요소들을 하나씩 순차적으로 함수에서 쓸수있게 데이터로 내어주는데 그것을 통상적으로 
//fadeEl라는 단수 형태로 받아서 쓸수 있으며 fadeEl(페이드엘리먼트)는 hello라는 원하는 이름으로도 대체할 수 있습니다. 이를 조금더 직관적으로 각각의 반복되는 fadeEl라는 요소는 
//이렇게 이름을 정해주시고 두번째 매개변수로 반복되는 횟수를 index라는 이름으로 받아서 사용할 수 있었습니다. 
//그렇게 두개의 매개변수를 가지고 있는 함수들이 반복적으로 실행 될때 내부에서는 gsap에to라는 메소드를 실행해줍니다. 
//이는 애니메이션 처리해주는 라이브러리에서 제공하는기능입니다. 사용법은 위쪽 코드에 있습니다.
// gsap의 첫번째 인수는 반복되는 요소를 명시해주고 지속시간은 1초(지속시간에는 따로 s를 붙여주지 않아도 됩니다)
// gsap에서 옵션은 기본저으로 객체데이터('{}') 형태이며, 이전에 main.css부분에서 fade-in이라는 부분의 opacity를 0이 되도록 설정해 놨었는데 
// 자바스크립트 코드가 실행이 되면 그것이 하나씩 opacity의 값이 1이 되도록 처리를해주면 되는데 중요한것은 순차적으로 하나씩 화면에 출력이 되어야 하기때문에 
// 여기에 무엇을 추가 할수가 있냐면 gsap이라는 애니메이션 라이브러리에서 제공하는 딜레이라는 옵션을 추가를 할 수 있습니다.
// 여기서 delay의 뜻은 지연시간을 이야기합니다.
// 즉, fadeEl라는 요소부분에 애니메이션을 1초간 실행할건데 그것이 몇초 뒤에 실행 될 것인지 delay 부분에 명시해주면 됩니다.
// 하지만 0.7이라는 것이 모든 fade-in에 해당하는 모든 요소가 0.7초 뒤에 애니메이션이 시작하는 개념이 되는데 순차적이라는 개념은 아니게 됩니다
//그래서 0.7앞에 어떠한 값을 곱해주는데 그 값은 (index+1) 입니다
//여기서 index는 기본적으로 0부터 시작하는 제로베이스 넘버링의 개념입니다. 그래서 fade-in이라는 요소를 4개를 만들었고 그 4개가 한번씩 반복되면서 이 함수가 실행이 되는데
//첫번째 반복할때 index의 값은 숫자 0이기에 0에 0.7을 곱하면 어차피 0이 되니 딜레이가 없는것이 됩니다. 그래서 0에다 숫자 1을 더하여 거기에 0.7을 곱하면 처음 반복하는
//fade-in의 요소는 0.7초 후에 애니메이션이 동작 할 것이며, 두번째 반복에 의해서는 1.4초뒤에 애니메이션이 동작하고, 세번째 요소는 2.1초뒤, 네번째 요소는 2.7초뒤에 동작하는 구조가 됩니다.
//그러면 html이 준비가 되면 main.js파일이 동작하면서 위 부분의 코드가 실행 되겠고 그렇게 되면 fade-in이라는 클래스를가진 요소들을 찾아서 한번씩 반복하면서 1초동안 설정한 초만큼
//바꿔가면서 작동하는 코드가 되었습니다. 그래서 위 코드를 보면 자바스크립트는 요소를 제어할때 하나씩 일일이 다 제어하는 것이 아닌 굉장히 많은 경우에 반복적으로 처리하는 개념이 들어가게 됩니다.
//그래야지만 그것들을 자동화 시켜줄 수 있습니다. 그렇지 않으면 수동으로 일일이 넣어주어야 하는데 하지만 그런 행위는 기본적으로 코드를 사용하는 개발을 할때에는 피해야하는 행위가 됩니다.
//그래서 최대한 이러한 로직들을 통해 많은 것들을 자동화 시켜줄 수 있어야 하며, 그것이 중요합니다. 그리고 이런식으로 반복적으로 처리해주어야 하는 것들이 굉장히 많습니다.

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생여부:(불린데이터) - autoplay가 되어 있으면 자동으로 슬라이드가 재생하니 따로 클릭을 해볼 필요는 없습니다. 때문에 불린데이터를 넣습니다.
  loop: true //반복여부옵션 - 반복을 할것인지 안할것인지에 대한 여부이기 때문에 불린데이터로 넣어줍니다.
});
//new라는 키워드는 자바스크립트의 생성자라고 불리며, 이는 자바스크립트의 클래스라는 개념이며, 자바스크립트 객체들을 담아 낼 수 있습니다.
//자바스크립트 문법으로 함수를 실행을 하는것을 의미하며, 이전 gsap 애니메이션을 사용 한 것 처럼 Swiper의 소괄호 사이에 어떠한 추가적 옵션을 넣을 수 있습니다.
//첫번째 옵션은 css선택자입니다 그래서 .notice-line이라는 클래스를 가지고 있는 요소 내부에 .swiper-container라는 클래스를 가지고있는 요소를 정의를 했습니다
//중간에 띄어쓰기는 후손 선택자이며 .notice-line안에 있는 .swiper-container를 실제로 슬라이드 하겠다고 정의 한것입니다. 
//소괄호 안에 넣는것을 인수라고 하며 문자데이터 형태로 선택자를 인수로 삽인해주고 쉼표후 옵션을 객체데이터 형식으로 넣어줍니다.
//객체데이터 사이에서 옵션을 넣어주어야 하니 엔터를 해주어 조금더 보기 편하도록 해줍니다.

//프로모션 이미지 슬라이드 부분
new Swiper('.promotion .swiper-container', {
  //프로모션 같은 경우 수평으로만 움직일 것이기 때문에 horizontalr값이 기본값으로 들어가 있기 때문에 따로 direction값을 명시해줄 필요는 없습니다.
  //direction의 기본값 : 'horizontal'
  slidesPerView: 3, //한번에 하나의 슬라이드만 보이는것이 아닌 한번에 총 3개의 슬라이드가 보이게 하기 위해서 slidesperview(슬라이드펄뷰)라는 옵션을 통해 한번에 보여줄 슬라이드 개수를 지정해주면됩니다. 이것의 기본값은 당연하게도 1입니다.
  spaceBetween: 10, //위에서 정의한 슬라이드 사이의 여백을 spaceBetween(스페이스비트윈)이라는 옵션을 통해서 숫자 10을 넣어주면 10px간격이 자동으로 만들어 집니다.
  centeredSlides: true, //원하는 슬라이드는 왼쪽에서 시작하는게 아닌 가운데서부터 시작하는 것이기 때문에 centeredSlides(센터드슬라이드스)라는 옵션을 추가하고 불린값인 true를 해줍니다  즉, 1번 슬라이드가 가운데 보여지게 됩니다.
  //여기까지 진행 됐으면 왼쪽영역이 비어 있는것을 볼 수 있습니다. 이는 슬라이드를 반복적으로 사용하겠다는 옵션을 따로 넣지 않았기 때문에 일어나는 현상입니다.
  loop: true, // 슬라이드를 반복 재생시켜서 왼쪽영역에 마지막 슬라이드를 볼 수 있도록 해주어 왼쪽의 남는 공간을 마지막 사진으로 채워줍니다.
  //오토플레이를 하여 자동으로 진행 되게끔 해주는데 여기에 객체데이터를 할당해줄 수 있는데 그 안에 추가적인 옵션을 명시해줄 수 있습니다. 대표적인 옵션인 delay(딜레이)가 있으며 그 딜레이를 밀리세컨드 단위로 500을 입력하면 0.5초를 의미합니다. 즉, 0.5초간 자동으로 슬라이드가 되는것을 의미합니다. 이러한 딜레이의 기본값은 3000입니다.
  autoplay: {
    delay: 5000 //5초간 딜레이
  },
  //라이브페이지에서 개발자 도구를 열어 엘리먼츠탭에서 가운데 있는 이미지를 셀렉트해서 선택해보면 이미지가 소속되어 있는 swiper-slide라는 요소를 보면 swiper-slide가 부여되있는것과 동시에 swiper-slide-active라는 클래스도 같이 들어 있는 것을 확인할 수 있는데 이는 swiper-slide가 가장 정 가운데서 보여지고 있다는것을 뜻합니다. 그래서 활성화 된 슬라이드가 무엇인지 클래스로 표현을 해주는것을 확인 할 수 있습니다. 다른슬라이드를 보면 swiper-slide-active라는 클래스는 다른 슬라이드에 보이지 않습니다 왜냐면 화면에 정가운데서 사용자에게 보여지는 슬라이드는 하나밖에 없기때문입니다.
  //swiper-slide-active를 가지고 기본적인 스타일을 넣어주는데 이러한 swiper-slide-active는 centeredSlides가 되어있어야 설정할 수 있다는점 반드시 기억해주세요!
  //좌우버튼영역구조
  pagination: { //pagination이라는 옵션을 추가해주고 객체데이터를 할당해줍니다.
    //el이라는 속성을 추가해주는데 여기에 선택자를 넣어줍니다.
    //promotion이라는 클래스를 가지고 있는 요소의 후손인 swiper-pagination이라는 요소를 실제로 페이지 번호를 사용하는 그 요소로 사용 하겠다는 의미로 이러한 선택자를 넣어주면 swiperjs내부에서 이 선택자의 맞는 요소를 찾아서 페이지 번호를 사용할 수 있도록 동작이 됩니다. 
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    // 옵션이 끝나는 부분에는 반드시 쉼표를 작성 해주어야 합니다! 쉼표는 주석뒤쪽에 적으면 읽히지 않습니다.
    //그리고 clickable(클릭커블)이라는 값을 불린데이터 true로 할당 해줍니다. clickable은 클릭이 가능한지에 대한 여부 즉, 사용자가 단순히 시각적으로 보는것이 아닌 눌러서 제어할 수 있는지에 대한 여부입니다. 
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    //'' = 문자데이터할당을 의미합니다.
    prevEl: '.promotion .swiper-prev', //이전 슬라이드 보는 버튼
    // promotion이라는 클래스를 가진 요소 내부에 swiper-prev라는 클래스를 가진 요소를 할당합니다.
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 보는 버튼
    // promotion이라는 클래스를 가진 요소 내부에 swiper-next라는 클래스를 가진 요소를 할당합니다.
    // 해석:navigation(네비게이션)이라는 옵션에 각각의 prevEl, nextEl의 선택자 값으로 명시를 해주면 swiperjs내부에서 그 해당하는 선택자 요소를 찾아서 이전슬라이드를 볼수있는 기능과 다음슬라이드를 볼수 있는 기능을 제공 해줍니다. 물론 원하는 스타일이 아닐 순 있습니다 
    // prev는 프리비어스라는 단어의 약어이며 프리비어스는 이전을 뜻하기에 이전 버튼이며, next는 다음을 뜻하는 다음 버튼을 말합니다.
  }
});
// AWARDS (어워즈) 영역 구문 
// Swiper메소드 안에는 첫번째 인수로 선택자와 두번째 인수로 옵션을 넣어줄 수 있습니다. 또한 옵션은 당연히 객체데이터이고 그 객체데이터 안에 자바스크립트에서 배운 키 벨류 형태로 옵션들을 명시해줍니다.
new Swiper('.awards .swiper-container', { //첫번째 인수로 어워즈라는 클래스를 가지고 있는 세션요소 내부에 스와이퍼 컨테이너라는 클래스를 가지고 있는 요소를 찾아서 거기에 슬라이드 기능을 추가해주어야 합니다. 필요한 옵션을 두번째 인수로 넣습니다.
  //direction:'horizontal' 디렉션이라는 옵션에는 호리젠탈이라는 수평을 의미하는 문자데이터가 이미 할당이 되어져 있는데 수평슬라이드를 만들것이기 때문에 이미 기본값으로 되어져 있으니 이부분은 따로 입력 할 필요는 없습니다.
  autoplay: true, //오토플레이를 통해서 트루를 입력 해서 자동재생이 될 수 있도록 만들어 줍니다
  loop: true, //loop를 사용하여 반복재생도 true로 만들어줍니다.
  spaceBetween: 30, //스페이스비트윈을 통해 사이사이의 여백을 30픽셀로 만들어줍니다.
  slidesPerView: 5, //슬라이드퍼뷰는 하나의 화면에 한번에 몇개의 슬라이드들이 보일것인지에 대한 구문으로 5를 입력하여 5개의 슬라이드를 동시에 보여줄것을 명시해줍니다.
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

// 요소슬라이드 - 슬라이드 토글 영역
const promotionEl = document.querySelector('.promotion'); //promotion클래스를 가진 영역을 promotionEl에 할당
const promotionToggleBtn = document.querySelector('.toggle-promotion'); //toggle-promotion클래스를 가진 영역을 promotionToggleBtn에 할당
// 그렇게 각각 할당받은 변수 promotionEl, promotionToggleBtn 들은 요소라고 불리웁니다.

let isHidePromotion  = false; //프로모션영역이 숨겨져 있니? 라고 물어보는 영역입니다. 
//값이 false 즉, 안숨겨졌다는 의미이며 보이고있다는말입니다. let키워드를 사용하였기에 재할당이 가능합니다.
//let isHidePromotion  = false 부분 재해석 : isHidePromotion(이즈하이드프로모션)이라는 변수는 어느순간에서는 false가 아닌 다른값으로 할당될 수 있다는것이며, false는 불린데이터이며 false의 반대값은 true입니다. 때문에 불린데이터 true가 이부분에 할당 될수도 있습니다.

promotionToggleBtn.addEventListener('click', function() { //promotionToggleBtn에 선택(click)을 하면 어떠한 함수가 실행이 됩니다.
  // 그 함수에서 isHidePromotion의 값이 실행이 되고 그것의 반대값(!)을 다시 할당 합니다
  isHidePromotion = !isHidePromotion //!가 붙었다면 그 부분은 반대가 되게 만들어 주세요 라는 뜻입니다. 즉, isHidePromotion의 값이 false인데 true를 내라는 것입니다.
  //isHidePromotion의 값을 확인하는 조건문을 선언해줍니다. = if (isHidePromotion) 즉, 만약 true값이 들어오면 
  if (isHidePromotion){ //만약 isHidePromotion 값이면 숨김처리를 해주세요
    // 숨김 처리에 대한 로직 : 어떻게 숨길것인지...
    promotionEl.classList.add('hide'); //promotionEl부분에 classList객체를 실행하여 add메소드를 통해 hide라는 클래스를 추가합니다.
    // 즉, 만약 promotionEl부분에 hide라는 클래스가 있으면 요소를 화면에서 보이지 않게 css스타일로 정리를 해주면 됩니다.
  } else { //아니라면 보임 처리를 해주세요
    // 보임 처리에 대한 로직 : 어떻게 보임 처리를 할것인지...
    promotionEl.classList.remove('hide'); //promotionEl부분에 classList객체를 실행하여 add메소드를 통해 hide라는 클래스를 지워줍니다.
    // 즉, 위에서 if문이 실행이 되어 isHidePromotion변수는 true이게 되는데 다시 promotionToggleBtn을 클릭하게 되면 isHidePromotion변수의 값은 true이고 이것의 반대값이 다시 할당 되어지니 false가 됩니다 false가 조건문으로 들어가니 당연하게 else부분이 실행이 됩니다.
    // 이렇게 되면 hide라는 클래스가 지워지면서 요소가 다시 보일 수 있는 구조를 css에 정의를 해주면 됩니다.
  }
});

// youtube Icon 둥둥 띄기 영역
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { //함수가 호출 될때 인수로 어떤 요소를 선택할 것인지 선택자라는 개념을 받을 것이며, 그것을 selector라는 매개변수로 받아서 사용할 것이며, 
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 첫번째 인수는 선택자
    random(1.5, 2.5), // 두번째 인수는 애니메이션 동작 시간
    { //세번째 인수는 여러가지 옵션들이 됩니다.
      //랜덤이라는 추가를 하여 그때그때 새로운 랜덤한 숫자를 반환받아 애니메이션 처리가 될 수 있도록 입력을 해주면 페이지로 접근을 하여 이러한 애니메이션을 보는 다양한 사용자들이 상황에 따라서 좀더 자연스러운 반복애니메이션으로 확인 할 수 있는것입니다.
    y: 20,//여기서 y는 y축을 의미합니다. 즉, y축으로 얼마만큼 윰직이면서 애니메이션 처리를 할 것인지 지정합니다.
    repeat: -1, //repeat(리핏)을 사용하여 몇번을 반복할 것인지에 대한 내용입니다. 여기에서 -1은 무한 반복을 의미합니다. 그리고 -1값은 어디까지나 자바스크립트 라이브러리에서 지원하는 기능입니다.
    yoyo: true, //yoyo(요요)는 한번 재생된 애니메이션을 다시 뒤로 재생해주는 위애서 밑으로내려오고 다시 올라갈수 있는 구조를 만들어냅니다. 즉, 위에서 내려오는 애니메이션이 처리가 된다면, 다시 위로 올라가지는 애니메이션도 라이브러리가 처리할 수 있도록 해줍니다.
    ease: Power1.easeInOut, //이징함수 사이트에서 원하는 inout 코드를 가져옵니다. 이는 좀더 자연스럽게 통통튈 수 있도록 합니다.
    delay: random(0, delay) //딜레이를 주어 랜덤값을 줍니다. 최소값은 0으로 출발을 하고 최대값은 인수로 받은 1초 혹은 0.5초 혹은 1.5초를 최대값으로 받아서 내부에서 랜덤하게 딜레이를 실행 할 수 있도록 정의를 해줍니다.
    }
  ); //gsap이라는 자바스크립트 애니메이션 라이브러리를 사용할 수 있으며, 거기에 to라는 메소드를 사용하여 실제 애니메이션을 넣을 수가 있습니다. 당연하게도 첫번째 인수는 요소를 넣을 수 있으며, 두번째는 애니메이션이 지속되는 시간을 넣을 수 있으며, 세번째 인수는 어떻게 애니메이션이 될 것인지에 대한 옵션을 추가할 수 있습니다.
  // gsap에 요소를 받는 부분에 검색한 요소 대신에 css선택자만 넣어도 gsap이 내부적으로 요소를 찾아서 넣어주었으면 그 찾아진 요소를 찾아서 활용하고 만약에 선택자를 넣어주면 내부적으로 선택자를 활용 하여 직접적으로 요소를 찾아 줄 수 있습니다. 때문에 floatingObject(플로팅오브젝트)라는 함수가 실행 될 때 밖에서 받은 selector(셀렉터)라는 매개변수를 첫번째 인수로 할당해줍니다
}
floatingObject('.floating1', 1, 15);//우리가 실행하면서 css선택자를 인수로 넣어주어야 하기때문에 floatingObject에 floating이라는 클래스를 가진 요소를 선택할 수 있도록 공통의 선택자를 추가를 해줍니다.
// 둥둥뜨는 애니메이션이 퉁퉁 튀는 느낌이 있기 때문에 이징함수를 사용해야합니다.
// floatingObject가 실행되는 부분에서 정확하게 floating1에 해당하는 요소를 애니메이션 처리를 할 것이고 딜레이는 1초 위아래 움직이는 범위는 15px을 추가를 하는데 floatingObject('.floating1, 1, 15') 이런식으로 숫자만 넣게 되면 이게 지연시간인지 혹은 지속 시간인지 혹은 위아래로 움직이는 범위인지 정확하게 알 수 없기 때문에 함수를 선언하는 부분에 매개변수이름을 조금더 명확하게 지정하여 두번째 인수로 받는것은 delay라고 정의해 주고 세번째 인수로 받는것은 위아래로 움직이는 크기이다 라는것을 명시해 주어야 합니다. 이러한 방식으로 floating2와 3까지 정의해줍니다.
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 자바 ScrollMagic(스크롤매직)부분의 라이브러리 영역
const spyEls = document.querySelectorAll('section.scroll-spy'); //변수 명의 s가 붙는 다는것은 복수의 요소를 찾는 다는 의미입니다. 또한 section이라는 태그들 안에 scroll-spy라는 클래스가 붙어 있다면 그 요소들을 전부 찾아서 spyEls라는 변수에 모두 할당을 해줍니다.
// 위에서 spyEls 즉, 하나의 요소를 선택한것이 아닌 ALL 요소 들을 선택한것이기 때문에 forEach(포이치)를 사용할 수 있습니다. 이를 통해 각각의 요소들을 반복할 것이고 그렇게 반복될때 실행될 함수를 지정해줄 수 있습니다.
spyEls.forEach(function (spyEl) { //익명함수에는 각각의 반복되는 spyEl(스파이엘리먼트)를 즉, 각각의 반복되는 요소들을 가지고 무엇인가를 할 것인데 이전 new라는 키워드로 시작하는 Swiper이라는 자바스크립트 라이브러리를 실행한 적이 있었는데 지금도 마찬가지로 new라는 키워드를 사용하여 스크롤매직이라는 자바스크립트 라이브러리를 실행합니다.
//키워드 생성자함수.메소드()
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //트리거앨리먼트라는 옵션에 감시하고 있는 하나의 섹션엘리먼트의 정보(spyEl)를 추가를 했다라면, 이는 ScrollMagic이라는 자바스크립트 라이브러리를 통해서 감시하는 요소가 이부분에 옵션에 지정이 되는 개념이 됩니다. 또한 여기서 이야기하는 trigger는 무엇인가를 강제로 일으킬때 사용하는 단어이며 결국 보여짐의 여부를 감시할 요소들을 지정해줄 수 있는것입니다.
      triggerHook: .8, //H 대문자 확인, 0.8의 0생략 이부분은 뷰포트를 보면 어디에서 시작되고 어디에서 끝나는지를 판단할 수 있겠고, 시작하는 부분이 숫자 0 끝나는 부분이 숫자 1로 ScrollMagic이라는 자바스크립트 라이브러리가 판단을 하는데 그랬을 때 뷰포트가 시작하는 가장 윗부분이 0이고 가장 아랫부분이 1이니까 그 중간부분은 0.5라는 수치를 가지고 있겠으며, 0.8은 대략적으로 알 수 있겠습니다. 그렇다면 0.8의 뷰포트에 그 지점부분에 triggerHook이 걸려져 있기 때문에 Hook은 갈고리를 의미하며, 여기에 보여짐 여부를 감시하는 그런 트리거 개념이 걸려있기 때문에 내가 감시하려는 요소가 만약 밑에서 쭉 올라오다가 0.8이라는 뷰포트 지점에 걸리게되면, 그때 어떠한 내용이 트리거 즉 실행이 되는것을 의미합니다.
      //  triggerHook이라는 것은 쉽게 말해서 내가 감시하고 있는 요소가 뷰포트에 어떠한 지점에서 감시되었다는것을 판단 할 것인지 지정해주는 옵션입니다.
      //  그렇게 감시려는 옵션을 통해서 해당하는 요소가 화면에 보여진다라고 판단이 된다면 그 밑에 있는 setClassToggle이라는 메소드를 실행 하는 그러한 구조를 가지고 있습니다.
    })//즉, 감시하려고 하는 각각의 세션부분에 scroll-spy라는 클래스들을 하나씩 붙여줄것이고, 그렇게 클래스가 붙어있는 각각의 섹션들은 spyEl라는 변수에 모두 할당 될것이고 
    //섹션들을 반복적으로 처리 할 것인데 반복될때마다 spyEl라는 매개변수에 그 값이 들어 있을 것이고, spyEl는 곧 감시하고 있는 섹션이 되는 개념입니다.
    .setClassToggle(spyEl, 'show')//setClassToggle에는 인수를 2개 적을 수 있습니다. 첫번째는 어떠한 클래스를 토글할 그 요소를 지정할 수 있으며, 
    //두번째는 토글할 클래스 이름을 지정할 수 있습니다.
    //spyEl가 토글이 된다면 scroll-spy글자 뒤에 show가 붙게 되는데 이는 개발자 도구로 확인 할 수 있으며, 
    .addTo(new ScrollMagic.Controller()) //Scene는 scrollmagic이라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드입니다. 쉽게말해서 화면을 위아래로 스크롤 하면서 제어하려고 하는 특정한 섹션들이 화면에 보이는지 보이지 않는지 라이브러리의 도움을 받아 감시해야하기에 그 여러가지 옵션들을 이 Scene라는 메소드에 추가해주고 메소드 체이닝을 통해 setClassToggle()라는 메소드를 추가적으로 뒤에 붙여줄 수 있습니다. 이는 이름에서 유추할 수 있듯이 set무엇인가를 지정할것인데 그것은 class즉, html클래스 속성을 이야기하며, 그 클래스 속성을 무엇인가로 지정을 할 것인데 Toggle이라는 단어가 붙었기 때문에 어떤 클래스를 넣었다 뺏다를 제어해 주는 역할을 합니다. 그리고 addTo()라는 메소드는 ScrollMagic이라는 자바스크립트 라이브러리가 필요한 컨트롤러라는 개념의 내용을 추가하기 위한 메소드입니다. 
    //addTo부분에는 new라는 키워드를 사용하고, ScrollMagic이라는 자바스크립트 라이브러리를 또 실행해준 다음 메소드로 대문자 C로 시작하는 컨트롤러라는 매소드를 실행해줍니다. 이부분은 ScrollMagic에서 기본적으로 추가한 옵션들을 내부의 컨트롤러에 내용을 할당 하여 실제로 동작할 수 있는 구조를 만들어 주는 용도로 사용이 됩니다.
    // 이러한 명령들을 통해 감시하려고 하는 몇가지 화면에 보이는 섹션들에 대한 정보들을 입력해 줄 것이고 마무리가 되면 특정한 화면이 화면에 보이기 시작하면 애니메이션을 추가 해줄 수 있는 기능을 도입 할 수 있습니다.
});

