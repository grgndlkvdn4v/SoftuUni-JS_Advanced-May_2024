class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer,
    this.availableSmartphones = [],
    this.soldSmartphones = [],
    this.revenue = 0
  }

  addSmartphone(model, storage, price, condition) {
    let isNotValid = !(model && Number.isInteger(storage) && storage >= 0 && price >= 0 && condition);

    if (isNotValid) {
      throw new Error("Invalid smartphone!");
    } 

    let smartphoneObj = {model, storage, price, condition}
    
    this.availableSmartphones.push(smartphoneObj)
    let message = `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    
    return message
  }

  sellSmartphone(model, desiredStorage) {
    let isAvailable = false

    let i = 0
    for (i; i < this.availableSmartphones.length; i++) {
      const currSmartphoneObj = this.availableSmartphones[i];
      if (currSmartphoneObj.model === model) {
        isAvailable = true;
        break
      }
    }

    if (!isAvailable) {
      throw new Error( `${model} was not found!` );
    } 

    let difference = desiredStorage - this.availableSmartphones[i].storage;
    let newPrice;

    // If the found smartphone’s storage is more than or equal to the desiredStorage – the price stays the same!
    if (difference <= 0) {
      // do nothing
    } else if (difference <= 128) {  // If the difference between the smartphone’s storage and the desiredStorage is less or equal to 128 GB – the price gets deducted by 10%!
      newPrice = this.availableSmartphones[i].price - (this.availableSmartphones[i].price * 0.1)
      this.availableSmartphones[i].price = newPrice;
    } else {  // If the difference between the smartphone’s storage and the desiredStorage is more than 128 GB – the price gets deducted by 20%!
      newPrice = this.availableSmartphones[i].price - (this.availableSmartphones[i].price * 0.2)
      this.availableSmartphones[i].price = newPrice;
    }
    
    let soldSmartphone = {
      model: this.availableSmartphones[i].model,
      storage: this.availableSmartphones[i].storage,
      soldPrice: this.availableSmartphones[i].price
    }

    this.availableSmartphones.splice(i, 1);
    this.soldSmartphones.push(soldSmartphone)

    return `${soldSmartphone.model} was sold for ${soldSmartphone.soldPrice.toFixed(2)}$`
  }

  upgradePhones() {
    let output = '';

    if (!this.availableSmartphones.length) {
      output = 'There are no available smartphones!'
      return output
    }

    output += `Upgraded Smartphones:\n`
    for (const currSmartphone of this.availableSmartphones) {
      let dobleStorage = currSmartphone.storage * 2
      currSmartphone.storage = dobleStorage

      output += `${currSmartphone.model} / ${currSmartphone.storage} GB / ${currSmartphone.condition} condition / ${currSmartphone.price.toFixed(2)}$\n`;
    }

    return output
  }

  salesJournal(criteria) {
    let output = '';

    switch (criteria) {
      case 'storage':  // the sold smartphones must be sorted by their storage in descending order;
        this.soldSmartphones.sort( (a, b) => b.storage - a.storage )
        break;

      case 'model':
        this.soldSmartphones.sort( (a, b) => a.model.localeCompare(b.model) )
        break;

      default: return "Invalid criteria!"
    }

    for (const currsmartphone of this.soldSmartphones) {
      this.revenue += currsmartphone.soldPrice
    }

    output += `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;
    output += `${this.soldSmartphones.length} smartphones sold:\n`;

    for (const currsmartphone of this.soldSmartphones) {
      output += `${currsmartphone.model} / ${currsmartphone.storage} GB / ${currsmartphone.soldPrice.toFixed(2)}$\n`;
    }

    return output
  }
}


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));