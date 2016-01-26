(function($) {

  /**
   * Toggle opening hours
   */
  function toggle_opening_hours() {
    // Set variables
    var element = $('.js-opening-hours-toggle');

    // Attach click
    element.on('click touchstart', function(event) {
      // Store clicked element for later use
      var element = this;

      // Toggle
      $(this).next('.js-opening-hours-toggle-element').slideToggle('fast', function() {
        // Toggle class
        $(element).toggleClass('js-collapsed js-expanded');

        // Remove focus from link
        $(element).blur();
      });

      // Prevent default (href)
      event.preventDefault();
    });
  }

  /**
   * HACK: this is an hack that have to be fixed later.
   */
  function placement_of_wayf() {
    var wrapper = $('<section class="wayf-wrapper"></section>');
    $('.pane-ding-wayf-dk-create-user').appendTo(wrapper);
    $('.pane-wayf-dk-login').appendTo(wrapper);

    wrapper.appendTo($('.header-inner'));
  }

  // When ready start the magic.
  $(document).ready(function () {
    // Toggle opening hours.
    toggle_opening_hours();

    // Fix wayf login.
    placement_of_wayf();

    // Toggle footer menu.
    $('.footer .pane-title').on('click', function() {
      var element = $(this).parent();
      $('.menu', element).toggle();
      $(this).toggleClass('js-toggled');
    });

    // Check an organic group and library content.
    // If a group does not contain both news and events
    // then add an additional class to the content lists.
    [
      '.ding-group-news,.ding-group-events',
      '.ding-library-news,.ding-library-events'
    ].forEach(function(e) {
        var selector = e;
        $(selector).each(function() {
          if ($(this).parent().find(selector).size() < 2) {
            $(this).addClass('js-og-single-content-type');
          }
      });
    });
  });

})(jQuery);
