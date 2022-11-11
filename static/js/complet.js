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


// Print 
    // var initBodyHtml;
    // function printBtn () {
    //     window.print();
    // }

    // function beforePrint () {
    //     initBodyHtml = document.body.innerHTML;
    //     document.body.innerHTML = document.getElementById('printContent').innerHTML
    // }

    // function afterPrint() {
    //     document.body.innerHTML = initBodyHtml;
    // }

    // window.onbeforeprint = beforePrint;
    // window.onafterprint = afterPrint


// var printDiv;
// var initBody ;
// function printBtn (printContent) {
//     printDib = document.all[printContent] ;
//     window.onbeforeprint = beforePrint;
//     window.onafterprint = afterPrint;

//     window.print
// }

// function beforePrint() {
//     initBody = document.body.innerHTML;
//     document.body.innerHTML = printDiv.innerHTML;
// }

// function afterPrint () {
//     document.body.innerHTML = initBody;
// }

var div;
var initBody;

function printBtn(id)
{
   div = document.getElementById(id);
    
   window.onbeforeprint = beforePrint;
   window.onafterprint = afterPrint;
   window.print();
}

function beforePrint()
{
   initBody = document.body.innerHTML;
   document.body.innerHTML = div.innerHTML;
}

function afterPrint()
{
   document.body.innerHTML = initBody;
}