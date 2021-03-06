function createDocument(html, title) {
  var doc = document.implementation.createHTMLDocument(title)
  doc.documentElement.innerHTML = html
  return doc
}

function createMenuItem(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menuitem"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function clear(){

	
	var elem=document.getElementById('resultBox');
	elem.setAttribute('value','');


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

	var popup = document.getElementById("fileList"); // a <menupopup> element
	

		
	xmlhttp.open('GET',currURL,true);
	xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4) {
		source = xmlhttp.responseText;
		
		var doc = createDocument(source, 'test')
		
							
		var scripts = doc.getElementsByTagName('script');
		
		var div1 = document.getElementById('codeBox');
		div1.setAttribute('value','alert("sdfsdf")');

		for(var j=0;j<scripts.length;j++){
			var last = createMenuItem(scripts[j].src);
			
			if(scripts[j].src == "")
				popup.appendChild("JS Code Block "+j);
			else
				popup.appendChild(last);

			
			
		}
				

		$.get(scripts[0].src, function(data){		
			div1.setAttribute('value',data);

				});
						
			}
	};
	
	xmlhttp.send(null);void(0); 	


 

}


function getfile(el){
    v = el.getAttribute("label")

    var div1 = document.getElementById('codeBox');

	$.get(v, function(data){		
			div1.setAttribute('value',data);

				});
	
	
	
}



function hello(){

	
    
    		var div1 = document.getElementById('codeBox');

    var code = div1.getAttribute('value');
  
            JSLINT(code);
            
            var results = JSLINT.data();
           
           
  var elem=document.getElementById('resultBox');
  
  var allErrors="";
  
  for (var j=0;j<results.errors.length;j++){
	  
	  allErrors = allErrors + " "+ results.errors[j].line + ": "+ results.errors[j].reason + "\n";
	  
	  
	  
  }
  
  elem.setAttribute('value',allErrors );

           
           
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