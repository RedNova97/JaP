
let categoriesArray = [];

function showCategoriesList(){
    let htmlContentToAppend = "";

    htmlContentToAppend += ` <h2 class="autosProductos">Productos</h2>
    <p class="autosProductos">Verás aquí todos los productos de la categoría Autos</p>`

    for(let i = 0; i < categoriesArray.length; i++){ 
        let category = categoriesArray[i];
        htmlContentToAppend += `
        <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                
                <div class="row">
                    <div class="col-3">
                        <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name} - ${category.currency} ${category.cost}</h4>
                            <small class="text-muted">${category.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            showCategoriesList();
        }
    });
});