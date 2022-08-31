// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player; 이것은 필요없습니다 따로 쓰이는 곳 없기 때문입니다.
function onYouTubeIframeAPIReady() { // onYouTubeIframeAPIReady는 이름을 절때 바꾸면 안됩니다.
  // player = new YT.Player('player', { 때문에 여기 부분에 player도 필요없습니다
  new YT.Player('player', { //여기서 표기된 player는 html부분에 <div id="player"></div> 이부분에 설정한 id속성의 값이 들어가게 됩니다, 여기에 #을 붙여 #player을 붙이면 안됩니다. 그냥 player라고 주면 유투브 명령이 player라는 아이디값을 가지고 있는 요소를 찾게 됩니다.
    // 그렇게 찾은 요소에 밑 옵션을 기반으로 유투브를 재생해 줍니다
    //height: '360', 영상의 세로너비 별도로 지정할 필요는 없습니다.
    //width: '640', 영상의 가로너비 별도로 지정할 필요는 없습니다.
    videoId: 'An6LvWQuj_8', //이부분은 중요합니다 어떠한 아이디 값을 가지고 있는 유튜브 비디오를 출력 할것인지에 대한 것입니다. 즉, 최초 재생할 유투브 영상 ID입니다.
    // events: { 이부분도 이제는 필요가 없어졌습니다.
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
    playerVars: {//playerVars(플레이어바스)옵션중 여기서 Vars는 Variable(밸리어블)이라는 변수의 약어입니다. 그래서 영상을 재생하기 위한 여러가지 변수들이라는 옵션이 됩니다. 여기에 객체데이터를 할당해줍니다.
      autoplay: true, //autoplay(오토플레이)요소로 자동재생 유무를 참으로 설정해주고
      loop: true, //loop(루프)요소로 반복 재생 유무를 참으로 설정해줍니다.
      //여기서 중요한 점은 반복 재생 유무가 true인 경우에는 다시 반복해서 재생할 영상의 아이디를 목록으로 제공해주어야 합니다.
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events: { //events(이벤츠스)뒤에 s 붙인것을 주의 해주세요
      onReady: function (event){ //객체데이터 내부에 함수 데이터가 할당 되어져 있는 속성을 메소드라고 부릅니다 즉, onReady(온레디)라는 메소드가 실행되면 익명함수의 매개변수로 event라는 것을 사용할 수 있습니다 여기에서 이야기하는 event는 결국 동영상 플레이어가 onReady즉, 준비가 되면 그때 function (event) 이 함수를 실행 해주는데 이 함수를 실행할때 그 함수의 인수로 이 동영상이 플레이되는 어떤 상황자체를 데이터로써 넘겨주게 됩니다. 이 함수내에서 event라는 매개변수의 이름으로 받아서 함수 내부에서 활용하여 쓸 수 있습니다.
        event.target.mute() //event라는 매개변수에는 target이라는 속성이 하나 들어있으며, target은 지금 재생되고 있는 영상 자체를 의미합니다 마지막 mute()라는 메소드를 실행시켜준다면 mute즉, 음소거를뜻합니다.
        //유투브를 재생한 옵션에서는 기본적으로 playerVars부분에 mute옵션이 있으면 좋겠지만 제공하지 않습니다. 때문에 events부분에 onReady영상이 준비가 된다면 function 익명의 함수가 실행이 될것인데 그 익명의 함수가 실행 될때 준비된 영상을 음소거 처리 하겠다는 것입니다.
      }
    }
  });
}