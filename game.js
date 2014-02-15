function main(){
	init();
	for(var i=1;i<=9;i++) Piece_Data("hu",0,i,0);
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
function DisplayPos(x,y,pic){
	var dx = Convert_PosX(x);
	var dy = Convert_PosY(y);
	pic.style.left = dx+"px";
	pic.style.top = dy+"px";
	return pic;
}
function Piece_Data(name,which,x,y){ //クラス
	this.name = name;
	this.which = which; //敵か味方
	this.x = x;
	this.y = y;	
	this.pic = PreparationImg(name,this.x){
		var hu;
		hu=document.createElement("img");
		document.body.appendChild(hu);
		hu.src = "res/"+picName+".jpg";
		hu.style.position="absolute";
		hu = DisplayPos(n,7,hu);
		return hu;
	}
}
function Convert_PosX(x){
	return 32*x+x-1;
}
function Convert_PosY(y){
	return 32*y+y-1;
}
