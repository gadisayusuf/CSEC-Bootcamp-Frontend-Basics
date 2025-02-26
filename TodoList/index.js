let modal = document.getElementsByClassName("modal")[0];
let content = document.getElementsByClassName("content")[0];
let cancelBtn = document.getElementById("cancel");
let applyBtn = document.getElementById("apply");
let button = document.getElementsByClassName("plus")[0];
let list = [];
let isEditing = false;
button.onclick = function () {
  modal.style.display = "block";
  $("#taskInput").focus();
};
cancelBtn.onclick = function () {
  modal.style.display = "none";
  $("#taskInput").val("");
};
applyBtn.onclick = function () {
  let input = $("#taskInput").val();
  if (input != "") {
    let newItem = `<li class="item">
                    <div id="checkbox"></div>
                    <p>${input}</p><i class="fa fa-pencil"></i><i class="fa fa-trash"></i>
                </li>`;
    list.push(newItem);
    $("#taskInput").val("");
    if (list) {
      $("#taskList").remove("img");
      $("#taskList").html(list.join(""));
      $("#taskList").children(".item").last().css("border", "none");
    }
  }
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let nightbtn = $("#nightBtn");
nightbtn.click(function () {
  $("body").toggleClass("nightMode");
  if ($("#nightBtn i").hasClass("fa-moon-o")) {
    $("#nightBtn i").removeClass("fa-moon-o");
    $("#nightBtn i").addClass("fa-sun-o");
  } else {
    $("#nightBtn i").removeClass("fa-sun-o");
    $("#nightBtn i").addClass("fa-moon-o");
  }
});
$("#taskList").on("click", "li #checkbox", function () {
  !isEditing &&
    ($(this).closest("li").hasClass("completed")
      ? $(this).closest("li").removeClass("completed")
      : $(this).closest("li").addClass("completed"));
});
$("#taskList").on("click", "li p", function () {
  console.log(isEditing);
  !isEditing &&
    ($(this).closest("li").hasClass("completed")
      ? $(this).closest("li").removeClass("completed")
      : $(this).closest("li").addClass("completed"));
});
$("#taskList").on("click", "li .fa-trash", function () {
  $(this).closest("li").remove();
});
$("#taskList").on("click", "li .fa-pencil", function () {
  $(this).closest("li").removeClass("completed");
  isEditing = true;
  let pElement = $(this).closest("li").children("p");
  let originalText = pElement.text();
  pElement.attr("contenteditable", "true").focus();
  pElement.on("blur", function () {
    pElement.attr("contenteditable", "false");
    isEditing = false;
  });
});
$("#fa-search").on("click", () => {
  if (!$("#search").is(":focus")) {
    $("#search").focus();
  }
  if ($("#search").val()) {
    console.log($("#search").val());
    $("#search").val("");
  }
});
