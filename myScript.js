function ss(){
			var a=document.getElementById("demo").value;
			var b=document.getElementById("pass").value;
			if(a=="AP081998" && b=="cyber@1998"){
				document.getElementById("new").innerHTML="<iframe src=index2.html></iframe>";
				
			
			}
			
			else if(a=="F7C7F591"){
				
				document.getElementById("demo1").innerHTML="<audio controls><source src=index2.mp3 type=audio/mp3></audio>";
				
				
			}
			
			
			
			else{
			document.getElementById("demo1").innerHTML="<p>Enter Correct ID and Password</p>";
			}
			
			}
