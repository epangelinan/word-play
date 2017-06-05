$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input#sentence").val();
    var newArray = userSentence.split(" ");
    var threeOrMoreArray = [];
    newArray.forEach(function(item){
      if (item.length >= 3) {
        threeOrMoreArray.push(item);
      }
    });
    threeOrMoreArray.reverse();
    var newSentence = threeOrMoreArray.toString();
    $("span").text(newSentence);
  });
});
