//Getting user Input and storing it into userInput variable 
let inputBox = document.getElementById("#userInput");


//getting user input
let getUserInput = () => {
    userInput.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            //store user input when enter is hit
            const userInput = event.target.value;        
                        
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=230eecadf8d6e0681061ce714bf22de6`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === "404")alert(data.message);
                    console.log(data)
            });

            console.log("The city chosen is: "+ userInput);
        }
    });
};

//request city, store, and compare
let requestCity = (params) => {
    
}

console.log(getUserInput());

//Notes: 
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
// Consider creating separate functions that contain event listeners so it's more concise


