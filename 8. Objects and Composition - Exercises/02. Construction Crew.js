/**
 * 
 * @param {Object} obj 
 * @param {Number} weight 
 * @param {Number} experience 
 * @param {Number} levelOfHydrated in mililiters
 * @param {Boolean} dizziness 
 */

function constructionCrew(worker) {

  if (worker.dizziness) {
    const waterIntake = worker.weight * 0.1 * worker.experience
    worker.levelOfHydrated += waterIntake;
    worker.dizziness = false
  }

  return worker
  console.log(worker);
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
