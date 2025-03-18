window.addEventListener("load", solve)

function solve(params) {
  
  let addGemBtn = document.getElementById('add-btn');
  addGemBtn.addEventListener('click', addGemToPreview);
  
  let previewElem = document.querySelector('ul[id="preview-list"]');
  let collectionElem = document.querySelector('ul[id="collection"]');
  
  let nameInput = document.getElementById('gem-name');
  let colorInput = document.getElementById('color');
  let caratsInput = document.getElementById('carats');
  let priceInput = document.getElementById('price');
  let typeInput = document.getElementById('type');
  
  
  function addGemToPreview(event) { 
  console.log(event);
  
    let gemName = nameInput.value;
    let color = colorInput.value;
    let carats = Number(caratsInput.value);
    let price = Number(priceInput.value);
    let type = typeInput.value;
  
    let condition = !(gemName && color && carats && price && type)
  
    if ( condition ) {
      console.warn('Fill all the fields!');
      return
    }
  
    let liElem = createliElem(gemName, color, carats, price, type)
    previewElem.appendChild(liElem)
    addGemBtn.setAttribute("disabled", "true");
  
    nameInput.value = ''
    colorInput.value = ''
    caratsInput.value = ''
    priceInput.value = ''
    typeInput.value = ''
  }
  
  function saveToCollection() {
    let previewArticle = document.getElementsByTagName('article')[0]
    
    let gemName = previewArticle.querySelector('h4').textContent;
    let color = previewArticle.querySelector('p:nth-child(2)').textContent;
    color = color.replace('Color: ', '');
    let carats = previewArticle.querySelector('p:nth-child(3)').textContent;
    carats = Number( carats.replace('Carats: ', '') );
    let price = previewArticle.querySelector('p:nth-child(4)').textContent
    price = Number( price.replace('Price: ', '').replace('$', '') );
    let type = previewArticle.querySelector('p:nth-child(5)').textContent
    type = type.replace('Type: ', '');
  
    let sentance = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
    console.log(sentance);
    
    let collectionLi = document.createElement('li');
    let collectionP = document.createElement('p');
    collectionP.className = 'collection-item';  
    collectionP.textContent = sentance;
  
    collectionLi.appendChild(collectionP);
    collectionElem.appendChild(collectionLi);
    cancelPreviewItem()
    
  }
  
  function editInfo() {
    let previewArticle = document.getElementsByTagName('article')[0]
    
    let gemName = previewArticle.querySelector('h4').textContent;
    let color = previewArticle.querySelector('p:nth-child(2)').textContent;
    color = color.replace('Color: ', '');
    let carats = previewArticle.querySelector('p:nth-child(3)').textContent;
    carats = Number( carats.replace('Carats: ', '') );
    let price = previewArticle.querySelector('p:nth-child(4)').textContent
    price = Number( price.replace('Price: ', '').replace('$', '') );
    let type = previewArticle.querySelector('p:nth-child(5)').textContent
    type = type.replace('Type: ', '');
    
    nameInput.value = gemName;
    colorInput.value = color;
    caratsInput.value = carats;
    priceInput.value = price;
    typeInput.value = type;
  
    cancelPreviewItem()
  }
  
  function cancelPreviewItem() {
    let previewElemItem = previewElem.querySelector('.gem-info');
    previewElemItem.remove()
    addGemBtn.removeAttribute("disabled")
  }
  
  function createliElem(gemName, color, carats, price, type) {
    
    let liElem = document.createElement('li');
    liElem.className = 'gem-info';
  
    let article = document.createElement('article');
  
    let heading = document.createElement('h4');
    heading.textContent = gemName;
    article.appendChild(heading);
  
    let colorParag = document.createElement('p');
    colorParag.textContent = `Color: ${color}`;
    article.appendChild(colorParag);
  
    let caratsParag = document.createElement('p');
    caratsParag.textContent = `Carats: ${carats}`;
    article.appendChild(caratsParag);
  
    let priceParag = document.createElement('p');
    priceParag.textContent = `Price: ${price}$`;
    article.appendChild(priceParag);
  
    let typeParag = document.createElement('p');
    typeParag.textContent = `Type: ${type}`;
    article.appendChild(typeParag);
  
    liElem.appendChild(article)
  
    let saveBtn = document.createElement('button');
    saveBtn.addEventListener('click', saveToCollection)
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save to Collection';
    liElem.appendChild(saveBtn)
  
    let editBtn = document.createElement('button');
    editBtn.addEventListener('click', editInfo);
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Information';
    liElem.appendChild(editBtn)
  
    let cancelBtn = document.createElement('button');
    cancelBtn.addEventListener('click', cancelPreviewItem)
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';
    liElem.appendChild(cancelBtn)
  
    return liElem
  }
}
