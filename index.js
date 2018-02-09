const modalCreator = className => (
  `  
   <div class=main-modal>
    <article id=${className}>
      <h2>${className}</h2>
      <span>
        <img class="about-image" src="./images/about-photo.jpg">
      </span>
      <p>
         A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL.
             A touring musician turned full-stack
            web developer from Gainesville, FL. A touring musician turned full-stack
            web developer from Gainesville, FL.
      </p>
    </article>
   </div>
    `
);

const toggleBlur = () => {
  $('body').toggleClass('blurred');
};


const handleClicks = (className) => {
  switch (className) {
  case 'about':
    $('#wrapper').html(`${modalCreator(className)}`);
    break;
  case 'portfolio':
    $('#wrapper').html(`${modalCreator(className)}`);
    break;
  case 'contact':
    $('#wrapper').html(`${modalCreator(className)}`);
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
