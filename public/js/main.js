$(function () {
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  var elementWidth = $("#ui-dialog").outerWidth();
  var elementHeight = $("#ui-dialog").outerHeight();

  if (!getCookie("visited")) {
    // Set the cookie to indicate the visit
    setCookie("visited", true, 1); // Expiry set to 1 day (24 hours)

    var centerX = (screenWidth - elementWidth) / 2;
    var centerY = (screenHeight - elementHeight) / 2;

    // Set the element's position
    $("#ui-dialog").addClass("centered");
    $("#ui-dialog").css({
      top: centerY + "px",
      left: centerX + "px",
    });

    $("#dialog-4").dialog({
      autoOpen: true,
      modal: true,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  } else {
    $("#dialog-4").dialog({
      autoOpen: false,
    });
  }
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
