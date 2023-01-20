# Portfolio Landing Page

#### By **Brishna Bakshev**

##### A simple HTML and JavaScript form to input a number and receive a string. 

## Technologies Used

* HTML
* JavaScript
* VS Code

## Description

This browser application allows users to create a form to input a number if the remainder of the number ends with 1,2 and 3 the user will receive a different output based on the number.

* 1 = Beep!
* 2 = Boop!
* 3 = Won't you be my neighbor?

## Setup/Installation Requirements
Open Terminal
Change the current working directory to the location where you want the cloned directory (ex: Desktop)
```sh
git clone https://github.com/bbakshev/beep-boop
```
In the Terminal, navigate to the folder you have cloned in your Desktop
Open the code in VS code by typing: 
```sh
code .
```
Once the code is completed, open the index.html in your browser by double clicking on the file from the folder.

## Known Bugs

No known bugs are present within this code

## TDD

Describe: beepBoop()

Test: "It should return "Beep!" if a number entered contain a 1"
Code:
const number = 1;
Expected Output: "Beep!"

Test: "It should return "Boop!" if a number entered contain a 2"
Code:
const number = 2;
Expected Output: "Boop!"

Test: "It should return "Won't you be my neighbor?" if a number entered contain a 3
Code:
const number = 3;
Expected Output: "Won't you be my neighbor?"

Test: "It should display the remaiders of the inputed numbers"
Code:
const number = 12;
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop!"]

Test: "It should display a list of values starting with 0 + user's inputed number"
Code:
const number = 5;
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

## License

MIT

Copyright (c) 2023 Brishna Bakshev