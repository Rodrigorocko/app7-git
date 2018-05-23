// JavaScript Document
$(document).redy(function(e){
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("!Deslizó a la Izquierda",function(){"Aplicación7","Aceptar"});	
        });//Cierre deslizar isquierda
        $('#derecha').on("wiperight",function(){
	        navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			case 2:
			navigator.notifiaction.vibrate(2000);
			break;
		}
	},"Aplicacion7","Beepear,Vibarar,Cancelar");
});//cierre del deslizar derecha
	},false);//cierre del deviceready
});//cierre del documento principal
	