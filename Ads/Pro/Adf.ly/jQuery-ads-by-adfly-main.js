/* Copyright 2016
by iyortml
ads pro
//jQuery-ads-by-adfly-main.js
*/
$(document).ready(function(){
	var aa=$("#adfly").val();
	if (aa == null) {
		window.location.href = "https://plus.google.com/+iyoradiotipmasalampau";
	};
	$("#adfly").attr("href","https://plus.google.com/+iyoradiotipmasalampau");
});

/* Ads Number 1 */
$(document).ready(function(){
	$("#adsByadfly").click(function(){
		$("#adsadfly").slideToggle()
	});
});
function closedUnitadfly() {
	var r = confirm("Apakah iklan ini mengganggu? klik OK untuk menghapus iklan, atau klik Cancel dan membiarkan iklan ini tayang");
	if (r == true) {
		window.location.assign("http://j.gs/2428724/adfly");
	}
	else {
	}
}
function adsByadflyUnit() {
	window.location.assign("http://j.gs/2428724/adfly");
}
/* End Ads Number 1 */
