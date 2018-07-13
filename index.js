var next= 1;
var prev = 5;
function image1(y){
	var url = "url(\"images/image"+y+".jpg\")";
	document.getElementById("bigsize").style.backgroundImage = url;
	document.getElementById("bigsize").style.border = "2px solid coral";
	next=y;
	prev=y;
}

function nopic() {
	 document.getElementById('bigsize').style.visibility = "hidden";
	

}
function pic1() {
	 document.getElementById('bigsize').style.visibility = "visible";
	// image1(1);

}

var x = document.getElementById('im1').addEventListener("click",function(){
		var url1 = "url(\"images/image1.jpg\")";
	document.getElementById("bigsize").style.backgroundImage = url1;
	document.getElementById("bigsize").style.border = "2px solid coral";
});

function after(){
	next++;
	if (next ==6) {
	next =1;	
	}
	image1(next);
}

function before(){
	prev--;
	if (prev ==1) {
		prev =5;
	}
		image1(prev);
}