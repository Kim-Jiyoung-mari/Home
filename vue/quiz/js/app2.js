// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props
Vue.component('sibling-component',{
  template:'<p>{{ propsdata }}</p>',
  props:['propsdata'],
})

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',

    // 할일 #2
    // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    anotherMessage: '솔직히회식안간거좀마음불편해갈걸그랬나?근데술마시기싫어서안간건데뭐ㅠ,ㅠ주님도와주세요'
  }
});
