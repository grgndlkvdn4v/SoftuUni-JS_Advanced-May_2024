window.addEventListener('load', solve);

function solve() {
  
  let nextBtn = document.getElementById('next-btn');
  let completeImgElem = document.getElementById('complete-img');
  let completeTextElem = document.getElementById('complete-text');
  let partInfoUL = document.querySelector('.info-list');
  let confirmOrderUL = document.querySelector('.confirm-list');

  let searchPartObj = {};

  nextBtn.addEventListener('click', nextBtnFunction)


  function createLIelem(obj) {
    let liElem = document.createElement('li');
    let editBtn = document.createElement('button');
    let continueBtn = document.createElement('button');
    let article = document.createElement('article');

    let carModelParag = document.createElement('p');
    let carYearParag = document.createElement('p');
    let partNameParag = document.createElement('p');
    let partNumParag = document.createElement('p');
    let conditionParag = document.createElement('p');

    carModelParag.textContent = `Car Model: ${obj.carModel.value}`;
    carYearParag.textContent = `Car Year: ${obj.carYear.value}`;
    partNameParag.textContent = `Part Name: ${obj.partName.value}`;
    partNumParag.textContent = `Part Number: ${obj.partNumber.value}`;
    conditionParag.textContent = `Condition: ${obj.condition.value}`;

    let arr = [obj.carModel.value,
      obj.carYear.value,
      obj.partName.value,
      obj.partNumber.value,
      obj.condition.value
    ]

    article.appendChild(carModelParag);
    article.appendChild(carYearParag);
    article.appendChild(partNameParag);
    article.appendChild(partNumParag);
    article.appendChild(conditionParag);

    liElem.appendChild(article);
    liElem.appendChild(editBtn);
    liElem.appendChild(continueBtn);

    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn')
    editBtn.addEventListener('click', () => editPartInfo(arr));

    continueBtn.textContent = 'Continue';
    continueBtn.classList.add('continue-btn');
    continueBtn.addEventListener('click', continuePartInfo);
    
    return liElem
  }

  function nextBtnFunction(e) {
    e.preventDefault()

    completeImgElem.setAttribute('visibility', 'hidden')
    completeTextElem.textContent = '';

    let formElem = e.currentTarget.parentElement;
    
    searchPartObj = {
      carModel: formElem.querySelector('#car-model'),
      carYear: formElem.querySelector('#car-year'),
      partName: formElem.querySelector('#part-name'),
      partNumber: formElem.querySelector('#part-number'),
      condition: formElem.querySelector('#condition'),
    }

    let strCondition = !!(
      searchPartObj.carModel.value && 
      searchPartObj.carYear.value &&
      searchPartObj.partName.value &&
      searchPartObj.condition.value )
    
      let yearsCondition = (
        Number(searchPartObj.carYear.value) > 1980 &&
        Number(searchPartObj.carYear.value) < 2023);
    
    if (!strCondition || !yearsCondition) {
      console.warn('Invalid input')
      return
    }

    debugger

    let liElem = createLIelem(searchPartObj);
    liElem.classList.add('part-content');
    partInfoUL.appendChild(liElem);

    e.currentTarget.setAttribute('disabled', 'disabled'); //disable the next button

    Object.values(searchPartObj).forEach(value => {
      value.value = '';
    }); 
  }

  function editPartInfo(arr) {

    Object.values(searchPartObj).forEach( (value, i) => { 
      value.value = arr[i];
    }); 

    nextBtn.removeAttribute("disabled");
    partInfoUL.removeChild(partInfoUL.firstChild);
  }

  function continuePartInfo() {
    let liElem = partInfoUL.removeChild(partInfoUL.firstChild)
    liElem.getElementsByClassName('edit-btn')[0].remove();
    liElem.getElementsByClassName('continue-btn')[0].remove();

    let continueBtn = document.createElement('button');
    let cancelBtn = document.createElement('button');

    continueBtn.textContent = 'Confirm';
    continueBtn.classList.add('confirm-btn')
    continueBtn.addEventListener('click', confirmOrder);

    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn')
    cancelBtn.addEventListener('click', cancelOrder);

    liElem.appendChild(continueBtn)
    liElem.appendChild(cancelBtn)
    confirmOrderUL.appendChild(liElem)
  }

  function confirmOrder(e) {
    e.currentTarget.parentElement.remove();
    nextBtn.removeAttribute("disabled");

    completeImgElem.setAttribute('visibility', 'visible')
    completeTextElem.textContent = 'Part is Ordered!';
  }

  function cancelOrder(e) {
    e.currentTarget.parentElement.remove();
    nextBtn.removeAttribute("disabled");
  }
}