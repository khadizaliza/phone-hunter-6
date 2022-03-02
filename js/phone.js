// button even handler setup

const searchButton = () =>{
    const inputValue = document.getElementById("input-value");
    const searchText = inputValue.value;
    inputValue.value = '';
    // fetch
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data));
  // console.log(inputValue);
    
    
}
//card-blog
const showPhoneDetails = phones => {
    console.log(phones)
    const searchResult = document.getElementById('search-result');
     phones.forEach(phone => {
         console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-25" alt="...">
        <div class="card-body">
          <h5 class="text-info">Name:${phone.phone_name}</h5>
          <button onclick="details('${phone.slug}
          ')" class="btn btn-info text-white">Details</button>
        </div>
      </div>
      `;
      searchResult.appendChild(div);

     }) 
  }
// details-section

const details = (slug) => {
    const url= 'https://openapi.programming-hero.com/api/phone/${slug}';
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const setDetails = (info) => {
    document.getElementById("details-container").innerHTML = `
    <div>
    <h4>Brand:${phone.brand} </h4>
    <p>Slug:${phone.slug} </P>
    </div>
    `
};








