
$(document).ready(function () {


  $("#goal-button").click(
    function () {

      let newgoal = $("#new-goal").val();

      $("#goal-list").append('<li class="list-item">' + newgoal + '</li>');
      $("#new-goal").val("");
    }


  );

});