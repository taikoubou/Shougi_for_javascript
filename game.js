function main(){
	init();
	for(var i=1;i<=9;i++)Piece_Data("hu",0,i,0);
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
function hoge(picName,n){
	var hu;
	hu=document.createElement("img");
	document.body.appendChild(hu);
	hu.src = "res/"+picName+".jpg";
	hu.style.position="absolute";
	hu = DisplayPos_init(n,hu);
	return hu;
}
function DisplayPos_init(i,pic){
	var x = 32*i+i-1;
	pic.style.left = x+"px";
	pic.style.top = "230px";
	return pic;
}
function Piece_Data(name,which,x,y){
	this.name = name;
	this.which = which; //敵か味方
	this.x = x;
	this.y = y;	
	this.pic = hoge(name,this.x);
}
