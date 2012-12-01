function init(){
	
	
	alert("Get all js files")
	
	
}


function getfile(el){
    v = el.getAttribute("label")
	
	alert(v)
	
	
}



function hello(){

	
    alert("Greate")
    
    var div1 = document.getElementById('codeBox');
      div1.setAttribute('value','alert("sfsdf")');

    var code = div1.getAttribute('value');
  
    		alert(code)
            JSLINT(code);
            
            var results = JSLINT.data();
           
           
           var elem=document.getElementById('resultBox');
  elem.setAttribute('value',results.errors[0].reason);

           
           
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