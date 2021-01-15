function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }
  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(event) {
    
    const id = event
      .dataTransfer
      .getData('text');
      createCookie(id,event.target.id,7);
      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
      event
    .dataTransfer
    .clearData();
  }

  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  function deleteAllCookies(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    eraseCookie(cookies[i].split("=")[0]);
    location.reload(true);
 }
  
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }
  $(document).ready(function(){
    $('#example-origin > div').map(function() {
      var x = readCookie(this.id);
      if(x){
        const draggableElement = document.getElementById(this.id);
      const dropzone = document.getElementById(x);
      dropzone.appendChild(draggableElement);
      }
    });
    $('#reset').click(function(){
      deleteAllCookies();
    })
  })
