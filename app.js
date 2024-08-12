const input1 = document.querySelector(`#titleInput`)
const input2 = document.querySelector(`#descInput`)
const input3 = document.querySelector(`#priceInput`)
const form = document.querySelector(`form`)
const render = document.querySelector(`.renderItems`)


form.addEventListener(`submit` , (event)=>{
    event.preventDefault();

    render.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Title: ${input1.value}</h5>
    <p class="card-text">Decription: ${input2.value}</p>
    <p class="card-text">Price: $${input3.value}</p>
    <button onclick = "addCart()" class="btn btn-primary">Add To Cart</button>
  </div>
</div>
    `

})



function addCart(){
    const title = input1.value;
    const description = input2.value;
    const price = input3.value;

    const item = {
        title,
        description,
        price
    };

    const savedItems = JSON.parse(localStorage.getItem('item')) || [];
    savedItems.push(item);
    localStorage.setItem('item', JSON.stringify(savedItems));
    input1.value = ``
    input2.value = ``
    input3.value = ``
}
