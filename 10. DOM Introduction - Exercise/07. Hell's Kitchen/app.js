function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let textAreaElement = document.querySelectorAll('#inputs textarea');
   let bestRestaurantElement = document.querySelector('div#bestRestaurant span');
   let bestRestaurantWorkersElement = document.querySelector('div#workers span');

   function onClick () {
      const inputText = textAreaElement[0].value;

      let inputArr = JSON.parse(inputText);

      let restaurantsObj = createRrestaurantsObj(inputArr);
      
      let bestRestaurantObj = findBestRestaurant(restaurantsObj)
      const output1 = `Name: ${bestRestaurantObj.bestRestaurantName} Average Salary: ${bestRestaurantObj.bestRestaurantAvarageSalary.toFixed(2)} Best Salary: ${bestRestaurantObj.bestRestaurantBiggestSalary.toFixed(2)}`;
      
      bestRestaurantElement.textContent = output1;


      let bestRestaurantWorkers = restaurantsObj[bestRestaurantObj.bestRestaurantName]; 

      const bestRestaurantWorkersArr = Object.entries(bestRestaurantWorkers)
      let output2 = '';
      bestRestaurantWorkersArr
         .sort((a, b) => b[1] - a[1])
         .forEach(arr => 
            output2 += `Name: ${arr[0]} With Salary: ${arr[1]} `
         )
      console.log(output2.trim());

      bestRestaurantWorkersElement.textContent = output2.trim()
   }

   function createRrestaurantsObj(restaurantArr) {
      let restaurantsObj = {};

      for (const restaurantData of restaurantArr) {
         let [restaurant, workers] = restaurantData.split(' - ');

         if (!restaurantsObj.hasOwnProperty(restaurant)) {
            restaurantsObj[restaurant] = {};
         }
            
         let workersArr = workers.split(', ');   
         for (const worker of workersArr) {
            [workerName, salary] = worker.split(' ');
            salary = Number(salary);

            restaurantsObj[restaurant][workerName] = salary
         }
      }
      return restaurantsObj
   }

   function findBestRestaurant(restaurantsObj) {
   // The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
      let bestRestaurantObj = {
         bestRestaurantName: '',
         bestRestaurantAvarageSalary: 0,
         bestRestaurantBiggestSalary: 0
      };

      // iterate through the current restaurant and compare with the best
      for (const restaurant in restaurantsObj) {
         let biggestSalary = 0;
         let avarageSalary = 0
         let salarySum = 0;

         let workersList = restaurantsObj[restaurant];

         for (const worker in workersList) {
            let currWorker = worker;
            let currWorkerSalary = Number(workersList[worker]);

            if (currWorkerSalary > biggestSalary) {
               biggestSalary = currWorkerSalary
            }
            salarySum += currWorkerSalary;
         }
         
         avarageSalary = salarySum / Object.keys(workersList).length
         // console.log('salarySum', salarySum);
         // console.log('avarageSalary', avarageSalary);
         // console.log('biggestSalary', biggestSalary);

         if (avarageSalary > bestRestaurantObj.bestRestaurantAvarageSalary) {
            bestRestaurantObj.bestRestaurantAvarageSalary = avarageSalary;
            bestRestaurantObj.bestRestaurantName = restaurant;
            bestRestaurantObj.bestRestaurantBiggestSalary = biggestSalary;
         }
      }
      
      return bestRestaurantObj
      console.table(bestRestaurantObj)
   }
}