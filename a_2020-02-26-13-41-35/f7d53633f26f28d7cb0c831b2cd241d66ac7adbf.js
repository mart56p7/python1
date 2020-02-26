$( document ).ready(function() {
    $("#me").click(function () {
        alert("Hey this is me!");
    });
	
	$("#klaus_internal").click(function () {
        alert("Hey this is Klaus internal!");
    });
	
	$("#klaus_external").click(function () {
        alert("Hey this is Klaus external!");
    });
	
	$("#guess_external").click(function () {
        alert("Hey this is our special external guest, who knows who it is?");
    });
});