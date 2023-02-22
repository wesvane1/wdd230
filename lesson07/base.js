const images = document.querySelectorAll("img[data-src]");

const  preloadImage = (img) =>{
  const src = img.getAttribute("data-src");
  if (!src){
    return
  }
  img.src = src
}

const imgOptions = {
  rootMargin:"0px 0px -100px 0px"
  // the above line lets the images load 300 pixels before they show up on the users screen.
  // if the number were to be -500, then it would load 500 pixels after the user scrolls past.
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

// const images = document.querySelectorAll('[data-src]')

// console.log(images)

// const preloadImage = (img) => {
//     const src = img.getAttribute('data-src');
//     if (!src) {
//         return;
//     }
//     img.src = src
// }

// const imgOptions = {
//     // threshold: 1,
//     rootMargin: "0px 0px -100px 0px"
// }

// const callback = (entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             preloadImage(entry.target)
//             imgObserver.unobserve(entry.target)
//         }
//     })
// }

// const imgObserver = new IntersectionObserver(callback, imgOptions)

// images.forEach(image => {
//     imgObserver.observe(image)
// })