function main(){
	init();
	for(var i=1;i<=9;i++)hoge(i);
}

function init(){
	var board=new Array();
	for(var i=0;i<9;i++){
		board[i] = new Array();
		for(var j=0;j<9;j++){
			board[i][j] = document.createElement("img");
			document.body.appendChild(board[i][j]);
			board[i][j].src = "res/ban.jpg";
			board[i][j].style.position="absolute";
		}
	}
	for(var x=32,i=0;i<9;x+=33,i++){
		for(var y=32,j=0;j<9;y+=33,j++){
			board[i][j].style.left=x+"px";
			board[i][j].style.top=y+"px";
		}
	}
}
function hoge(i){
	var hu;
	hu=document.createElement("img");
	document.body.appendChild(hu);
	hu.src = "res/hu.jpg";
	hu.style.position="absolute";	

	var x = 32*i+i-1;
	hu.style.left = x+"px";
	hu.style.top="230px";
}
function Piece_Data(name,which,x,y){
	this.name = name;
	this.which = which; //敵か味方
	this.x = x;
	this.y = y;
}
