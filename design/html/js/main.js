var $  = jQuery;
var i = 1;
var banner = $('#banner div');
var banners = $(banner).size();
var knob = $('input#knob');
var knob_val = $(knob).attr('value');

setInterval(function(){
    if(i!=6){
        knob_val = parseInt(knob_val) + 1;
        $('.dial').val(knob_val).trigger('change');
    }else{
        knob_val  = 0;
        $('.dial').val(0).trigger('change');
        $('canvas').parent('div').hide("fast");
    }
},200);

setInterval(function(){
    if(i<banners)
    {
        $(banner).hide("slow");
        $('#banner div.span4:eq('+i+')').show("slow");
    }
    else
    {
        i = 0;
        $(banner).hide("slow");
        $('.dial').val(0).trigger('change');
        $('canvas').parent('div').show("fast");
        $('#banner div.span4:eq('+i+')').show("slow");
    }
    i = i+1;
},5000);

$(".dial").knob();
$('canvas').parent('div').addClass('center');

$.getJSON('rediff_news.php',function(data){
   $(data).each(function(){
        $('ul#headlines').append('<li><a href='+this.url+' target="_blank">'+this.title+'</a></li>');
   });
});