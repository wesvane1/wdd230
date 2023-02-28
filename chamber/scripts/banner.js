let currentDay = new Date();
let day = currentDay.getDay();

// if the day is monday or tuesday
if (day == 1 || day == 2){
  const headerRef = document.getElementsByTagName('header')[0];
  let banner = document.createElement('p');
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  headerRef.append(banner);
  banner.className='joinBanner';
  banner.style.textAlign = 'center';
  banner.style.backgroundColor = 'white';
  banner.style.gridRow = '8/9';
  banner.style.margin= '10px'
  banner.style.marginTop = '50px';
  banner.style.borderRadius = '10px';
}