const toggleBlur = () => {
  $('body').toggleClass('blurred');
};


$(() => {
  $('.about-box').click(() => {
    $('.about').removeClass('hidden');
    $('#header').addClass('hidden');
  });

  $('.portfolio-box').click(() => {
    $('.portfolio').removeClass('hidden');
    $('#header').addClass('hidden');
  });

  $('.contact-box').click(() => {
    console.log('hello');
    $('.contact').removeClass('hidden');
    $('#header').addClass('hidden');
  });

  $('.go-back').click(() => {
    $('#header').removeClass('hidden');
    $('.modal').addClass('hidden');
  });
});
