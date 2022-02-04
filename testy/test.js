function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    function symDiff(arrayOne, arrayTwo) {
      var result = [];
  
      arrayOne.forEach(function(item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
  }


  function sym() {
    // Convert the argument object into a proper array
    var args = Array.prototype.slice.call(arguments);
  
    // Return the symmetric difference of 2 arrays
    var getDiff = function(arr1, arr2) {
      // Returns items in arr1 that don't exist in arr2
      function filterFunction(arr1, arr2) {
        return arr1.filter(function(item) {
            //if the value is not found in arr2 return item//the negative one is resonse if match not found
          return arr2.indexOf(item) === -1;
        });
      }
  
      // Run filter function on each array against the other
      return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    };
  
    // Reduce all arguments getting the difference of them
    var summary = args.reduce(getDiff, []);
  
    // Run filter function to get the unique values
    var unique = summary.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
    return unique;
  }
  
  // test here
  sym([1, 2, 3], [5, 2, 1, 4]);















  function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    var index;
    var arrCurInvName = []; // Names of arr1's items
    var arrNeInvName = []; // Names of arr2's items
  
    // Same as using two for loops, this takes care of increasing the number of stock quantity.
    arr1.forEach(function(item1) {
      arr2.forEach(function(item2) {
        if (item1[1] === item2[1]) {
          item1[0] = item1[0] + item2[0]; //Increase number of stock
        }
      });
    });
  
    // Get item's name for new Inventory
    arr2.forEach(function(item) {
      arrNeInvName.push(item[1]);
    });
  
    // Get item's name for Current Inventory
    arr1.forEach(function(item) {
      arrCurInvName.push(item[1]);
    });
  
    // Add new inventory items to current inventory.
    arrNeInvName.forEach(function(item) {
      if (arrCurInvName.indexOf(item) === -1) {
        index = arrNeInvName.indexOf(item);
        arr1.push(arr2[index]);
      }
    });
  
    // Sort the array alphabetically using the second element of the array as base.
    arr1.sort(function(currItem, nextItem) {
      //Ternary function to avoid using if else
      return currItem[1] > nextItem[1] ? 1 : -1;
    });
  
    return arr1;
  }
  
  // test here
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);