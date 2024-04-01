// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked)
    {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";

    }
    else if(toCelsius.checked)
    {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else
    {
        result.textContent = "You must select a unit.";
    }

}

/*

    Following the tutorials of Bro Code on YouTube / JavaScript Full Course for free (2024)
    (all for learning purposes <3)

*/