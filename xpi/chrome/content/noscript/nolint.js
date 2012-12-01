function createDocument(html, title) {
  var doc = document.implementation.createHTMLDocument(title)
  doc.documentElement.innerHTML = html
  return doc
}



function init(){
	var currentWindow = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser");

    var currBrowser = currentWindow.getBrowser();
    var currURL = currBrowser.currentURI.spec;
	
	var scripts = document.getElementsByTagName( 'script' );
var thisScriptTag = scripts[ scripts.length - 1 ];


	if("XMLHttpRequest" in window)
		xmlhttp=new XMLHttpRequest();
	if("ActiveXObject" in window)
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

	var source;
		
	xmlhttp.open('GET',currURL,true);
	xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4) {
		source = xmlhttp.responseText;
		
		var doc = createDocument(source, 'test')
		
							
		var scripts = doc.getElementsByTagName('script');
		
		var div1 = document.getElementById('codeBox');
		div1.setAttribute('value','alert("sdfsdf")');


		$.get(scripts[5].src, function(data){

		
		
		if(data == null || data == undefined )
			div1.setAttribute('value',data);

				});
						
			}
	};
	
	xmlhttp.send(null);void(0); 	


 

}


function getfile(el){
    v = el.getAttribute("label")
	
	alert(v)
	
	
}



function hello(){

	
    
    		var div1 = document.getElementById('codeBox');

    var code = div1.getAttribute('value');
  
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