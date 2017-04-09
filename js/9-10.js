$(document).ready(function(){

    // JSIDER SLIDER //
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
    // JSIDER SLIDER //

    //CUSEL SELECT//
    var params = {
        changedEl: "select",
        visRows: 4,
        scrollArrows: true
        }
    cuSel(params);
    //CUSEL SELECT//

});