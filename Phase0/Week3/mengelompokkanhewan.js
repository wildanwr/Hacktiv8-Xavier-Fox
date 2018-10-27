function groupAnimals(animals) {
  var animalSort = animals.sort()
  var output = []
  for (var i = 0; i < animalSort.length; i++) {
    var hurufPertama = animalSort[i][0]
    if (hurufPertama === 'a') {
      
    }
    }
  }



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
