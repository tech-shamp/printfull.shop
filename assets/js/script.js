;(function ($) {
  "use strict"
  jQuery(document).ready(function () {
    var prealoaderOption = $(window)
    prealoaderOption.on("load", function () {
      var preloader = jQuery(".preloader")
      var preloaderArea = jQuery(".preloader-area")
      preloader.fadeOut()
      preloaderArea.delay(350).fadeOut("slow")
    })
  })
})(jQuery)
