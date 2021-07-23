
const root = document.querySelector('.carta');

const CATEGORY_DEFAULT = 'carnes';
const CATEGORY_ADITIONALS = 'adicionales';
const CATEGORY_DRINKS = 'bebidas';
const CATEGORY_KIDS = 'menu infantil';

axios.get('https://api2.bacon57burger.com.co/public/api/products')
.then((response) => {

  const data = response.data;

  let enableds = data.filter(product => product.enabled > 0);

  enableds.forEach((product) => {
    
    let hidden = '';
    let type_cat = '';

    const container = document.createElement('div');
    if(product.category.name !== CATEGORY_DEFAULT){
      hidden = ' hidden'
    }
    if(product.category.name === CATEGORY_ADITIONALS 
      || product.category.name === CATEGORY_DRINKS 
      || product.category.name === CATEGORY_KIDS ){
      type_cat = 'carta__product__tiny';
  }else{
    type_cat = 'carta__product';
  }

  container.setAttribute('class', type_cat+hidden);

  const title = document.createElement('h3');
  title.setAttribute('class', 'title__product');
  title.textContent = product.name

  container.appendChild(title);

  const midcontain = document.createElement('div');
  midcontain.setAttribute('class', 'midcontain');

  const picture = document.createElement('div');
  picture.setAttribute('class', 'product__picture');
  const img = document.createElement('img');
  img.setAttribute('src', "img/"+product.image);
  picture.appendChild(img);
  
      //midcontain.appendChild(picture);  

      const description = document.createElement('p');
      description.setAttribute('class', 'product__description');
      description.textContent = product.description;
      midcontain.appendChild(description);

      container.appendChild(midcontain);

      const pricesList = document.createElement('div');
      pricesList.setAttribute('class', 'prices_list');

      container.appendChild(pricesList);

      const presentations = product.presentations;
      
      var format = new Intl.NumberFormat();

      let band = 0;
      presentations.forEach((pres) => {

        if(pres.enabled>0){

            const price = document.createElement('div');
            price.setAttribute('class', 'price');

            const value = document.createElement('p');
            value.setAttribute('class', 'value');
            
            value.innerHTML = pres.name+' <span class="highl">'+format.format(Number(pres.price).toFixed(0))+'</span>';

            price.appendChild(value);
            pricesList.appendChild(price);
            ++band;
        }
      })

      if(band===0){
        const price = document.createElement('div');
        price.setAttribute('class', 'price');

        const value = document.createElement('p');
        value.setAttribute('class', 'value');
        value.innerHTML = '<span class="highl">'+format.format(Number(product.price).toFixed(0))+'</span>';

        price.appendChild(value);
        pricesList.appendChild(price);
      }

      const category = document.createElement('span');
      category.setAttribute('class', 'product__category');
      category.textContent = product.category.name;

      container.appendChild(category);

      root.appendChild(container);
    })
},(error) => {
  console.log(error);
});
