// $(function() {
//     $('.jcarousel').jcarousel({
//         // Configuration goes here
//     });
//     var instance = $('.jcarousel').data('jcarousel');
// 	instance.scroll('+=2');

// 	$('.jcarousel-prev').jcarouselControl({
//         target: '-=1'
//     });

//     $('.jcarousel-next').jcarouselControl({
//         target: '+=1'
//     });

//     //PAGINATION
//     $('.jcarousel-pagination').jcarouselPagination({
//         item: function(page) {
//             return '<a href="#' + page + '">' + page + '</a>';
//         }
//     });


// 	$('.jcarousel-prev').click(function() {
//     	$('.jcarousel').jcarousel('scroll', '-=1');
// 	});
// 	$('.jcarousel-next').click(function() {
//     	$('.jcarousel').jcarousel('scroll', '+=1');
// 	});
// });
$(document).ready(function(){

    // SLIDER //
    $('.slider').jcider({
        looping: true, // Включить слайдер
        visibleSlides: 1, // Показывать слайдов
        variableWidth: true, // Для переменной ширины
        variableHeight: true, // Для переменной высоты
        fading: true, // Для fading/sliding эффекта
        easing: 'cubic-bezier(.694, .0482, .335, 1)', // Для плавности
        transitionDuration: 400, // Длительность перехода между слайдами
        autoplay: false, // Автоматически играет ('true') или нет ('false')
        slideDuration: 3000, // Время между каждой смены слайдов
        controls: true, // Для включения стрелок навигации
        controlsWrapper: 'div.jcider-nav', // Элемент для навигации стрелки
        controlsLeft: ['span.jcider-nav-left', ''], // Элемент для "влево"
        controlsRight: ['span.jcider-nav-right', ''], // Элемент для "вправо"
        pagination: true, // Для включения пагинации
        paginationWrapper: 'div.jcider-pagination', // Элемент для пагинации блока навигации по точкам
        paginationPoint: 'div.jcider-pagination-point' // Элемент для пагинации точки
    });
    // SLIDER //

    //SELECT//
    var params = {
        changedEl: "select",
        visRows: 4,
        scrollArrows: true
        }
    cuSel(params);
    //SELECT//
});