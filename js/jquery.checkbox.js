jQuery(document).ready(function(){

    /* change input view on click */
    jQuery(".niceCheck").mousedown(
    function() {
        changeCheck(jQuery(this));
    });
    
    /* change view if input checked */
    jQuery(".niceCheck").each(
    function() {
        changeCheckStart(jQuery(this));
    });

});

/* change input view*/
function changeCheck(el){
    var el = el,
    input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");    
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");    
        input.attr("checked", false)
    }
    return true;
}

/* change view if input checked */
function changeCheckStart(el){
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");    
        }
    return true;
}