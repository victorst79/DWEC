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

## Worksheet#1

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

- 3- Using `setTimeout()`, I created a counter to within 60 seconds.

- 4- Using the previous program, when you reach 0, google loads, for this you can use the `location` object.

- 5- Using the `Date` object, its `getHours`, `getMinutes` and `GetSeconds` methods and the `setTimeout()` method create a clock that is updated every second.

## Worksheet#2

- 1- Create a page that shows:
    - A random number between 0 and 1.
    - The same but between 100 and 200.
    - It asks for two values from the user and 
    generates a random number between these two values.

- 5- Create a website to solve second degree quations. You should therefore ask for the coefficients and show the possible solutions.

- 7- Create a website that generates a table with two columns. In the first one an ascending number and in the other the value of its sine.

- 8- Create a website in which each time an image is displayed (randomly) among 3 possible.

## Worksheet#3

- 1- Create the following functions and call them from an XHTML page to show how they work:
    - a) `invierteCadena(cad_arg)`: returns a string given by the user inverted.
    - b) `inviertePalabras(cad_arg)`: returns the words contained in the chain.
    - c) `encuentraPalabraMasLarga(cad_arg)`: for a given string of characters. Returns the length of the long word contained in it
    - d) `flitraPalabraMasLarga(cad_arg, i)`: for a string of characters and a numerical value (i), return the number of words whose length is greater than i.
    - e) `cadenaBienFormada(cad_arg)`: correctly format the last string, so that only the first letter appears in capital letters and the rest in lower case.

- 2- Define a function that displays information about a text string that is it happens as an argument. From the chain that is passed to you, the function determines if that chain is formed only by capital letters, only by lowercase or by a mixture of both.


## Worksheet#4

- 1- It shows, in an HTML table, all the information that you can extract using JavaScript from the client browser.

- 2- Do the same for the information on the screen used by the client.

## Worksheet#6

- 1- Create a page that contains several links, images and example anchors and add a series of links that perform the following:
    - a) Shows the number of anchors the document has.
    - b) Show the text inside the tag of the first anchor (innerHTML).
    - c) Shows the number of images of the document.
    - d) Show the id of the first image
    - e) Shows the number of links in the document.
    - f) Change the title of the document.

## Worksheet#7

The geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
The geolocation API is published through the navigator.geolocation object. If the object exists, geolocation services are available.

- Develop a web app in which:
    - Test if geolocation is available.
    - If it's available, show the current position (latitude and longitude)
    - If it isn't available, show a message for each and everyone of the possible errors.
    - Improve your code so you show the position continuously (although the user could be in moving, so it could change)
    - Find the way to meassure the distance traveled.

- Let's try to use the geolocation information with the API of Google Maps.
    - Use a map to show your location
    - Draw a marker in your location
    - Find a way to know the address of your location (reverse geocoding).

- OPTIONAL. Complete exercise 2 with these new features:
    - Look for the way to animate your marker
    - Draw the position of the user correctly although it could be moving.
    - Draw the route of the user over the map.

## Worksheet#8

- Capture video through your webcam and show it on the web.

- Do the same but now only for the audio.

# Unit 3

## Worksheet#1

- 2- Create a website from which the launch of a 6-sided die is simulated. To do this, define a "launch" function that returns a random number between 1 and 6.

- 3- To show that everyone should have a similar probability, improve the previous web so that a simulation of 6000 runs can be generated, showing at the end the number of occurrences of each of the values.

- 6- Create a function to calculate powers in a recursive way.

- 7- Create a function that calculates the factorial of a given number. To check this, design a website that shows the factorial for the values from 1 to 10.

## Worksheet#2

You want to implement a web for the realization of puzzles. A puzzle is nothing more than a square board with a hole that we can move and that allows
reorder the pieces. Therefore, the implementation of a class that represents this game is requested taking into account:
- 1.The dimension can vary, be chosen in the creation.
- 2.The blank space only moves up, down, left, right, controlling of course it is a valid movement.
- 3.Must take control of the minimum time to solve it, as well as the number of movements made.
- 4.The boards will be generated randomly.
- 5.Implement a draw method () that will print on the screen to be able to be tested.

