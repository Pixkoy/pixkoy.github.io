
function GetFileType2(afilename){
	afilename=afilename.toLowerCase();
	if( afilename.lastIndexOf(".mp3")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".wmv")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".wma")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".asf")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".avi")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".wav")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".mpg")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".mpeg")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".rm")!=-1){
		return "real";
	}else if( afilename.lastIndexOf(".rmvb")!=-1){
		return "real";
	}else if( afilename.lastIndexOf(".rms")!=-1){
		return "real";
	}else if( afilename.lastIndexOf(".flv")!=-1){
		return "flv";
	}else if( afilename.lastIndexOf(".gif")!=-1){
		return "wmp";
	}else if( afilename.lastIndexOf(".xml")!=-1){
		return "xml";
	}else if( afilename.lastIndexOf(".swf")!=-1){
		return "flash";
	}
	return "xml";
}
function EndWith(aString,aEnd){
	return aString.lastIndexOf(aEnd)!=-1 && aString.lastIndexOf(aEnd)==(aString.length- aEnd.length) 
}
function GetFilePath(aFilename){  	
	aFilename=aFilename.replace("mk:@MSITStore:", "");
	var ItemList=aFilename.split("\\");
	if(ItemList.length>1){
		ItemList.pop();
		ItemList.push("");
	}else{
		ItemList=aFilename.split("/");
		if(ItemList.length>1){
			ItemList.pop();
			ItemList.push("");
		}
	}
	return ItemList.join("/").split("%20").join(" ");
}
//在指定位置插入媒体播放器(wmp/swf/real)
function GetMediaPlayerWindow(strURL,intWidth,intHeight){   
	if(strURL.indexOf("http://")==-1){
		var root=GetFilePath(document.location.href);
		strURL = root+strURL; 
	}   
	//
	//音频调低高度
	if( EndWith(strURL, ".mp3") || EndWith(strURL, ".wma")){
		intHeight=0;
	}
	//
	var strID=Math.floor(Math.random()*1000);
	var strType=GetFileType2(strURL);
	var IconUrl="";
	var MediaName="";
	var controlBarHeight=0;  
	switch(strType) {
		case 'wmp':
			IconUrl="images/icon/wmp.gif";
			MediaName="Windows Media Player文件";
			controlBarHeight=45;
			break;
		case 'flash':
			IconUrl="images/icon/swf.gif";
			MediaName="Shockwave Flash 文件";
			controlBarHeight=0;
			 break;
		case 'real':
			IconUrl="images/icon/real.gif";
			MediaName="Real Player 文件";
			controlBarHeight=0;
			 break;
		case 'xml':
			IconUrl="images/icon/swf.gif";
			MediaName="沪江脚本";
			controlBarHeight=85;
			 break;
		case 'flv':
			IconUrl="images/icon/swf.gif";
			MediaName="Flash Video 文件";
			controlBarHeight=16;
			 break;
		default:
			IconUrl="images/icon/wmp.gif";
			MediaName="Windows Media Player文件";
			controlBarHeight=85;
	}
	var strHtml="";
	strHtml+="<div style='border:1px dotted #A3AAB0;width:"+ (intWidth+10) +"px;'>";
	strHtml+="	<div style='background-color: #E7EDF9;	padding: 5px;	font-weight: bold; color: #2F6B90; text-align: center'>";
	strHtml+="		<img src='" + IconUrl + "' alt='" +MediaName + "'/> " +MediaName + "</div>";
	strHtml+="		<div valign='middle' style='padding: 0px;text-align:center;background-color: #FFF;'>"; 
	strHtml+="		<div id='_player"+ strID +"' style='text-align:center; width:"+ (intWidth) +"px;'>";
	strHtml+="		<img src='images/icon/click2play.jpg' style='cursor:hand' alt='点击播放' border='0' onclick='ShowMedia2(\"player"+ strID +"\", \""+ strURL +"\", "+ (intWidth) +", "+ (intHeight+controlBarHeight) +");'/ >";
	strHtml+="		<br><a href='###' onclick='ShowMedia2(\"player"+ strID +"\", \""+ strURL +"\", "+ (intWidth) +", "+ (intHeight+controlBarHeight) +");' style='color:#FC6A00;font-weight:bold'>点击开始播放</a>&nbsp;&nbsp;<a href='"+ strURL +"' style='color:#FC6A00;font-weight:bold' target='_blank'>点击下载</a>";
	strHtml+="		</div>";
	strHtml+="		<div id='player"+ strID +"' style='display:none;margin-top:5px'>";
	strHtml+="		</div>";
	strHtml+="		<div id='__player"+ strID +"' style='text-align:center; width:"+ (intWidth) +"px;display:none'><a href='###' onclick='ShowMedia2(\"player"+ strID +"\",  \""+ strURL +"\", "+ (intWidth) +", "+ (intHeight+controlBarHeight) +");' style='color:#FC6A00;font-weight:bold'>点击关闭</a>&nbsp;&nbsp;<a href='http://www.hjenglish.com/images/hjplayer/voa.aspx?voa="+ escape(strURL) +"' style='color:#FC6A00;font-weight:bold' title='在线听写本文'  target='_blank'>听写本文</a>&nbsp;&nbsp;<a href='"+ strURL +"' style='color:#FC6A00;font-weight:bold' target='_blank'>点击下载</a>";
	strHtml+="		</div>";
	strHtml+="</div>";
	strHtml+="</div>"; 
	document.write(strHtml); 
}
//以指定的媒体填充固定Div
function ShowMedia2(strID,strURL,intWidth,intHeight) {  
	var objDiv=document.getElementById(strID); 
	if (!objDiv) return false;
	var objDiv2=document.getElementById("_"+strID);  
	var objDiv3=document.getElementById("__"+strID);  
	if (objDiv.style.display!='none') {
		objDiv.style.display='none';
		objDiv3.style.display='none';
		objDiv2.style.display='block';
		objDiv.innerHTML='';
	} else { 
		objDiv.style.display='block';
		objDiv2.style.display='none';
		objDiv3.style.display='block';
		objDiv.innerHTML=makemediaCode2(strURL,intWidth,intHeight);
	}
	return false;
}
function makemediaCode2(strURL,intWidth,intHeight){
	var strHtml;
	var strType=GetFileType2(strURL);
	switch(strType) {
		case 'wmp':
			strHtml="<object width='"+intWidth+"' height='"+intHeight+"' classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6'><param name='url' value='"+strURL+"'/><embed width='"+intWidth+"' height='"+intHeight+"' type='application/x-mplayer2' src='"+strURL+"'></embed></object>";
			break;
		case 'flash':
			strHtml="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+intWidth+"' height='"+intHeight+"'><param name='movie' value='"+strURL+"'/><param name='quality' value='high' /><embed src='"+strURL+"' quality='high' type='application/x-shockwave-flash' width='"+intWidth+"' height='"+intHeight+"'></embed></object>";
			break;
		case 'real': 
			var RealID=Math.floor(Math.random()*1000);
			strHtml="<object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='"+intWidth+"' height='"+intHeight+"'><param name='src' value='"+strURL+"' /><param name='controls' value='Imagewindow' /><param name='console' value='hj_real"+RealID+"' /><param name='autostart' value='true' /><embed src='"+strURL+"' type='audio/x-pn-realaudio-plugin' autostart='true' console='clip1' controls='Imagewindow' width='"+intWidth+"' height='"+intHeight+"'></embed></object><br/><object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='"+intWidth+"' height='44'><param name='src' value='"+strURL+"' /><param name='controls' value='ControlPanel' /><param name='console' value='hj_real"+RealID+"' /><param name='autostart' value='true' /><embed src='"+strURL+"' type='audio/x-pn-realaudio-plugin' autostart='true' console='clip1' controls='ControlPanel' width='"+intWidth+"' height='44'></embed></object>";
			break;
		case 'xml':
			strHtml="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+intWidth+"' height='"+intHeight+"'><param name='movie' value='http://www.hjenglish.com/images/hjplayer/hjplayer.swf'/><param name='quality' value='high' /><param name='flashvars' value='sw1="+ strURL +"' /><embed src='http://www.hjenglish.com/images/hjplayer/hjplayer.swf' quality='high' type='application/x-shockwave-flash' flashvars='sw1="+strURL+"' width='"+intWidth+"' height='"+intHeight+"'></embed></object>";
			break;
		case 'flv':
			strHtml="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+intWidth+"' height='"+intHeight+"'><param name='movie' value='http://www.hjenglish.com/images/hjplayer/hjflvplayer.swf'/><param name='quality' value='high' /><param name='flashvars' value='file="+ strURL +"' /><embed src='http://www.hjenglish.com/images/hjplayer/hjflvplayer.swf' quality='high' type='application/x-shockwave-flash' flashvars='file="+strURL+"' width='"+intWidth+"' height='"+intHeight+"'></embed></object>";
			break; 
	}
	return strHtml;
}