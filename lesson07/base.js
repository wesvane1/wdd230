const images = document.querySelectorAll("img[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if (!src){
    return
  }
  img.src = src
}

const imgOptions = {};

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