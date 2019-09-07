var update;
function updatingPage()
{
  update = setInterval(randomPicSelector, 1000);
}

function randomPicSelector()
{
  var images = document.querySelectorAll("img");
  for(let i = 0; i < images.length; i++)
  {
    var pictures = ["https://beta.techcrunch.com/wp-content/uploads/2017/07/excited-minions.gif", "https://incitrio.com/wp-content/uploads/2015/06/Minions-Gif-pic1.gif", "https://thumbs.gfycat.com/TimelyMajesticEel-size_restricted.gif"];

    var randomPic = pictures[Math.floor(Math.random()*pictures.length)];
    images[i].src = randomPic;

  }
}

updatingPage();
