window.onload=displayImage;var imagesArray=["avatar2.jpg","avatar3.jpg","cat.jpg","ciekawsze.jpg","swinia.jpg","anime4.gif","niewiem.gif","killerek.jpg","saulgoodman.jpg"];function displayImage(){var num=Math.floor(Math.random()*(imagesArray.length));document.getElementById("main_image1").src="assets/img/animes/"+imagesArray[num];}