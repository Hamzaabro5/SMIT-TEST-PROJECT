const cartRender = document.querySelector('.cartRender');
const savedItems = JSON.parse(localStorage.getItem('item')) || [];

function renderLocalStorage() {
  savedItems.forEach(item => {
    cartRender.innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Title: ${item.title}</h5>
        <p class="card-text">Description: ${item.description}</p>
        <p class="card-text">Price: $${item.price}</p>
      </div>
    </div>
    `;
});
}

renderLocalStorage()