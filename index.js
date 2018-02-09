const handleClicks = (className) => {
  switch (className) {
  case 'about':
    $(`.${className}`).append();
    break;
  case 'portfolio':
    $(`.${className}`).append();
    break;
  case 'contact':
    $(`.${className}`).append();
    break;
  default: console.log('something went wrong :(');
  }
};

const releaseTheModals = () => {

}

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
