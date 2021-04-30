// TO SEND DATA TO THE DATABASE WHEN USER STOPS TYPING
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  // TO REMOVE HTML TAGS AND SAVE PLAIN STRING FROM QUILL(?) TEXT EDITOR
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };