const link = "json/data.json"

async function getBusinessData() {
  const response = await fetch(link);
  const data = await response.json();
  // console.log(data.business);  // note that we reference the prophet array of the data object given the structure of the json file
  displayBusiness(data.business);
}

getBusinessData()

const displayBusiness = (business) =>{
  const cards =  document.querySelector('div.cards');

  business.forEach((business) =>{
    let card = document.createElement('section');
    card.setAttribute('class', 'card')
    let businessLogo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let membership = document.createElement('p');

    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    url.textContent = `${business.name} Website`;
    url.href=`${url}`;
    membership.textContent = `Membership Level: ${business.membership}`;

    businessLogo.setAttribute('src', business.businessLogo);
    businessLogo.setAttribute('id', 'businessLogo');
    businessLogo.setAttribute('alt', `${business.name} logo`);
    businessLogo.setAttribute('loading', 'lazy')
    businessLogo.setAttribute('width', '75%');

    card.appendChild(businessLogo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(membership);

    cards.appendChild(card);
  })
}