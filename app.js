const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhones(data.data, isShowAll);
    // console.log(data.data);
}
const phoneContainer = document.getElementById('phone-container');

const displayPhones = (phones, isShowAll) => {

    phoneContainer.textContent = '';
    console.log(phones.length);
    if (phones.length > 12) {
        phones = phones.slice(0, 5);
        // handaleShowAll();
    }
    else {

    }
    console.log('is show all', isShowAll);
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-base-100 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);

    });
    toggleSpinner(false);
}

const handaleSearch = (isShowAll) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log('ss', searchText);
    // searchText ='';
    loadPhone(searchText, isShowAll);
    searchField.value = '';
}
const toggleSpinner = (isLoading) => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('hidden');
    }
    else {
        loader.classList.add('hidden');
    }
}
const handaleShowAll = () => {
    handaleSearch(true);
}
loadPhone();