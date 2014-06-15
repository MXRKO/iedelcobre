$(document).ready(function(){
	$("#btEnviar").click(function(){
		if($.trim($("#txtNombre").val())!="" && $.trim($("#txtEmail").val())!="" && $.trim($("#txtMensaje").val())!=""){
			$.ajax({
				url:'mensaje.php',
				type:'POST',
				data:"Accion=ENVIAR&nombre="+$("#txtNombre").val()+"&correo="+$("#txtEmail").val()+"&mensaje="+$("#txtMensaje").val(),
				contentType:'application/x-www-form-urlencoded; charset=UTF-8;',
				dataType:'html',
				beforeSend:function(e){
					$("#btEnviar").attr("disabled",true);
				},
				success:function(respuesta){
					if(respuesta=="ENVIADO"){
						$("#txtNombre").val("");
						$("#txtEmail").val("");
						$("#txtMensaje").val("");
						alert("Su mensaje se ha enviado correctamente, nosotros nos pondremos en contacto a la brevedad");
					}
					else{
						alert("Su mensaje no se ha podido enviar, por favor intentelo mas tarde.");	
					}
					$("#btEnviar").removeAttr("disabled");
				},
				error:function(obj,quepaso,otro){
					alert("Ha ocurrido un error, por favor intentelo mas tarde.");
					$("#btEnviar").removeAttr("disabled");
				}
			});
		}
		else{
			alert("Debe completar todos los datos del formulario");
		}
	});
});