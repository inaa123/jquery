$('#myId') // <div id='myId'></div> 이 div element가 컬렉션안에 들어가서 리턴됨.

// 과제: class myClass DOM들을 찾아라.
$('.myClass') //css 부분 다시 공부해....................

// 과제: name attribute value가 surname인 input DOM들을 찾아라.
$('input[name="surname"]') // <input name='surname/> element찾는 거임

$('#contents ul.people li')
//위 selector에 해당하는 HTML code를 작성하라.
/*
<div id = 'contents'>
    <ul class='people'>
        <li></li>
        <li></li> // jquery 컬렉션 안에 들어있는 원소는 li..
    </ul>
</div>
*/

$('a.external:first') //first 첫번째만 찾는 거
/*
<a class='external'></a> // -- first가 붙어있어서 얘만 리턴됨
<a class='external'></a>
*/

$('li:odd') // odd홀수번째 인덱스 골라냄
/*
<ul>
    <li></li> // 0 
    <li></li> // 1 -- 
    <li></li> // 2 
    <li></li> // 3 --
</ul>
*/

$('div:visible') //보이는 객체?만 찾는 거임

$('div:gt(1)')
/*
<div></div>
<div></div>
<div></div> --
*/

$('div:animated')

$('a[rel$="thinger"]') //thinger로 끝나는
/*
<a rel='do-nothinger'></a> --
<a rel='so-thinger'></a> --
*/

$('div.foo').has('p') //foo클래스가 붙어있는 div찾아내 그중 'p'를 갖는 걸 찾기 컬렉션. 필터링
//jquery도 컬렉션리턴, .has()도 컬렉션리턴, 필터링해서 첫번째만 빼낸다.
/* 
<div class='foo'>
    <p></p>
</div>
<div class='foo>
</div>
*/ 

$('ul li').filter('.current')
/*
<ul>
    <li></li> //li중에 class current가 있는 
    <li></li>
</ul
*/

$('ul li').not('.current')//가지고 있지 않는 컬렉션 

$('ul li').eq(1) //1번 인덱스 찾고 싶을 때. eq(equals)가 리턴하는 건? 컬렉션(원소 하나인)

$('form :button') //form에 있는 ㅇㅇㅇㅇ중에 button뭐시기를 찾겠다. 
/*
    <form>
        <button></button>//form의 자식, button라이프
        <input type='button> //얘도 버튼라이프?
    </form>
*/

$('form :radio') //<input type='radio/> 를 찾는다.
$('form :checkbox') // <iput type='checkbox'/>

$('form :checked') //폼에서 체크된 것들만 찾겠다.
/*
<input type='radio'/> 중에 체크된 것들만 골라냄
<input type='checkbox'/>
<select><option></option></select> //체크된 옵션을 찾는것
*/

$('form :selected') //select의 옵션에 해당하는 것, 
/*
<select><option></option></select> //얘는 checked< selected에서 둘다 걸림
*/

$('form :enable')
$('form :disable')

$('form :file') // <input type='file'/>

$('form :input')
/* input 라이프?라이트?에 속함.
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button> //button 타입속성은 button, reset, submit => 모두 input 라이트?임
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') //attribute가 gender인거 찾겠다. :스페이스 자식이냐 아니냐(스페이스있으면 자식, 없으면 자식X)
//과제: 위 selector에 해당하는 HTML code를 작성하라.
/*
<form>
    <input type='radio' name='gender'/> //name속성, name속성의 값이 gender
</form>
*/

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>





















//has와 filter 공통점은 주어 컬렉션$(' ')에서 원소를 골라내는 작업을한다.
//차이점 has는 파라미터로 갖는 녀석을 자식으로 갖고있는녀석을 골라냄, has다음 파라미터는 자식
//filter는 파라미터로 갖고있는 녀석을 속성으로 골라낸다ㅣ. 
