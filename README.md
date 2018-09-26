# DWEC
Practicas de "Desarrollo Web en Entorno Cliente" de 2º CFGS en Desarrollo de Aplicaciones Web Bilingüe (DAW).

# Unit 1

## Worksheet#1

- 4- Using two variables, it operates and displays the value of both
("The value of the first variable is ..."), and the result of the main operations
mathematics ("The sum is: ....").

## Worksheet#2

- 1- The Age Calculator

    - Store the curret year in a variable.
    - Store their birth year in a variable.
    - Calculate their 2 possible ages based on the stored values.
    - Output them to the screen like so: "They are either NN or NN", substituting the values.

- 3- The Geometrizer

    - Store a radius into a variable.
    - Calculate the circumference based on the radius, and output "The circumference is NN".
    - Calculate the area based on the radius, and output "The area is NN".


- 4- The Temperature Converter

    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".
    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."

## Worksheet#3

- 1- The Fortune Teller

    - Write a function named `tellFortune` that:
        - Takes 4 arguments: number of children, partner's name, geographic location, job title.
        - Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    - Call that function 3 times with 3 different values for the arguments.

- 2- The Age Calculator

    - Write a function named `calculateAge` that:
        - Takes 2 arguments: birth year, current year.
        - Calculates the 2 possible ages based on those years.
        - Outputs the result to the screen like so: "You are either NN or NN"
    - Call the function three times with different sets of values.
    - Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

- 3- The Lifetime Supply Calculator

    - Write a function named `calculateSupply` that:
        - Takes 2 arguments: age, amount per day.
        - Calculates the amount consumed for rest of the life (based on a constant max age).
        - Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
    - Call that function three times, passing in different values each time.
    - Bonus: Accept floating point values for amount per day, and round the result to a round number.

- 4- The Geometrizer

 - Create a function called `calcCircumfrence`:

    - Pass the radius to the function.
    - Calculate the circumference based on the radius, and output "The circumference is NN".

- Create a function called `calcArea`:

    - Pass the radius to the function.
    - Calculate the area based on the radius, and output "The area is NN".

- 5- The Temperature Converter

- Create a function called `celsiusToFahrenheit`:

    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".

- Create a function called `fahrenheitToCelsius`:

    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."

## Worksheet#4

- 1- What number's bigger?

    - Write a function named `greaterNum` that:
        - Takes 2 arguments, both numbers.
        returns whichever number is the greater (higher) number.
    - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

- 2- The World Translator

    - Write a function named `helloWorld` that:
        - Takes 1 argument, a language code (e.g. "es", "de", "en")
        returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
    - Call that function for each of the supported languages and log the result to make sure it works.

## Worksheet#5

- 10- Write a program that shows the phrase "Header h" followed by the number.
The phrases must be formatted with the appropriate labels

- 11- Make a program that asks for keyboard three values: the number of columns of a table and, the height and width (in pixels) of its cells. Once typed these values, the program will paint on the web page a table HTML of a row by the number of columns typed.

- 12- Modify the previous exercise so that the odd columns have a black background and couple white background.

- 13- Adapt Exercise 11 using a `while` loop instead of a `for` loop.

- 14- Adapt Exercise 4.12 using a `while` loop instead of a `for` loop.

- 15- Write a program in JavaScript that consists of guessing a number previously introduced by keyboard (player 1). The program will ask for as many numbers as erroneous attempts make the player 2. It will only end when player 2 hits. The program will give clues to player 2 indicating if his number is greater or less than the number to guess.

- 16- Adapt exercise 4.15. to the loop `do...while`.

- 17- Make a program in JavaScript using two nested `for` loops to print on the screen all the multiplication tables.

- 18- Make a program that asks for keyboard four values: the number of columns and rows of a table and, the height and width (in pixels) of their cells. Once these values are typed, the program will paint on the web page an HTML table of the number of rows by the number of columns typed.

- 19- Make a program that will paint a chess board of 8x8 squares using two for nested. The program will only ask for the width of the cell that will be the same as the height.

## Worksheet#6

- 1- Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

- 2- Write a function called `addOnlyNums` that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

- 3- Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.

- 4- Write a function called `combineTwoArrays` that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

- 5- Write a function called `sumEveryOther` that takes in any amount of arguments, and returns the sum of every other argument.

```javascript
sumEveryOther(5, 6, 3, 4, 1); //9
sumEveryOther(10, 2, 11); //21
```
- 6- Write a function called `onlyUniques` that can take in any number of arguments, and returns an array of only the unique arguments.

- 7- Write a function called `onlyUniques` that can take in any number of arguments, and returns an array of only the unique arguments.

```javascript
onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']
onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]
```

- 8- Write a function called `combineAllArrays` that takes in any number of arrays as arguments and combines all of them into one array.

- 9- Write a function called `squareAndSum` that takes in any number of arguments, squares them, then sums all of the squares.

```javascript
sumAndSquare(2, 4, 3); //29
sumAndSquare(1, 2); //5
```

# Unit 2

### Worksheet#1

- 1- Make a page that creates an object of type `Date` and show on the page the following information (each line):
    - The current year.
    - The current month.
    - The current day.
    - The current minutes.
    - The current seconds.

- 2- Create a web page that shows the result of each of the following sections
    - Create variable `fechaHoy` with today's date.
    - Create a variable `fecha85` that adds 85 days to the variable `fechaHoy`.
    - Create variable `fecha187` that subtracts 187 days as variable `fechaHoy`.
    - Add 2 years to the variable `fecha85`.
    - Subtract 24 hours from the variable `fecha187`.
    - Create variable `fechaResto` that is the subtraction of `fecha85` - `fecha187` and see what you get.