const images = document.querySelectorAll("img[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if (!src){
    return
  }
  img.src = src
}

const imgOptions = {
  threshold:0,
  rootMargin:"0px 0px -300px 0px"
  // the above line lets the images load 300 pixles before they show up on the users screen.
  // if the number were to be -500, then it would load 500 pixles after the user scrolls past.
};

const imageObserver = new IntersectionObserver((entries, imageObserver) =>{
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image =>{
  imageObserver.observe(image);
})