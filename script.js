function displayMenu(Items){
    console.log("Items:",Items);
     const container=document.getElementById("dish-container");
     container.innerHTML='';
     Items.forEach(item => {
        console.log("Items:",item);
        const Dishes = document.createElement("div");
         Dishes.className="col-12 col-md-4 col-lg-3 border me-3 mb-3";
         Dishes.innerHTML=`
         <div class="main">
        <img class="img" src="${item.img}"/>
        <img class="img1" src="${item.img1}"/>
        <h4 class="title">${item.title}</h4>
        <p class="price">Price: ${item.price}</p>
        <div class="a"></div>
        <p class="description">${item.description}</p></div>
         `;
         container.appendChild(Dishes);
     });
  }
  
  function filterByCategory(category) {
    let filteredItems;
    if (category === 'All') {
        filteredItems = menu;
    } else {
        filteredItems = menu.filter(item => item.category === category);
    }
    displayMenu(filteredItems);
  }
  displayMenu(menu);