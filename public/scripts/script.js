window.app = () => {
  let scrollY = 0;
  let header = document.getElementsByClassName('navbar')[0];

  document.querySelectorAll('a[device-link]').forEach(element => {
    const devices = JSON.parse(element.getAttribute('href'));
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      element.href = devices.mobile;
    } else {
      element.href = devices.desktop;
    }
  });

  if (!header) return;
  const changeHeader = () => {
    if (window.scrollY === 0) {
      header.classList.add('clear');
      header.classList.remove('invisible');
    } else {
      header.classList.remove('clear');
      if (window.scrollY > scrollY) {
        header.classList.add('invisible');
      } else {
        header.classList.remove('invisible');
      }
    }
    scrollY = window.scrollY;
  };
  window.onscroll = e => changeHeader();
  window.ontouchmove = e => changeHeader();
};

window.app();


//Slider
var w = window,
	contentHeight = w.innerHeight,
	contentWidth = w.innerWidth,
	sectionContentHeight = contentHeight-280;
function resizeContentDivs(){
	//window.alert(contentWidth+"- 30 = "+sectionContentHeight);
	var sectionContentClass = document.getElementsByClassName('sectionContent');
	
	for (var i = 0; i < sectionContentClass.length; i++){
		sectionContentClass[i].style.minHeight = sectionContentHeight+"px";
	}
	
	// Add padding to all of the sectionContent's except for the last one beacuse there is
	// no need for a spacer at the bottom
	var minusOneClass = sectionContentClass.length - 1;
	for (var j = 0; j < minusOneClass ; j++){
		sectionContentClass[j].style.paddingBottom = "100px";
	}
}
window.onload = resizeContentDivs;
window.onresize = resizeContentDivs;

// Scroll to the top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
