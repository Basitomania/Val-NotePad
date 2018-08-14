var valNotePad = {
    init:function(){
        $("#clear").click(valNotePad.clear);
        $("#save").click(valNotePad.save);
    },
    display:function(){

    },
    clear:function(){
        $("#text-title").val("");
        $("#text-body").val("");
    },
    save:function(){

    }
}
$(document).ready(valNotePad.init);


/*
function startApp() {
    $("#clear").click (function (e) {
        $("#text-title").val("");
        $("#text-body").val("")
    });
        
} 

$(document).ready(startApp)
    */