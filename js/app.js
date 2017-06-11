
function reqListener () {
  var posts = JSON.parse(this.responseText).data.children;
  var postContainer = document.getElementById('container');

  for(var p = 0; p < posts.length; p++){

    for(var i = 0; len= posts[p].data.preview.images, i < len.length ; i++){

      var postBlock = document.createElement('div');
      postBlock.setAttribute('class','postBlock');
      postBlock.style.backgroundColor = "white";
      postBlock.style.margin = '3vh';
      postBlock.style.padding = "1vh";
      postBlock.style.height = "40vh";
      postBlock.style.width = "30vw";
      postBlock.style.fontSize = "2vh";
      postBlock.style.boxShadow = "0 10px 6px -6px black";
      postBlock.addEventListener('mouseover', function(){
        this.style.border = "1vh solid #F15A29";
        this.style.margin = '2vh';
      });
      postBlock.addEventListener('mouseout', function(){
        this.style.border = "none";
        this.style.margin = '3vh';
      });
      postBlock.addEventListener('click', function(){

      });
      postContainer.appendChild(postBlock);

      var imageBlock = document.createElement('img');
      imageBlock.style.backgroundImage =`url(${len[i].source.url})`;
      imageBlock.style.height = "20vh";
      imageBlock.style.width = "30vw";
      imageBlock.style.display = 'flex';
      // imageBlock.style.overflow = "hidden";
      imageBlock.style.backgroundSize = "cover";
      imageBlock.style.backgroundPosition = "center";

      postBlock.appendChild(imageBlock);

      var titleBlock = document.createElement('strong');
      titleBlock.innerHTML = posts[p].data.title;
      titleBlock.style.padding = "1.5vw";
      titleBlock.style.display = "flex";
      titleBlock.style.maxHeight = "2.9vh";
      titleBlock.style.maxWidth = "25vw";
      titleBlock.style.overflow = 'scroll';
      postBlock.appendChild(titleBlock);

      var dot = '\u00B7';
      var authorBlock = document.createElement('div');
      authorBlock.innerHTML = `by ${posts[p].data.author} ${dot} score: ${posts[p].data.score} ${dot} submitted ${posts[p].data.created} `;
      authorBlock.style.padding = "1.5vh";
      postBlock.appendChild(authorBlock);
    }
  }
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/dogpictures/.json");
oReq.send();