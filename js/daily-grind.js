    /*  Here are the main things we likely need to store to each coffee:
    name - name of the coffee
    pic - the picture of the coffee
    color - the color associated with the coffee
    alt - the alt tag identifying coffee
    day - the day of the week
    desc - description of the coffee
    */
   
    function coffeeTemplate() {
        return `<p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
        `;
    }
    
    let myDate = new Date();
    
    let coffee = "";
    
    let today = myDate.getDay();
    
    //use location object to access querystring (address bar)
    const queryString = window.location.search;
        
    //output to console    
    console.log(queryString);
        
    //separate query string parameters
    const urlParams = new URLSearchParams(queryString);
    
    //today = 3;
    
    if(urlParams.has("day")){//from querystring
        today = urlParams.get("day");
     }
    
today = parseInt(today);

switch(today){

    case 0:
        today = "Sunday";
        coffee = {
        name: "Pumkin Spice Latte",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of a pumkin-spice-latte",
        color: "orange",
        day: "Sunday",
        desc: `I love me some bubble tea!`
        }; 
        break;       
    case 1:
        today = "Monday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            color: "black",
            day: "Tuesday",
            desc: `Give it to me straight!`
        };
        break;
    case 3:
        today = "Wednesday";
        coffee = {
            name: "Caramel-Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a bubble tea",
            color: "brown",
            day: "Wednesday",
            desc: `I love me some Caramel-Latte!`
        };
        break; 
    case 4:
        today = "Thursday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            color: "light brown",
            day: "Thursday",
            desc: `I love me some mocha!`
        }; 
        break;
    case 5:
        today = "Friday";
        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew coffee",
            color: "blue",
            day: "Friday",
            desc: `I love me some bubble tea!`
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            name: "",
            pic: "images/largebucks-logo.jpg",
            alt: "A picture of a largebucks-logo",
            color: "red",
            day: "Saturday",
            desc: `I love me coffee!`
        };
        break;
    
        default:
            today ="Day is unknown!";

    }
    

    document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
    document.querySelector("html").style.backgroundColor = coffee.color;
    
    //alert(today);
    console.log(coffee);

    //alert(today)