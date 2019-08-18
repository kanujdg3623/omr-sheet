var x="";
var arr, chem, phy;
function print(){
	bio=Number(document.getElementById("bio").value);
	chem=Number(document.getElementById("chem").value);
	phy=Number(document.getElementById("phy").value);
	arr=new Array(bio+chem+phy);
	for(var i=1;i<=bio||i<=chem||i<=phy;i++)
	{
		x+="<tr>";
		if(i<=bio){
			x+="<td>"+i+"</td>";
			x+="<td><input class='A' name='"+i+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='B' name='"+i+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='C' name='"+i+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='D' name='"+i+"' type='button' onclick='handle(event)'></td>";
		}
		else x+="<td colspan='5'></td>";
		if(i<=chem){
			x+="<td class='partition'>"+(i+bio)+"</td>";
			x+="<td><input class='A' name='"+(i+bio)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='B' name='"+(i+bio)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='C' name='"+(i+bio)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='D' name='"+(i+bio)+"' type='button' onclick='handle(event)'></td>";
		}
		else x+="<td colspan='5'></td>";
		if(i<=phy){
			x+="<td class='partition'>"+(i+bio+chem)+"</td>";
			x+="<td><input class='A' name='"+(i+bio+chem)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='B' name='"+(i+bio+chem)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='C' name='"+(i+bio+chem)+"' type='button' onclick='handle(event)'></td>";
			x+="<td><input class='D' name='"+(i+bio+chem)+"' type='button' onclick='handle(event)'></td>";
		}
		x+="</tr>";
	}
	if(bio+chem+phy) x+="<tr align='center'><td colspan='15'><br><button id='submit' onclick='result()'>SUBMIT</button></td></tr>";
	document.getElementById("omr").innerHTML=x;
}

function handle(e){
	e.target.style.backgroundColor=e.target.style.backgroundColor!="black"?"black":"";
	document.getElementsByName(e.target.name).forEach(function(x){
		if(x.className!=e.target.className)
		x.style.backgroundColor="";
	});
}
function result(){
	if(!confirm("Do you want to submit?")) return;
	for(var i=1;i<=arr.length;i++)
	{
		var attempt=false;
		document.getElementsByName(i).forEach(function(opt){
			if(opt.style.backgroundColor=="black"){
				arr[i-1]=opt.className;
				attempt=true;
			}
		});
		if(!attempt) arr[i-1]=" ";
	}
	x="";
	x+="<tr>";
	if(bio){
		x+="<th><h1>Biology</h1></th>";
	}
	if(chem){
		x+="<th><h1>Chemistry</h1></th>";
	}
	if(phy){
		x+="<th><h1>Physics</h1></th>";
	}
	x+="</tr>";
	document.getElementsByTagName("thead")[0].innerHTML=x;
	x="<tr style='vertical-align:top'>";
	if(bio){
		x+="<td><h3>";
		for(var i=0;i<bio;i++){
			x+=(i+1)+":   "+arr[i];
			x+="<br>";
		}
		x+="</h3></td>";
	}
	if(chem){
		x+="<td><h3>";
		for(var i=bio;i<(bio+chem);i++){
			x+=(i+1)+":   "+arr[i];
			x+="<br>";
		}
		x+="</h3></td>";
	}
	if(phy){
		x+="<td><h3>";
		for(var i=bio+chem;i<(bio+chem+phy);i++){
			x+=(i+1)+":   "+arr[i];
			x+="<br>";
		}
		x+="</h3></td>";
	}
	x+="</tr>";
	document.getElementsByTagName("tbody")[0].innerHTML=x;
}