## Worksheet#2.1

- Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

    - a) find largest number

    - b) find longest string

    - c) find even numbers

    - d) find odd numbers

    - e) find words that contain 'is'

    - f) assert all numbers are divisible by three

    - g)  zip two arrays together

    - h) sort joined array from smallest to largest

    - i) remove the first word in the array

    - j) place a new word at the start of the array

    - k) replace some elements

    - l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically.

## Worksheet#3

- 5- Create a function called `paresImpares()` that creates an array of 100 random numbers from 1 to 1000. Once created, show the content and then organize it so that the odd and even elements are together. Then, show the array again

- 7- Write the functions to carry out the following operations for a matrix of one
dimension:
    - a) Set the 10 elements of the array to zero.
    - b) Add 1 to each of the elements of the array.
    - c) Show the array values separated by spaces.

- 8- Using a one-dimensional array, write a script to simulate the launch of two dice. The script must simulate the (random) release of both dice. The sum of the two values must be calculated below (the sum will therefore vary from 2 to 12, these being the least frequent values as well as the most frequent). Do a simulation with 36,000 launches and show the number of times each of the combinations appears.

# Unit 4

## Worksheet#1

- 1.Capture the event in Mouse Click for each time an alert is executed.
- 2.Capture the movement of the mouse, so that it shows the position in which
is in every moment.
- 3.Using the load event, shows the time elapsed since loading the page
- 4.OnMouseMove and onLoad events. The users must be able to draw with our mouse. In two different colors. To do this we first simulate that we have a graphic canvas: it really is a table with small cells (100x100 may be worth). Your program will create that canvas once the page is loaded (onLoad). The next thing will be the movement of the mouse over the cells to paint them in a color, which will be red if the Ctrl key is pressed simultaneously and blue if you press Shift. Otherwise, nothing should be painted.
- 5.Add the following features to the previous exercise:
    
    ◦ Boring lines with the mouse (by pressing the button that you decide)
    
    ◦Delete the canvas completely (with a button).

- 6.Events onMouseOver and onMouseOut. We will create a page on which the user. You can find the color represented by a sequence in hexadecimal. For this, your page must show a title (it must be an image), a text explaining the purpose of your page and a table showing the 12 hexadecimal encodings of the main colors (for example, 0000FF is the blue color). Making use of the previous events you must provide the following functionality:

    ◦When placing the pointer over the title, the color of the pointer must change (to another image that you decide). When leaving the title, it must return to its
    original color
    
    ◦If the pointer is placed on any of the hexadecimal values, it must be color the entry with the color in HTML you are representing. By stopping be above that value, the name of the color should be displayed instead of the code. (For example, when placing me on # 0000FF, this entry is shown in blue,and when leaving automatically changes that value by the string "blue").

## Worksheet#3

Create a typical registration form for your website. It must contain at least fields to enter your name, surnames, ID, Phone, email and username. All fields are required, and you must validate as many of them as possible using regular expressions. The username must consist of at least 8 characters, among which must necessarily appear a number and some punctuation.

As the focus of each input comes out, you must validate the content of it and show information to the user that indicates whether it is correct or not.

## Worksheet#4

- 1)Design a website that uses cookies to store the user's name. In this case, there is no cookie from that site, you must respond to the user's name and storage in a cookie that will expire in 5 minutes. Send this will greet the user through a message on the screen. If you have already created the cookie you must read and show the previous message directly. We should also provide a link to delete the cookie (what we might call 'Close Session').

    Note: Make sure your cookie accepts all kinds of characters (such as ñ, white space, accents, etc ...)

- 2)Improve the previous exercise and the user options so you can set the background color, paragraph and font size.

- 3)How can we make the second cookie be automatically deleted when the browser is closed? Check it.

# Unit 6

## Worksheet#1

- 5)Create a website that works like an email client. For this we suppose that in your server you have a script that as you receive an email, it is written in an XML file. So:
    - Define the XML file format that allows you to simulate this situation (emails
electronic).
    - Create the web with the necessary interface so that it periodically updates the list of
post