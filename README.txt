UPDATE: 2021.05.07
PROJECT 1 - BEAT THE BOSS! (With 2 play versions)

LINKS:
LINK TO GITHUB: https://github.com/JiaYun96/beattheboss
LINK TO LIVE SITE: https://jiayun96.github.io/beattheboss/

*******************************************************************************************
1) OVERVIEW:
*******************************************************************************************
1.1 Introduction:
BEAT THE BOSS! is a whack-a-mole game variant.
- Played on a 3x3 playgrid (9 cells in total), player will be exposed to variable(s) which appears one by on at random on a cell.
- The target has been adjusted from 'Mole' to 'Boss'.

The game is a special spin on the conventional whack-a-mole game, with personalisation elements being offered.
- Inputs such as the 'enemy/boss's' name could be done, adding a more unique game play experience customed for the player.
- Varying game modes (duration of play) could also be selected to cater for a more relaxed or exciting game play.


1.2 The Objective:
To score the most number of points within a stipulated game time.
Points are earned by 'hitting' the Boss (+5).
Points are deducted when the player incorrectly hits on the Office Dog ('Dog') (-1) or the Boss's Wife ('Wife') (-5), if available.


1.3 There are 2 different versions of this game:
Version 1 [3 Variables]
- HTML File: [index.html]
- JS File: [main.js]
- Gameplay difference: BEAT THE BOSS! with point deduction system 3 variables (Boss, Dog, Wife) 

Version 2 [1 Variable]
- HTML File: [index_bossOnlyVersion.html]
- JS File: [main_bossOnlyVersion.js]
- Gameplay difference: BEAT THE BOSS! with only positive scoring system using 1 single variable (Boss)


*******************************************************************************************
2) TECHNOLOGIES USED:
*******************************************************************************************
1. HTML
- Provided the overall structure of the game
- Linked to CSS and JavaScript ('JS') files
- Included buttons, field inputs, table, etc.
- Gave elements Ids, Classes, etc.
- Created elements Div, Span, etc.

2. CSS
- Style reference for HTML document
- Used color, margin, height, alignment, text, etc. to clean up overall look

3. JavaScript
- Programming language used to execute the entire game
- NO JQuery used: Pure Vanilla JS
- Utilised document object to access and manipulate HTML
- Included audio
- Core execution of functions related to HTML and entire gameplay

4. Additional: Bootstrap 5.0 CSS (ref. HTML)
- Use of container and col-9 and col-3


*******************************************************************************************
3) APPROACH TAKEN:
*******************************************************************************************
Basic Achievables:
0. Overall webpage must have a consistent Grid (main play area) and button to start game
1. In each cell, there should be a randomised chance of a variable (e.g. Boss) appearing
2. When the varaible is clicked, score must be accumulated
3. When variable is hit, change to image of it being hit
4. Variable (hit or not hit) must be able to become normal office table (aka cell reset)
5. New variable must be generated to continue gameplay
6. Timer must be used to limit gameplay timing, else it will be infinite gameplay
7. Indicator that current game has ended

[Note: Elaboration of approach can be found throughout JS file]

(0) 
- Structured Using Bootstrap container, col-9 and col-3
- Included start button with 'onclick' attribute (will trigger timer to start, and variants to appear)

(1) 
- Selected all img (before game start) and make it into array 
let image = document.getElementsByTagName("img")
- Prepare an APPEAR function with the following:
- Used random number generator (Math.floor, Math.random) and set it as index for array
- Assign number generated as variable, execute()
- Run the random number generated variable into the array to decide where the variable should appear
- Set image.src as image of variable (change office table image to variable image once index passed through array)
- Set attribute to variable image (onclick) => run DIE function

(2) (3)
- When variable is clicked, DIE function is executed:
- img.src will be changed to image of variable being hit
- count will increase based on the variable value (+5, etc.)
- using .innerHTML, accumulate the total counts till date

(4) (5)
Under APPEAR function, last line is setTimeout for RUNAWAY** function to execute:
- This means that:
- Outcome 1; 
Variable is hit, means after DIE function is executed, last line of APPEAR function will revert it to a table image
- Outcome 2; 
Variable is NOT hit (aka runaway), DIE function will NOT be executed, last line of APPEAR function will revert it to table image

** RUNAWAY function:
- Will change image.src as office table (change executed variable image (appear or die) to become back to table image)
- For runaway function, AT THE END, it will evoke another function to ensure that game continues (either APPEAR or REAPPEAR, depending on which game type)

(6)
- countDown with timing of game must be set, and onclick of start button, the countDown will run correspondingly
- once countDown <= 0 , this means that the game has effectively ended and should not continue
- we will also assign a test to see if gameInProgress = true or false (will be declared at beginning)
- NOTE: when countDown <=0, gameInProgress = false
- we will use if/return to check if gameInProgress = false; if so, function will not be executed
- functions with if/return will include all those that will impact the variants appearing/disappearing/reappearing

(7)
- Added alert prompt to inform player that game is over, will he/she want to restart?


*******************************************************************************************
4) HIGHLIGHT REEL OF METHODS/FUNCTIONS USED:
*******************************************************************************************
- if/else 
- Math.floor, Math.random
- for/while loops
- .onclick
- setTimeout
- document objects to access and manipulate HTML
- .src , .append, .setAttribute, getElementsByTagName, getElementById, querySelector, etc.
- alert()
- ... many more


*******************************************************************************************
5) PROBLEMS ENCOUNTERED:
*******************************************************************************************
SOLVED:
1) Rendering Issue (looped similar codes too many times), end up images unable to disappear
- Removed some reappear() functions from executing, cleaned up codes

2) Difficulties knowing where function should be executed (inside? outside?)
- Played around with the JS file and consulted instructor

3) Linked CSS wrongly (used ref instead of rel in HTML)
- Spotted by instructor

4) Had trouble finding which div to append/remove from (i.e. which is parent?)
- Ctrl + Click and retract, rename where necessary

5) Unable to reset all images at the end of the game to pre-game (i.e. no tables)
- Originally forgot that getElementsByTagName is an array, forgot to use FOR loop
- Used FOR loop to change all images which are not office tables to become office tables


*******************************************************************************************
6) WHAT WILL I DO DIFFERENTLY NEXT TIME:
*******************************************************************************************
1) Stick to proven, conventional methods. 
- Rectification of issues could be easier especially when proven ways of coding has already been established.
- Personal comments; I don't think getElementsByTagName is often used in games like this
- This opened many minor bugs due to system limitations, and may also affect scalability of the game moving forward.

2) The importance of commenting for each line
- More often than not, I find myself forgetting why I did something earlier in the project (i.e. why is this code here?)
- When I returned back to my code, realised I have no idea what I did previously

3) Create unique Ids and Classes which does not overdeviate 
- Currently there are too many similar sounding Ids, Classes, etc.
- When labelling Ids/Classes/ etc, pick names which elaborates on the nature or intent of it so as to have a easier life
- Mistakes were often made as I target the wrong Id/Class as the names are very similar sounding
- BUT easy to say, hard to achieve :')


*******************************************************************************************
7) CREDITS:
*******************************************************************************************
Special shoutout to Jon and Minshan, who had blessed me with their kindness, time and expertise on my 1st project.
All image credits to owners (c).
Mallet Image: http://www.rw-designer.com/icon-detail/7085