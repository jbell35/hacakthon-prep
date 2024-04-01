//DICE ROLLER PROG

function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_imgs/img${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}

/*

    Following the tutorials of Bro Code on YouTube / JavaScript Full Course for free (2024)
    (all for learning purposes <3)

*/
