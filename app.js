const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones);
}
const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    loadingcontainer(false);
    const showallcontainer = document.getElementById('showall-container');
    if (phones.length > 12) {
        showallcontainer.classList.remove('hidden');
    }
    else {
        showallcontainer.classList.add('hidden');
    }
    phones = phones.slice(0, 12);
    console.log(phones.length);

    // phones = phones.slice(0,5);
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card p-4 bg-gray-400 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
                            alt="Shoes" /></figure>
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

}
const handleSearch = () => {
    // console.log('sss');
    loadingcontainer(true);
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}
const loadingcontainer= (isloading)=> {
    const loadingcontainers =document.getElementById('loading-container');
    if(isloading){
        loadingcontainers.classList.remove('hidden');
    }
    else {
        loadingcontainers.classList.add('hidden');
    }
}




loadPhone();