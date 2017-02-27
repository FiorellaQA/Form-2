var records = document.getElementById('records');
var boton = document.getElementById('boton');

document.getElementById("form1").addEventListener("submit", function(e){
	//@see Cancela el evento si este es cancelable, sin detener 
	//     el resto del funcionamiento del evento, es decir, puede 
	//     ser llamado de nuevo.
	e.preventDefault();

	//@trim elimina los espacios de los extremos
	var nombre = document.getElementById('nombre').value.trim();
	var apellido = document.getElementById('apellido').value.trim();
	var dni = document.getElementById('dni').value.trim();
	var direccion = document.getElementById('direccion').value.trim();


	//@see SON REQUERIDOS TODOS LOS CAMPOS
	if( ! (nombre && apellido && dni && direccion)) 
	{
		alert("Verifique que todos los campos estén llenos correctamente.");
		return false;
	}

	if(dni.length != 8)
	{
		alert("El dni debe tener 8 dígitos.");
		return false;
	}

	//@see isNan cuando es string es true cuando es int es false
	if(isNaN(dni))
	{
		alert("El dni es un numero.");
		return false;
	}

	records.innerHTML = "<ul>";
		records.innerHTML += "<li>Nombre: " + nombre + "</li>";
		records.innerHTML += "<li>Apellido: " + apellido + "</li>";
		records.innerHTML += "<li>DNI: " + dni + "</li>";
		records.innerHTML += "<li>Dirección: " + direccion + "</li>";
	records.innerHTML += "</ul>";
});

