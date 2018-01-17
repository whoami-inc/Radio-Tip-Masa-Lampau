/* Copyright 2016
by iyortml
ads pro
*/
$(document).ready(function(){
	var aa=$("#rtmlads").val();
	if (aa == null) {
		window.location.href = "https://plus.google.com/+iyoradiotipmasalampau";
	};
	$("#rtmlads").attr("href","https://plus.google.com/+iyoradiotipmasalampau");
});

/* Ads Number 1 */
$(document).ready(function(){
	$("#adsProBy").click(function(){
		$("#adsOwner").slideToggle()
	});
});
function closedUnitRTML() {
	var r = confirm("Apakah iklan ini mengganggu? klik OK untuk menghapus iklan, atau klik Cancel dan membiarkan iklan ini tayang");
	if (r == true) {
		window.location.assign("http://q.gs/2428724/ads-rtml");
	}
	else {
	}
}
function adsByRTMLUnit() {
	window.location.assign("http://q.gs/2428724/ads-rtml");
}
/* End Ads Number 1 */
