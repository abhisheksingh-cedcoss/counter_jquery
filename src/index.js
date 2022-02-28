$(document).ready(function() {
	var counts = 0;
	$(".btn").click(function() {
		counts += +1;
		if(counts<10){
			counts1 = "0" + counts
		}else{
			counts1 = counts;
		}
		$(".counts").text(counts1);
	});
	
	$(".reset").click(function(e){
		counts = 0;
		counts1 = "0"+counts;
		$(".counts").text(counts1);
	});
})