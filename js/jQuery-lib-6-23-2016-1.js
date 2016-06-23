/* License by IyoRTML */

$(document).ready(function(){
	$("#info").click(function(){
		$("#show-info").slideToggle()
	});
});

$(document).ready(function(){
	var aa=$("#radiotipmasalampau").val();
	if (aa == null) {
		window.location.href = "https://plus.google.com/+iyoradiotipmasalampau";
	};
	$("#radiotipmasalampau").attr("href","https://plus.google.com/+iyoradiotipmasalampau");
});

function closedUnit() {
    var r = confirm("Apakah iklan ini mengganggu? klik OK untuk menghapus iklan, atau klik Cancel dan membiarkan iklan ini tayang");
    if (r == true) {
		$("#radiotipmasalampau").hide()
    } else {
	}
}

function adsUnit() {
	window.location.assign("http://radiotipmasalampau.blogspot.com");
}

$(document).ready(function(){
	var aa=$("#mycredit").val();
	if (aa == null) {
		window.location.href = "https://plus.google.com/+iyoradiotipmasalampau";
	};
	$("#mycredit").attr("href","https://plus.google.com/+iyoradiotipmasalampau");
});

$(document).ready(function(){
  var copyTextareaBtn = document.querySelector('.rtmlcopybtn');
	copyTextareaBtn.addEventListener('click', function(event) {
		var copyTextarea = document.querySelector('.rtmlareacopy');
		copyTextarea.select();
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		} catch (err) {
		  console.log('Oops, unable to copy');
		}
	});
});
