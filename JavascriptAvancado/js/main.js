
var lista = [{
	"desc": "rice",
	"amount": "1",
	"value": "5.40"
},
{
	"desc": "beer",
	"amount": "12",
	"value": "1.99"
},
{
	"desc": "meat",
	"amount": "1",
	"value": "15.00"
}];

function getTotal(lista) {
	var total = 0;
	for (var key in lista){
		total += lista[key].value * lista[key].amount;
	}
	document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(lista){
	var table = '<thead><tr><th>Description</th><th>Amount</th><th>Value</th><th>Action</th></tr></thead>';
	for (var key in lista) {
		table += '<tr><td>'+ formatDesc(lista[key].desc) +'</td><td>'+ formatAmount(lista[key].amount) +'</td><td>'+ formatValue(lista[key].value) +'</td><td> <button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button> <button class="btn btn-default" onclick="deleteData('+key+');">Delete</button></td></tr>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;
	getTotal(lista);
	saveListStorage(lista);
}

function formatDesc(desc) {
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);

	return str;
}

function formatAmount(amount) {
	return parseInt(amount);
}

function formatValue(value) {
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "$ " + str;

	return str;
}

function addData(){
	if (!validation()) {
		return;
	}
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	lista.unshift({
		"desc":desc,
		"amount":amount,
		"value":value
	});
	setList(lista);
}

function setUpdate(id) {
	var obj = lista[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	document.getElementById("btnUpdate").style.display = "inline-block"
	document.getElementById("btnAdd").style.display = "none";;

	document.getElementById("inputIdUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

function resetForm() {
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("btnUpdate").style.display = "none"
	document.getElementById("btnAdd").style.display = "inline-block";;

	document.getElementById("inputIdUpdate").innerHTML = "";
	document.getElementById("errors").style.display = "none";
}

function updateData() {
	if (!validation()) {
		return;
	}
	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value

	lista[id] = {
		"desc":desc, 
		"amount":amount, 
		"value":value
	};
	resetForm();
	setList(lista);
}

function deleteData(id) {
	if(confirm("Delete this item?")){
		if(id === lista.length - 1){
			lista.pop();
		}else if(id === 0) {
			lista.shift();
		}else {
			var arrAuxIni = lista.slice(0,id);
			var arrAuxEnd = lista.slice(id+1);
			lista = arrAuxIni.concat(arrAuxEnd);
		}
		setList(lista);
	}
}

function validation() {
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var errors = "";

	document.getElementById("errors").style.display = "none";

	if(desc === "") {
		errors += '<p>Fill out Description</p>';
	}
	if(amount === "") {
		errors += '<p>Fill out quantity</p>';
	}else if(amount != parseInt(amount)){
		errors += '<p>Fill out a valid amount</p>';
	}
	if(value === "") {
		errors += '<p>Fill out value</p>';
	}else if(value != parseFloat(value)){
		errors += '<p>Fill out a valid value</p>';
	}

	if(errors != "") {
		document.getElementById("errors").style.display = "block";

		document.getElementById("errors").style.backgroundColor = "rgba(85, 85, 85, 0.3)";
		document.getElementById("errors").style.color = "white";
		document.getElementById("errors").style.padding = "10px";
		document.getElementById("errors").style.margin = "10px";
		document.getElementById("errors").style.borderRadius = "13px";

		document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
		return 0;
	}else {
		return 1;
	}
}

function deleteList(){
	if (confirm("Delete this list?")) {
		lista = [];
		setList(lista);
	}
}

function saveListStorage(lista) {
	var jsonStr = JSON.stringify(lista);
	localStorage.setItem("lista",jsonStr);
}

function initListStorage(){
	var testList = localStorage.getItem("lista");
	if(testList){
		lista = JSON.parse(testList);
	}
	setList(lista);
}


initListStorage();
