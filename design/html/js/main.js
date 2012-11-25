var banners = $('#banner div').size();
var i = 1;
setInterval(function(){
    if(i<banners)
    {
        $('#banner div').hide("slow");
        $('#banner div:eq('+i+')').show("slow");
    }
    else
    {
        i = 0;
        $('#banner div').hide("slow");
        $('#banner div:eq('+i+')').show("slow");
    }
    i = i+1;
},5000);
