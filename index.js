const modalCreator = className => (
  `  
   <div class=main-modal>
    <article id=${className}>
      <h2>${className}</h2>
      <span>
        <img class="about-image" src="./images/about-photo.jpg">
      </span>
      <p>
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsum
        Lorem ipsum
        Lorem ipsum
        Lorem ipsum
        Lorem ipsum
        Lorem ipsum
        Lorem ipsum

        Lorem ipsum

        Lorem ipsum

        Lorem ipsum

        Lorem ipsum
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


// I am a web developer and recent graduate of the Front End Web Development Career Path bootcamp at Thinkful.I love coding because solving problems and seeing ideas come to life on the page is supremely satisfying.I geek out on higher order functions, finding and learning awesome libraries or frameworks, and getting front and back ends to play nicely.
// When I'm not coding, I'm often found on Skype working with clients, curled up in a cozy chair reading, hiking in a canyon, or upside down doing a headstand.I am lifelong learner and my current learning projects(beyond code!) include piano and writing my first book.