//Multiples


const printmultiple = () => {

    let userInput = window.prompt('Enter a number less than or equal to 1000');

    var sum = 0;
for (var i = 0; i <= 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}

    alert(`The sum of the multiples of 3 & 5 less than 1000 is ${sum}!`);

}


//Even dash

const printdash = () => {

    let num = prompt('Enter a number!');

    let str = num.toString();

    let output = [str[0]];

    for (let i = 1; i < num.length; i++) {

        if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {

            output.push('-', num[i]);

        }

        else {

            output.push(num[i]);

        }

    }

    alert('Here\'s your Dashed number: ' + output.join(''));

}

//Array frequency

let freq = 0;

let modeFreq = 1

let arrayItem;



const printmode = () => {


    let userInput = window.prompt('Enter an array!').split(',');

    for (let i = 0; i < userInput.length; i++) {

        for (let j = i; j < userInput.length; j++) {

            if (userInput[j] === userInput[i]) {

                freq++;

            }

            if (freq > modeFreq) {

                modeFreq = freq;

                arrayItem = userInput[i];

            }

        }

        freq = 0;

    }

    alert(`The mode is: ${arrayItem} (${modeFreq} times!)`);

}