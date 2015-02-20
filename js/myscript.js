$(function(){
	$('#datepicker').datepicker();			
	$("#accordion").accordion();

Alert();
var timeout;


function Alert() {
  timeout = window.setTimeout(sessionAlert, 10000);
}


function sessionAlert() {
    var main = $("#main");
    main.html("Your session is about to expire!");
    main.dialog({
        title: "Alert",
        buttons: {
            "Stay": function () {
                $(this).dialog('close');
                callback(true);
            },
                "Exit": function () {
                window.location.href = "http://google.com";
            }
        }
    });
}




});