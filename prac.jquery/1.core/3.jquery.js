$('#myID') //<div id='myId'></div>

//과제 : class myClass Dom들을 찾아라.
$('.myClass')

//과제:
$('input[name="surname"]')

$('#contents ul.people.li')
// 과제: 
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> //--
<a class='external'></a>
*/

$('li:odd')
/*
<ul>
    <li></li>
    <li></li> --
    <li></li>
    <li></li> --
</ul>
*/

$('div:visible')

$('div:get(1)')
/*
<div></div>
<div></div>
<div></div> --
*/

$('div:animated')

$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a> --
<a rel='so-thinger'></a> --
*/

$('div.foo').has('p')
/*
<div class='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current')
/*
<ul>
    <li></li>
    <li></li>
</ul>
*/

$('ul li').not('.current')

$('ul li').eq(1)

$('form :button')
/*
    <form>
        <button></button>
        <input type='button>
    </form>
*/

$('form: radio') //<input type='radio'>
$('form: checkbox') //<input type='checkbox'>

$('form :checked')
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enable')
$('form :disable')

$('form :file')

$('form : input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button> // button, reset, submit
*/

$('form :text')

$('form :password')

$('form input[name="gender"]:radio')
//과제: