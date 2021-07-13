let fill = false;
function handleSubmit() {
  fill = true;
  let todo = document.getElementById("todo").value;
  let state = document.getElementById("state").value;

  const node = document.createElement("li");
  node.textContent = `${todo}`;

  switch (state) {
    case "Important and Urgent":
      node.setAttribute("class", "list-group-item list-group-item-danger");
      document.querySelector(".important-urgent").appendChild(node);
      break;

    case "Important and Casual":
      node.setAttribute("class", "list-group-item list-group-item-primary");
      document.querySelector(".important-casual").appendChild(node);
      break;

    case "Unimportant and Urgent":
      node.setAttribute("class", "list-group-item list-group-item-info");
      document.querySelector(".unimportant-urgent").appendChild(node);
      break;
    case "Unimportant and Casual":
      node.setAttribute("class", "list-group-item list-group-item-success");
      document.querySelector(".unimportant-casual").appendChild(node);
      break;
  }
  console.log(fill);
}

// Sortable

var ul_1 = document.getElementById("listgroup");
var sortable = Sortable.create(ul_1, {
  group: "shared", // set both lists to same group
  animation: 150
});
var ul_1 = document.getElementById("listgroup_2");
var sortable = Sortable.create(ul_1, {
  group: "shared", // set both lists to same group
  animation: 150
});
var ul_1 = document.getElementById("listgroup_3");
var sortable = Sortable.create(ul_1, {
  group: "shared", // set both lists to same group
  animation: 150
});
var ul_1 = document.getElementById("listgroup_4");
var sortable = Sortable.create(ul_1, {
  group: "shared", // set both lists to same group
  animation: 150
});
