var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let users = [
  "Goku",
  "Naruto",
  "Ichigo",
  "Flash",
  "Batman",
  "Sherlock Holmes",
  "Khaleesi",
  "Steve Fox",
];

ul = document.getElementById("city-list");

let render_lists = function (lists) {
  let li = "";
  for (index in lists) {
    li += "<li>" + lists[index] + "</li>";
  }
  ul.innerHTML = li;
};

// lets filters it
input = document.getElementById("filter_users");

let filterUsers = function (event) {
  keyword = input.value.toLowerCase();
  filtered_users = users.filter(function (user) {
    user = user.toLowerCase();
    return user.indexOf(keyword) > -1;
  });
  if (keyword) {
    render_lists(filtered_users);
  } else {
    render_lists(null);
  }
};

input.addEventListener("keyup", filterUsers);
