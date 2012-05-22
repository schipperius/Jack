function ExtLinks() {
	var x = document.getElementsByTagName('a');
	for (var i=0;i<x.length;i++) {
		if (x[i].className == 'external') {
			x[i].onclick = function () {
				window.open(this.href); return false;
			}
			//x[i].innerHTML += '<img class\"ico\" src="http://www.marceltimmer.nl/ico_extlink.gif" border="0" alt="This link opens a new window" title="This link opens a new window">';
		}
	}
}

function ImgOpenLarge() {
	var x = document.getElementsByTagName('a');
	for (var i=0;i<x.length;i++) {
		if (x[i].className == 'imglarge') {
			x[i].onclick = function () {
				window.open(this.href); return false;
			}
			x[i].innerHTML += '<img class\"ico\" src="http://www.marceltimmer.nl/ico_extlink.gif" border="0" alt="This link opens a new window" title="This link opens a new window">';
		}
	}
}

function ImgDetails() {
	var x = document.getElementsByTagName('a');
	for (var i=0;i<x.length;i++) {
		if (x[i].className == 'imglarge') {
			var details = x[i].firstChild.title;
			var imgname = x[i].firstChild.src;
			var detailstring = '<a href="imagedetails.php?image='+ imgname +'&title='+ details +'">Details</a> ';
			x[i].insertAdjacentHTML("afterEnd",detailstring);
		}
	}
}

function imagehovers() {
	var x = document.getElementsByTagName('img');
	for (var i=0;i<x.length;i++) {
		if (x[i].className == 'imgmouseover') {
			var image = x[i];
			var url = image.src;
			var urlparts = url.split('/');
			var newurl = '';
			for (var i=0;i<(urlparts.length-1);i++) {newurl += urlparts[i]+'/';}
			newurl1 = newurl+'omo_'+urlparts[urlparts.length-1];
			image.src=newurl1;

			x[i].onmouseover = function () {
				var name = this.src;
				this.src=name.replace('omo_','');
			}
			x[i].onmouseout = function () {
				var url = this.src;
				var urlparts = url.split('/');
				var newurl = '';
				for (var i=0;i<(urlparts.length-1);i++) {newurl += urlparts[i]+'/';}
				newurl1 = newurl+'omo_'+urlparts[urlparts.length-1];
				this.src=newurl1;
			}
		}
	}
}

function popup(url,width,height) {
	var newwindow = "";
	n_height = parseFloat(height)+45;
	n_width = parseFloat(width)+30;
	if (newwindow.location && !newwindow.closed) {
		newwindow.location.href = url;
	}
	else {
		newwindow=window.open(url,"popup","left=20,top=20,height="+n_height+",width="+n_width+",resizable=yes,scrollbars=no,dependent=no");
		if (!newwindow.opener) newwindow.opener = self;
		if (window.focus) {newwindow.focus()}
	}
}

function loadFrame() {
	document.getElementById('placeholder').style.display='none';
	document.getElementById('frame').style.display='block';
}

function functions() {
	//imagehovers();
	//ImgDetails();
	ExtLinks();
	//ImgOpenLarge();
	//loadFrame();
}