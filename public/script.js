//function called when the color cards are dragged
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
  //function called when the color cards are dropped on empty cards
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
//function to create a cookie
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  //function to read a cookie
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
  //function to delete all the cookies set
  function deleteAllCookies(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    eraseCookie(cookies[i].split("=")[0]);
    location.reload(true);
 }
 //function to delete a specific cookie
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }
  $(document).ready(function(){
    //check for the cookie by using the draggable element's ID, if set get the target element
    $('#example-origin > div').map(function() {
      var x = readCookie(this.id);
      if(x){
        const draggableElement = document.getElementById(this.id);
      const dropzone = document.getElementById(x);
      dropzone.appendChild(draggableElement);
      }
    });
    //delete all the cookies when reset button is clicked
    $('#reset').click(function(){
      deleteAllCookies();
    })
  })