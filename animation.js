<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		#container{
			width: 500px;
			height: 500px;
			position: relative;
			background:blue;
		}
		#animate{
			width: 50px;
			height: 50px;
			position: absolute;
			background-image: url(1.ico);
			background-size: cover;
			background-repeat: no-repeat;
		}
		#animate1{
			width: 50px;
			height: 50px;
			position: absolute;
			right: 0px;
			background-image: url(2.ico);
			background-size: cover;
			background-repeat: no-repeat;
		}
	</style>
</head>
<body>
	<p>
		<button onclick="Move()">Click Me</button>
	</p>
	<div id="container">
		<div id="animate"></div>
		<div id="animate1"></div>
	</div>

	<script type="text/javascript">
		function Move(){
			var x=document.getElementById("animate");
			var y=document.getElementById("animate1");
			var position=0;
			var SI=setInterval(frame,100);
			function frame(){
				if(position==450){
					clearInterval(SI);
					}
				else{
					position++;
					x.style.top=position+'px';
					x.style.left=position+'px';
					y.style.top=position+'px';
					y.style.right=position+'px';
				}
			}
		}
	</script>

</body>
</html>
