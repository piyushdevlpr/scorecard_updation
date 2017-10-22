var p1score = document.querySelector("#p1score");
var p1button = document.querySelector("#p1button");
var reset = document.querySelector("#reset");
var numinput = document.querySelector("input");
var winningscore = document.querySelector("#winningscore");
var p1present = 0 ;
var p2score = document.querySelector("#p2score");
var p2button = document.querySelector("#p2button");
var p2present = 0 ;
var win = 5;
var gameover = false ;

p1button.addEventListener("click",function(){
    if(!gameover){p1present++;
	p1score.textContent = p1present;}
	if(p1present === win){
		p1score.classList.add("colour");
		gameover = true ;
	}
	
});
p2button.addEventListener("click",function(){

    if(!gameover){
    	p2present++;
	p2score.textContent = p2present;
}
	if(p2present === win){
		p2score.classList.add("colour");
		gameover = true ;
	}
});
reset.addEventListener("click",function(){
    p1present=0;
    p2present=0;
    p1score.textContent = p1present;
    p2score.textContent = p2present;
    p1score.classList.remove("colour");
    p2score.classList.remove("colour");
    gameover = false ;

});
numinput.addEventListener("change",function(){
	winningscore.textContent = numinput.value;
	win = Number(numinput.value);
})
