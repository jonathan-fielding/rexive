(function (window, define, factory, undefined) {
  "use strict";

  if (define !== undefined) {
    define(factory);
  } else {
    factory();
  }
}(
  this,
  this.define,
  function () {
    "use strict";

    var win
      , header
      , headerHeight
      , content;

    function headerOffset() {
      headerHeight = header.outerHeight(true);
      content.css('padding-top', headerHeight);
    }

    $(function () {
      win = $(window);
      header = $('#header');
      content = $('#body');

      headerOffset();
      win.on('resize', headerOffset);
    });
  }
));
