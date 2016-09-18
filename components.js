/**
 *
 *   Orgin Framework
 *	Components.js
 *	Version: 1.0
 *	
 */
var Components = {

    accordions: function() {

        $('.accordion').each(function() {
            var accLink = $(this).find('li > a');
            accLink.each(function() {

                $(this).on('click', function() {


                    var acc = $(this);
                    var accRef = acc.attr('href');
                    var targetContent = acc.closest('.accordion').find(accRef);
                    var allPanels = acc.closest('.accordion').find('li > div');


                    acc.closest('.accordion').find('li.active > div').each(function() {
                        var activePanelHeight = $(this).children().outerHeight();
                        $(this).css({
                            height: activePanelHeight + 'px'
                        });
                    });


                    if (acc.parent().hasClass('active')) {
                        if (!acc.closest('.accordion').is('[data-multiple]')) {
                            acc.closest('.accordion').find('li.active > div').css({
                                height: 0
                            });
                        } else {
                            acc.siblings(targetContent).css({
                                height: 0
                            });
                        }
                        acc.parent().removeClass('active');

                    } else {
                        var targetPanelHeight = acc.siblings(targetContent).find('.accordion-content').outerHeight();
                        if (!acc.closest('.accordion').is('[data-multiple]')) {
                            allPanels.css({
                                height: 0
                            });
                            acc.closest('.accordion').find('li').removeClass('active');
                        }
                        acc.parent().addClass('active');
                        acc.siblings(targetContent).css({
                            height: targetPanelHeight + 'px'
                        });

                    }
                    return false;
                });
            });


            // One window resize
            // set accordion panel to height auto
            $(window).on('resize', function() {
                $('.accordion').each(function() {
                    $(this).find('li.active > div').addClass('no-transition').css({
                        height: 'auto'
                    });
                });
            });
        });
    },
    ripples: function() {
        $('.ripple').on('click', function (event) {
		  event.preventDefault();

		  var $div = $('<div/>'),
			
			  btnOffset = $(this).offset(),
				xPos = event.pageX - btnOffset.left,
				yPos = event.pageY - btnOffset.top;



		  $div.addClass('ripple-effect');
		  var $ripple = $(".ripple-effect");
		  
		  if($(this).data("ripple-color")){
			  $color = $(this).data("ripple-color");
		  } else {
			  $color = "white";
		  }

		  $ripple.css("height", $(this).height());
		  $ripple.css("width", $(this).height());
		  $div.css({
			  top: yPos - ($ripple.height()/2),
			  left: xPos - ($ripple.width()/2),
			  background: $color
			}).appendTo($(this));

		  window.setTimeout(function(){
			$div.remove();
		  }, 2000);
    });
    
    

    },
    tabs: function() {

        $('.tabs').each(function() {
            var tabsTotal = $(this).find('.tab-nav').children('li').length;
            var tabLink = $(this).find('li > a');

            tabLink.each(function() {
                $(this).on('click', function() {
                    var tabContent = $(this.hash);
                    $(this).closest('.tab-nav').find('.active').removeClass('active');
                    $(this).parent().addClass('active');
                    $(this).closest('.tabs').find('.tab-panes .active').removeClass('active fade-in');
                    tabContent.addClass('active');
                    return false;
                });
                if ($(this).parent().hasClass('active')) {
                    $(this).closest('.tabs').find($(this).attr('href')).addClass('active');
                }
            });
        })
    },
    notifications: function() {
		var aff = {
			func: 'afaf',
		};
		
        $.notif = function(options) {
            console.log(aff.func);
        }
        $('<div class="notif" />').appendTo($('body'));
    },
    init: function() {
        this.tabs();
        this.accordions();
        this.ripples();
        this.notifications();

    },
};

Components.init();
//console.log(aff);