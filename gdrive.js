function $(e) {
	return document.getElementById(e)
}
function select(e) {
	return document.querySelector(e)
}
function getButton() {
	var e,o,t,n=$("driveID").value;
	-1!=n.indexOf("google.com")?(e=n.indexOf("d/"),o=n.indexOf("/edit"),t="https://docs.google.com/$type/d/"+n.slice(e+2,o)+"/export?format=pdf",t=-1!==n.indexOf("document")?t.replace("$type","document").split("pdf").join("docx"):-1!==n.indexOf("spreadsheet")?t.replace("$type","spreadsheets").split("pdf").join("xlsx"):(-1!==n.indexOf("presentation")||(o=n.indexOf("/view")),"https://drive.google.com/uc?export=download&id="+n.slice(e+2,o)),$("output").value=t):$("driveID").value=""
}
function copy() {
	$("output").select(),document.execCommand("copy")
}
function download() {
	var e=$("output").value;
	window.open(e,"_blank")
}
function reset() {
	window.location.href=window.location.href
}
window.onload=function() {
	$("driveID").focus(),$("get-button").onclick=getButton,$("copy").onclick=copy,$("download").onclick=download,$("reset").onclick=reset
}
