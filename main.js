document.querySelector('.nav-menu-btn').addEventListener('click', () =>{
	document.querySelector('.nav-menu').classList.toggle('show');
});

document.querySelectorAll('.nav-item').forEach(item => {
	item.addEventListener('click', event => {
		
		//change active class
		document.querySelector('.nav-item.active').classList.toggle('active');
		console.log('Element ' + event.target.innerHTML + ' was just clicked');
		event.target.classList.toggle('active');

		var category = event.target.innerHTML;
		var products = document.querySelectorAll('.carta__product');
		for(let i=0; i<products.length; ++i){
			var selected = products[i].querySelector('.product__category');
			var productCategory = selected.innerHTML;
			var name = products[i].querySelector('.tittle__product');
			if(category.normalize().toUpperCase() === productCategory.normalize().toUpperCase()){
				products[i].classList.remove('hidden');				
			}else{
				if(!products[i].classList.contains('hidden')){
					products[i].classList.add('hidden');					
				}
			}
		}
		
		

	});
});

/*
ScrollReveal().reveal('.carta');
ScrollReveal().reveal('.carta__product', { delay: 500 });
*/