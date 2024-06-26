var story = document.querySelector("h3");
var AddFriend = document.querySelector("#add");
var check = 0;

AddFriend.addEventListener("click", function () {
  if (check == 0) {
    story.innerHTML = "Friends";
    story.style.color = "green";
    AddFriend.innerHTML = "Remove Friend"
    check = 1
  }
  else{
    story.innerHTML = "Strainger";
    story.style.color = "blue";
    AddFriend.innerHTML = "Add Friend"
    check = 0
  }
});
