const modalCreator = className =>
  (
    `
    <div class=${className}-modal>

    <div>
    `
  );

const toggleBlur = () => {
  $('body').toggleClass('blurred');
};


const handleClicks = (className) => {
  switch (className) {
  case 'about':
    $('#header').html(`${modalCreator(className)}`);
    break;
  case 'portfolio':
    $('#header').html(`${modalCreator(className)}`);
    break;
  case 'contact':
    $('#header').html(`${modalCreator(className)}`);
    break;
  default: console.log('something went wrong :(');
  }
  toggleBlur();
};


$(() => {
  $('.about').click((event) => {
    handleClicks(event.target.className);
  });

  $('.portfolio').click((event) => {
    handleClicks(event.target.className);
  });

  $('.contact').click((event) => {
    handleClicks(event.target.className);
  });
});
