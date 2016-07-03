/* Copyright 2016
by iyortml
ads pro
//jQuery-ads-by-coinurl-main.js
*/
$(document).ready(function(){
	var aa=$("#courl").val();
	if (aa == null) {
		window.location.href = "https://plus.google.com/+iyoradiotipmasalampau";
	};
	$("#courl").attr("href","https://plus.google.com/+iyoradiotipmasalampau");
});

/* Ads Number 1 */
$(document).ready(function(){
	$("#adsBycourl").click(function(){
		$("#adscourl").slideToggle()
	});
});
function closedUnitcourl() {
	var r = confirm("Apakah iklan ini mengganggu? klik OK untuk menghapus iklan, atau klik Cancel dan membiarkan iklan ini tayang");
	if (r == true) {
		window.location.assign("http://j.gs/2428724/coinurl");
	}
	else {
	}
}
function adsBycourlUnit() {
	window.location.assign("http://j.gs/2428724/coinurl");
}
/* End Ads Number 1 */
