<!DOCTYPE html>
<html>
	<head>
		<title> Renderer </title>
		<script type="text/javascript" src="oscript.js"></script>
<style>
body {
	background-color: #99C6E8;
}
.header {
	overflow: hidden;
	background-color: #333;
	width:100%;
	margin-bottom: 10px;
}
.columns {
	float: left;
	width: 33.33%;
}
.row:after {
	content: "";
	display: table;
	clear: both;
}
#i01 {
	color: green;
	text-align: center;
}
#i02 {
	font-family:"Courier";
}
.shadow {
	text-shadow: 2px 2px 2px red;
}
.button-container {
	text-align: center;
}
.button {
	display: inline-block;
	margin-left: 20px;
	margin-right: 20px;
}
.footer {
	float: left;
	width: 50%;
}
.block {
	border: 2px solid green;
	border-radius: 25px;
	background-color: #4CAF50;
	padding: 5px 5px;
	font-size: 16px;
	font-family: "courier";
	cursor: pointer;
	text-align: center;
}
.block:hover {
	background-color: #ddd;
	color: black;
}
input[type=text] {
	margin: 8px 0;
	padding: 5px 5px 5px 5px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 25px;
}

p{
	color: solid green;
  	font-family: courier;
  	font-size: 125%;
}

.radio {
  /* secret sauce to styling radio buttons */
  appearance: none;
  -webkit-appearance: none;
  -mozilla-appearance: none;
  /* Aligning your label text and your radio */
  vertical-align: text-bottom;
}

/* Setting the checked styles */
.radio:checked {
  border-color: pink;
}

.circle{
  border: 10px solid red;
  border-radius: 100%;
}

/* radio outer circle */
.circle:checked {
  border-width: 5px;
}

/* radio inner negative circle */
.circle:checked:before {
  content: "";
  height: 10px;
  width: 10px;
  display: block;
}
.graph{
	margin: 50px;
	height: 50%;
	text-align: center;
	background-color: #53FF24;
}
.graph svg {
    height: 100%;
    width: auto;
    align-self: center;
}

.q_out{
	margin: 20px 30px 30px 30px;
	margin-right: 50px;
	height: 275px;
	width: 95%;
	border: 2px inset #111111;
}

iframe{
	padding: 5x;
	height: 90%;
	width: 100%;
	overflow: auto;
	border: none;
	border-top: 1px ridge #AAAAAA;
}

h3{
	font-family: "Courier";
	font-weight:100;
	font-size:18px;
	color: #222222;
	margin:0 0 0 1px;
	padding-left: 3px;
	background: #FFF;
}
</style>
	</head>
	<body>
		<div class="header shadow" id="i02"> <h1 id="i01"> Graph Data Digest Document Format </h1> </div>
		<form method="get" id="myForm">
		<div class="row">
			<div class="columns">
				<span id="i02"> Subject: </span> <input type="text" size="50" autofocus name="Subject" placeholder="Subject" autocomplete="on" id="subjectBox">
				<br>
			</div>
			<div class="columns">
				<span id="i02"> Predicate: </span> <input type="text" size="50" autofocus name="Predicate" placeholder="Predicate" autocomplete="on" id="predicateBox">
				<br>
			</div>
			<div class="columns">
				<span id="i02"> Object: </span> <input type="text" size="50" autofocus name="ObjecT" placeholder="Object" autocomplete="on" id="objectBox"> 
				<br>
			</div>
		</div>
		<br><br>
		<div class="button-container">
		<div>
			<input type="button" class="block button" id="queryButton" value="Query" onclick="queryFun('Search')">
			<input type="button" class="block button" id="createButton" value="Create" onclick="queryFun('Create')">
			<input type="button" class="block button" id="deleteButton" value="Delete" onclick="queryFun('Delete')">
			<!-- <button id="xyz" onclick="queryFun()">Click</button> -->
			<br>
			<br>
			<p> <b>Choose how to parse output: </b></p>
  			<input class="radio circle" type="radio" id="triples" name="shapes" checked>
  			<label for="circle" style = "font-family:courier" >Triples</label>
			&nbsp &nbsp &nbsp &nbsp
			<input class="radio circle" type="radio" id="svg" name="shapes">
 			<label for="circle" style = "font-family:courier">SVG</label>
		</div>
		</div>
		</form>
		<div class="q_out" id="list">
			<h3>Result:</h3>
			<iframe id='list_frame' src="http://127.0.0.1:3000/q_out_list.html"></iframe>
		</div>
		<div class="q_out" id="graph">
			<h3>Result:</h3>
<<<<<<< HEAD
			<iframe>
			<script src="https://d3js.org/d3.v4.min.js"></script>
			<script src="https://unpkg.com/viz.js@1.8.0/viz.js" type="javascript/worker"></script>
			<script src="https://unpkg.com/d3-graphviz@1.3.1/build/d3-graphviz.min.js"></script>
			<script src="renderer.js"></script> 
		</iframe>
||||||| merged common ancestors
			<div id="graph">	
			</div>
			<script src="https://d3js.org/d3.v4.min.js"></script>
			<script src="https://unpkg.com/viz.js@1.8.0/viz.js" type="javascript/worker"></script>
			<script src="https://unpkg.com/d3-graphviz@1.3.1/build/d3-graphviz.min.js"></script>
			<script src="renderer.js"></script> 
=======
>>>>>>> 3b5abecaf172f6084ce32817a85b6a9f0d3d7f9e
		</div>
		<script>
<<<<<<< HEAD
			var str=window.location.search.substring(1);
			var updatedURI="";
||||||| merged common ancestors
			var updatedURI="";
=======
>>>>>>> 3b5abecaf172f6084ce32817a85b6a9f0d3d7f9e
			function queryFun(type)
			{
				var updatedURI="";
				var str=window.location.search.substring(1);
				var url=window.location.href;
				var parts=url.split('?');
				if(parts.length>0)
				{
					var dontChange=parts[0];
					var sub=document.getElementById("subjectBox").value;
					var obj=document.getElementById("objectBox").value;
					var pred=document.getElementById("predicateBox").value;	
					var shapes="on";
					newQuery='type='+type+'&'+'Subject='+sub+'&Predicate='+pred+'&ObjecT='+obj+'&shapes='+shapes;
					updatedURI=dontChange+'?'+newQuery;
					window.history.replaceState({},document.title,updatedURI);
					window.location.reload(true);
					document.getElementById('list').contentWindow.location.reload(true);
				}
			}
			var str = window.location.search.substring(1);
			if(!str)
			{
			    document.getElementById('list').style.display="none";
    			document.getElementById('graph').style.display="none";
			}

			else 
			{
				if(document.getElementById('triples').checked)
				{
    				document.getElementById('list').style.display="block";
					document.getElementById('graph').style.display="none";
					document.getElementById('list_frame').location.reload(true);
				}
				else(document.getElementById('svg').checked)
				{
    				document.getElementById('list').style.display="none";
    				document.getElementById('graph').style.display="block";
				}
			}
		</script> 	
	</body>
</html>