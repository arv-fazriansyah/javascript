function $(n) {
	return document.getElementById(n)
}
function getQR(n) {
	if(""==$("nomor").value)
	      return $("nomor").focus(),!1;
	if(""==$("pesan").value)
	        return $("pesan").focus(),!1;
	var e=$("nomor").value.split(/[^0-9]/).join("").replace(/^[0]/,"62"),
	                        t=$("pesan").value,
	                        o="https://wa.me/"+e+"?text="+encodeURIComponent(t);
	n=o;
	return $("result").value=o,
	                      QRCode.toCanvas(document.getElementById("canvas"),n,
	                                                               function(n) {
	}
	),!1
}
function copyLink() {
	$("result").select(),
	    document.execCommand("copy");
	     // $("keterangan-tercopy").classList.toggle('d-none');
}
function testLink() {
	var n=$("result").value;
	window.open(n,"_blank")
}
function downloadQR() {
	var n=$("link"),
	e="QR Code Link Whatsapp "+".png";
	n.setAttribute("download",e),
	n.setAttribute("href",canvas.toDataURL("image/png").replace("image/png","image/octet-stream")),
	n.click()
}
function resetQR() {
	window.location.href=window.location.href
}
window.onload=function() {
	$("nomor").focus()
	    $("generate-wa").onclick=getQR,
	    $("copy-link").onclick=copyLink,
	    $("download-qr").onclick=downloadQR,
	    $("test-link").onclick=testLink,
	    $("reset-qr").onclick=resetQR
};
