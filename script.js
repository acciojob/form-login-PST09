function getFormvalue() {
 let first =document.querySelector('#form1 input[name="fname"]');
let last =document.querySelector('#form1 input[name="lname"]');
	let fname=first.value;
	let lname=last.value;
	alert(fname+" "+lname);   //Write your code here

}
