let selectDate   = document.querySelector("#date_input");
let clickButton  = document.querySelector(".age_button");
let showYear     = document.querySelector(".age_count");

clickButton.addEventListener("click" , function(){
    if(selectDate.value === ""){
        alert("Please enter your birthday:")
    }
    else{
        //select time calculator
        let date = new Date(selectDate.value);
        // console.log(date);
        let date_year = date.getFullYear();
        // console.log(date_year);

        // now time calculator
        let currDate = new Date();
        // console.log(currDate);
        let currDate_year = currDate.getFullYear();
        // console.log(currDate_year);

        // find your age answer
        let yourAge = (currDate_year - date_year) - 1;
        // console.log(yourAge);

        showYear.innerHTML = `Your age is ${yourAge} years old`;
    }
})
