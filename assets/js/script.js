//VARIABLES:
	var records = document.getElementById('records');
	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var dni = document.getElementById('dni');
	var direccion = document.getElementById('direccion');
	var errorName = document.getElementById("name_error");
	var errorLastname = document.getElementById("lastname_error");
	var errorDni = document.getElementById("dni_error");
	var errorAddress = document.getElementById("address_error");

//FUNCIONES:
function emptyInput(varInput,varSpan){
	if(varInput.value == ""){
		varSpan.innerHTML = "* Please complete this field.";
		return false;
	}else{
		varSpan.innerHTML = "";
		return true;
	}
}
function showMessage(element,message) {
  	element.innerHTML = message;
}
function print(){
	swal({
  		title: "Confima tus datos",
  		text: "<div style='text-align: left;display:inline-block; margin: 0 auto;'>"+
  					"<p>Nombre: " + nombre.value  +"</p>" +
					"<p>Apellido: " + apellido.value + "</p>" +
					"<p>DNI: " + dni.value + "</p>" +
					"<p>Dirección: " + direccion.value +"</p>" +
				"</div>",
		html: true,
		type: "warning",
  		showCancelButton: true,
  		confirmButtonColor: "#DD6B55",
  		confirmButtonText: "Aceptar",
  		cancelButtonText: "Cancelar",
  		closeOnConfirm: false,
  		closeOnCancel: false
		},
		function(isConfirm){
  				if (isConfirm) {
    					swal("Enviado!", "Tus datos fueron enviados satisfactoriamente.", "success");
  				} else {
    					swal("Cancelado!", "Los datos ingresados fueron cancelados", "error");
  				}
	});
}

function validation(){
	if( ! emptyInput(nombre,errorName)){
		return false;
	}
	if( ! emptyInput(apellido,errorLastname)){
		return false;
	}
	if( ! emptyInput(dni,errorDni)){
		return false;
	}
	if( ! emptyInput(direccion,errorAddress)){
		return false;
	}

	if(isNaN(dni.value)){
		showMessage(errorDni,"* The D.N.I. is a number.");
		return false;
	} else {
		showMessage(errorDni,"");
	}

	if(dni.value.length != 8){
		showMessage(errorDni,"The D.N.I. has 8 digits");
		return false;
	} else {
		showMessage(errorDni,"");
	}
	print();
}
//EVENTOS:
document.getElementById('boton').addEventListener("click", validation);

