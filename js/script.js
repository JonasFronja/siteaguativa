			function aumenta(obj){
			    obj.height=obj.height+50;
			    
				
			}
			 
			function diminui(obj){
				obj.height=obj.height-50;
				
			}

			function index1() {
  				document.getElementById('lz1').style.zIndex = 3;
  				document.getElementById('lz2').style.zIndex = -1;
  				document.getElementById('lz3').style.zIndex = -1;
			}

			function indexr1() {
  				document.getElementById('lz1').style.zIndex = 0;
  				document.getElementById('lz2').style.zIndex = 2;
  				document.getElementById('lz3').style.zIndex = 0;
			}
			function index3() {
  				document.getElementById('lz1').style.zIndex = -1;
  				document.getElementById('lz2').style.zIndex = -1;
  				document.getElementById('lz3').style.zIndex = 3;
			}

			function indexr3() {
  				document.getElementById('lz1').style.zIndex = 0;
  				document.getElementById('lz2').style.zIndex = 2;
  				document.getElementById('lz3').style.zIndex = 0;
			}
			