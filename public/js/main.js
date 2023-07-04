$(function () {
  $("#dialog-4").dialog({
    autoOpen: true,
    modal: true,
    buttons: {
      OK: function () {
        $(this).dialog("close");
      },
    },
  });
});
