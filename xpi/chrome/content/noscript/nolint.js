

function hello(){

	
    alert("Greate")
    
  // Run JSLINT over code
            JSLINT("alert('hels')");
            
            var results = JSLINT.data();
           
           	alert(results.errors[0].reason);            
           
           
           }
           
           // var myData = JSLINT.data();

// It returns a structure with this form:

// {
// errors: [
// {
// line: NUMBER,
// character: NUMBER,
// reason: STRING,
// evidence: STRING
// }
// ],
// functions: [
// {
// name: STRING,
// line: NUMBER,
// last: NUMBER,
// params: [
// {
// string: STRING
// }
// ],
// closure: [
// STRING
// ],
// var: [
// STRING
// ],
// exception: [
// STRING
// ],
// outer: [
// STRING
// ],
// unused: [
// STRING
// ],
// undef: [
// STRING
// ],
// global: [
// STRING
// ],
// label: [
// STRING
// ]
// }
// ],
// globals: [
// STRING
// ],
// member: {
// STRING: NUMBER
// },
// urls: [
// STRING
// ],
// json: BOOLEAN
// }