

//隐藏答案区的感应代码
function clickHandler() {  
	var targetId, srcElement, targetElement;
	srcElement = window.event.srcElement; 
	if (srcElement.className == "Outline") {
		targetId = srcElement.id + "details";
		targetElement = document.all(targetId); 
		if (targetElement.style.display == "none" || targetElement.style.display == "") {
			targetElement.style.display = "block";
		} else {
			targetElement.style.display = "none";
		}
	}
}
document.attachEvent("onclick", clickHandler); 


