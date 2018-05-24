// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready", function() {
		
		$('#izquierda').on("swipeleft", function() {
			navigator.notification.alert("Deslizo a la izquierda", function() {"Aplicación7", "Aceptar"});
		});
		
$('#derecha').on("swiperight", function() {
	navigator.notification.confirm("¿Que quieres hacer?", function(otp) {
		switch(otp)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(2000);
			break;
		}
	},"Aplicación7","Beep,Vibrar,Cancelar");
	
});
	},false);
});
