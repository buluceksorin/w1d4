function findWaldo(arr, found) {
   arr.forEach(function(person){
    if (person === "Waldo") {
      found(person);   // execute callback
    }
  });
}

function actionWhenFound(person) {
  console.log("Found Waldo at index " + person);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);