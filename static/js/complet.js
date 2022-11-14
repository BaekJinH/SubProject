// 화면 흐리게 + 서브 메뉴 제외하고 나머지 마우스 이벤트 무효화


$(function(){
    let modal = document.querySelector('#modal')
    function windowMask(){
        var maskHeight = 100+'vh';
        var maskWidth = 100+'vw';

        $('.mask').css({width:maskWidth,height:maskHeight});

        $('.mask').fadeIn(260);
        $('#modal').fadeIn(300)
    }

    $('#openModal').click(function(){
        windowMask()
        modal.style.display = "flex"
    })
    $('#modalClose , .mask').click(function(){
        $('.mask').fadeOut(0)
        modal.style.display = "none"
    })
})

// 현재 날짜
$(function(){

let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    document.getElementById('printText').innerHTML = year + '년 &nbsp;' + month + '월 &nbsp;' + date + '일 ' ;
})


// 모바일 화면에서 팝업 뒤에 Footer 없애기 (옆의 선 때문에 없앰)

$(function () {
    if (matchMedia("screen and (min-width: 279px) and (max-width:599px) ").matches) {
        $('#openModal').click(function () {
            $('#wrap').stop().addClass('eleHide');
            $('.mask').css({width:0,height:0})
        })
        $('#modalClose').click(function ( ){
            $('#wrap').stop().removeClass('eleHide')
        })
    }
})



function printBtn() {
    const html = $('html')
    const printContents =  $('#printContent').html();
    const printDiv = $("<div id='printContent';></div>");

    html.append(printDiv);
    printDiv.html(printContents);
    $('body').css('display','none');
    window.print();
    $('body').css('display','block');
    printDiv.css('display','none');
}



// String -> unicode
$(function(){
    charToUnicode = function(str) {
        if (!str) return false; // Escaping if not exist
        var unicode = '';
        for (var i = 0, l = str.length; i < l; i++) {
        unicode += '\\' + str[i].charCodeAt(0).toString(16);
        };
        return unicode;
    }
})
