/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  var first = function(arr, cb) {
    cb(arr[0]);
  }
  

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  function last(arr, cb){
    cb(arr[arr.length - 1]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  function multiply(num1, num2, cb){
    cb(num1 * num2);

  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function contains(arr, str, fn) {
 var isInCollection = false;
 collection.forEach(function(item) {
  if (str === item) {
    isInCollection = true;
      return fn(isInCollection);
  }
 });
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

//result needs to be a boolean value--so callback needs to return boolean value of true or false
//



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


   function uniq(collection, fn) {
    var uniqCollection = collection.filter(function(item, index, self){
    });
    return fn(uniqCollection);
   }


    function uniq(collection, fn) {
      var obj = {};
      var uniqArr = [];
      collection.forEach(function(item) {
        obj[item] = item;
      });
      // filter out duplicates 
      for (var key in obj) {
        uniqArr.push(key);
      }
      return fn(uniqArr);
    }


    function uniq (collection, fn) {
      var uniqArr = [];
      collection.forEach(function(item) {
        if (uniqArr.indexOf(item) === -1) {
          uniqArr.push(item);
        }
      });
    }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//function that goes through uniqArr, which is names, and removes duplicates

//uniqArr needs to be an arr with each name only once
//created object, looped object item 



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//    function each(arr, fn) {
//      var indexNum; 
//      var itemName;
//      arr.forEach(function(e) {
//        indexNum = arr.indexOf(e);
//      });
//      arr.forEach(function(i) {
//        itemName = arr[i];
//      });
//      return indexNum; 
//      return itemName;
//    }


function each(collection, fn) {
  collection.forEach(function(item, index) {
    return fn(item, index);
  });
}

function each(collection, fn) {
  for (var i = 0; i < collection.length; i++) {
    fn(collection[i], i)
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



//return index of the item--use indexOf or findIndex?

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function getUserById(collection, str, fn) {
   collection.forEach(function(user) {
    if ( user.id === '16t') {
    return fn(user);
    }
   });
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
