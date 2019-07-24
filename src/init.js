$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.squareDanceButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var squareDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      300
    );
    for (var i = 0; i < window.dancers.length; i++) {
      var top = window.dancers[i][0].style.top;
      var left = window.dancers[i][0].style.left;
      var subTop = parseInt(top.slice(0,-2));
      var subLeft = parseInt(left.slice(0,-2));
      if (Math.abs(squareDancer.top - subTop) < 200 && Math.abs(squareDancer.left - subLeft) < 200) {
        squareDancer.$node.css('background', 'url("https://png2.kisspng.com/sh/b6d7cd21a98d799c0d4d5f5fbaf89db0/L0KzQYm3VMA5N5txiZH0aYP2gLBuTfNtfZMyiNd3Z4Xsfn7wkBxidpUykdHAdIXldX7AiftqaV51fdDwdXnxg368gfNiOWJmUdM7OEa0SHA5UcgzQGQ1TaMAMkO0SYO5U8M3PmY8RuJ3Zx==/kisspng-club-penguin-island-youtube-wikia-penguins-5aca11a9a28618.2182830515231922336657.png") no-repeat center center fixed',
        "background-size", "cover");
        window.dancers[i].css('background', 'url("https://png2.kisspng.com/sh/b6d7cd21a98d799c0d4d5f5fbaf89db0/L0KzQYm3VMA5N5txiZH0aYP2gLBuTfNtfZMyiNd3Z4Xsfn7wkBxidpUykdHAdIXldX7AiftqaV51fdDwdXnxg368gfNiOWJmUdM7OEa0SHA5UcgzQGQ1TaMAMkO0SYO5U8M3PmY8RuJ3Zx==/kisspng-club-penguin-island-youtube-wikia-penguins-5aca11a9a28618.2182830515231922336657.png") no-repeat center center fixed',
        "background-size", "cover"
      );
      }
    }
    $('body').append(squareDancer.$node);
    window.dancers.push(squareDancer.$node);
  });

  $('.lineUpButton').on('click', function(){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].css('top', '30px');
    }
  });

  $('.nbaButton').on('click', function(){
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var nbaDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      100
    );
    $('body').append(nbaDancer.$node);
    window.dancers.push(nbaDancer.$node);
  });

  $('body').on('mouseenter', '.img', function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "30%", height: "30%"}, 'fast');
  });

  $('body').on('mouseleave', '.img', function() {
      $(this).animate({width: '100px', height: '100px'}, 'fast');
  });

  $('.fillScreen').on('click', function(){
    for (var i = 0; i < window.dancers.length; i++) {
      var element = window.dancers[i][0];
      element.style.top = null;
      element.style.left = null;
      $('.dancer').css('position','inherit')
      $('.square-dancer').css('position','inherit')
      $('.container').append(window.dancers[i]);
    }
  });
});
