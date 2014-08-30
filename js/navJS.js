var originalNavClasses;

function toggleNav() {
    var elem = document.getElementById("navList");
    var classes = elem.className;
    if (originalNavClasses === undefined) {
        originalNavClasses = classes;
    }
    elem.className = /expanded/.test(classes) ? originalNavClasses : originalNavClasses + ' expanded';
}

$(window).on('resize',myfunction);

function myfunction() {
    if (screen.width >= 550) {
	// download complicated script
	// swap in full-source images for low-source ones
	$('#navList').addClass("expanded");
	}
}
