    // console.log('hello javascript is working!');
    // var myHeaderEl = document.querySelector('.header');
    // console.log(myHeaderEl)
    // var myName = 'Phil'; // string 
    // var isAFunnyGuy = true;
    // var age = 21;
    // console.log(myName);
    // var myH1El = document.createElement('h1');
    // myH1El.textContent = 'Do you see how cool this is?';
    // myHeaderEl.appendChild(myH1El);

    function greet(name, age = 33) {
      // console.log('hello '+ name);
      // console.log('i am ' + age + ' years old');
    }

    greet('Phil');
    greet('Mark');
    greet('Victor');


    // example of method
    // open in console.to see results
    const greetings = {
      morning : function(name) {
        console.log("Good Morning " + name)
      },
      day : function(name){
        console.log("Good Afternoon " + name)
      },
      night: function(name){
        console.log("Good Evening " + name)
      },
    }