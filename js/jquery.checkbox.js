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

    jQuery("label").mousedown(
    function(){
        
        var id = jQuery(this).attr("for");
        console.log("id = ", id);
        
        console.log(jQuery("#" + id));
        clickOnLabel("#" + id);
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


function clickOnLabel(elId){
    var elId = elId;
    console.log("elid", elId);
    if(jQuery(elId).checked){
        console.log("checked = true");
    }else{
        console.log("checked = false");
    };
    //if(checkbox.checked)
    // input = el.find("input").eq(0);
    // console.log(input);
    // if(!input.attr("checked")) {
    //     el.css("background-position","0 -17px");    
    //     input.attr("checked", true)
    // } else {
    //     el.css("background-position","0 0");    
    //     input.attr("checked", false)
    // }
    // return true;
} 