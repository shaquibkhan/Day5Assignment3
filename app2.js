// obj is created...
var employee ={
	name:"Shaquib ahmad khan",
	age: 23,
	salary: 65000,
	// address is a nested object inside the employee object...
		"address" :{
	city:"New-Delhi",
	state:"Northern-India",
	pincode: 110025
}
};
// o/p comes in console..
console.log("Name: " +employee.name+ " Age: " +employee.age+ " Salary: " +employee.salary+ " City: "+employee.address.city+ " State: "+employee.address.state+ 
			" Pincode " +employee.address.pincode);
