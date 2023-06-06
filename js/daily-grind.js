    /*  Here are the main things we likely need to store to each coffee:
    name - name of the coffee
    pic - the picture of the coffee
    color - the color associated with the coffee
    alt - the alt tag identifying coffee
    day - the day of the week
    desc - description of the coffee
    */

    let myDate = new Date();

   */
   
    function coffeeTemplate(){
        return <p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
        ;
    }

    let today = myDate.getDay();
    
    test today = 3;
    
    switch(today){
        case 1:
            today = "Monday";
        let coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: `I love me some bubble tea!`
        };
        case 2:
            today = "Tuesday";
        break;
    
        case 3:
            today = "wednesday";
        break;
    
        default:
            today ="Day is unknown!";
    }
    
    let coffee = {
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        color: "pink",
        day: "Wednesday",
        desc: `I love me some bubble tea!`
    };
    
    console.log(coffee);

    document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

    //alert(today)