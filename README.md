# Interactive Card Memory Game

## Code Institute - Interactive Frontend Development Milestone Project

Play the game here: [Feline Memory Match Game](https://nocheerleader.github.io/interactive-frontend-dev-project/ "Card Game")

After much online research and JavaScript practice I decided to build an interactive memory game. It was inspired by a childhood card game which tests a players recall and memory. The game is simple in nature as the instructions state: 

*“This is a memory game where you need to match pairs of cards. Playing is very simple - you click to turn over one card and then try to find a matching card. But don't let the timer run out!”*

My aim was to build an online version of this memory game where users can play to test their own memory. The logic and functions of the game are written in JavaScript and the frontend was visually developed with HTML and CSS. 

### UX
The objective when building this game was simplicity. As I am new to JavaScript, I wanted to create a product that was usable and functional as an interactive memory game for players, without over complicating things aesthetically. 

I was able to achieve these goals by placing myself in the shoes of the user and asking why a player would be motivated to play this game, what are the games functions and features and how can I present this game in an aesthetically pleasing way. 

As part of the UX project I sketched up some wireframes which can be viewed here: 

- [Desktop Wireframe](https://photos.google.com/photo/AF1QipP4yCUWv82r96Fb8ZxD62kC4V8rQxN0i5nWHOtL)
- [Mobile Wireframe](https://photos.google.com/photo/AF1QipMCHbAWQqiC52kvd4wa3oPXEuz72s_a4G6lAxTQ)

The structure of the card game board was achieved using HTML and CSS-grid. The parent div contains all cards. The box-sizing CSS property set the total width and height of all elements and in this game, I used border-box to tell the browser padding and border are included in the width and height.

### User Stories

After careful research I knew I wanted to build this interactive game with prospective players in mind. From their perspective I created the following user stories to keep me on track:

- As a player, I want to play along with a game online, to improve my memory. 
- As a player, I would like to be able to track the number of moves I have made, so I can see how I am improving over time.
- As a player, I want a restart option, for times when I lose the game and want to play again. 
- As a player, I want the game to have an end point, so I can feel I have reached a goal. 
- As a player I would like the cards to be shuffled so they are in a different spot each time I restart. 

### Features

**Feature 1:** click to Start – this allows the players to begin a game. 

**Feature 2:** click to Reset – this allows a player to restart and play again. 

**Feature 3:** Timer – this is a countdown timer allowing a player to see how much time they have remaining before they are met with the ‘Game Over’ screen. 

**Feature 4:** Flip Count – this shows a player how many attempts it has taken them to guess all correct pairs 

**Feature 5:** Audio – I added five audio files to complement game play, including background music, a card flip and card match sound effects and music files which identify your status at the end of the game if you are a winner or loser (game over audio file) 

**Feature 6:** Animations – the CSS keyframe animations and transforms indicate when a player is hoovering over a card and when they have made a successful match. 

**Feature 7:** Media Query – I made the game mobile responsive by adding a media query to allow the cards to be displayed on both desktops and other media such as tablets and mobile phones.  

### Features Left to Implement

In the future, I would like to add additional features to the game including:
- A strict mode that adds a further challenge for players
- A mute button if the player didn’t want sound
- With regards accessibility, make the game colour-blind friendly 
- A leaderboard to show players where they rank 
- A star rating system (from 1-3) that reflects the player’s performance based on the number of flips and shortest time

### Technologies Used

**CLOUD9 IDE** Cloud9 is an online integrated development environment that supports multiple programming languages HTML, JavaScript and Python. I used it to build and save my project and to push my commits to GitHub as it has a built in Unix terminal.

**HTML5** HTML5 is the 5th edition of the internet's core mark-up language used for creating content for the web and web applications. I used this as the foundation to build the frontend of the website.

**CSS** CSS aka Cascading Style Sheets is a file used to keep the structure of a document (HTML) separate from the details of how to design and display it. I keep my style.css file separate from my index.html to make maintenance of the website less complicated. I used CSS to create the aesthetic I was going for from my wireframe designs. 

**JAVASCRIPT** JavaScript is an object-oriented computer programming language that follows the ECMAScript standards. I used JavaScript to make the game interactive. It included several functions including shuffling the cards, the audioController, the countdown timer and flip count. The JavaScript also had to handle the matched and unmatched cards during gameplay using a couple of different functions -CheckForCardMatch and CardMismatch. 

**GOOGLE FONTS** Google Fonts is an API which allows developers to use web fonts in their sites and web applications. From the Google Fonts collection I chose two fonts for this website - Exo and Roboto. After making my selection I added a stylesheet link to request the desired web font from the API and finally in the style.css stylesheet I styled an element with the requested web font.

**MICROSOFT WORD** Word is text processor. I used it to write up the content of the README file and check for spelling and grammatical errors before creating the mark down file and pushing it to my GitHub repository. 

**CHROME DEV TOOLS** Dev Tools are web development tools which allow developers to test and debug their code. Used for testing functions and website responsiveness and for experimenting with different colours and CSS styles.

### Testing

Firstly, I checked index.html on validator.w3.org and removed fixed the errors and warnings identified. I had forgotten to add an alt attribute to my images so I corrected all of those. 

I followed this up by checking style.ccs on jigsaw.w3.org/css-validator where no errors were found.

To check responsiveness, I viewed the site on a few different devices of family and friends, including:

- Mac 21” monitor
- Windows 15” monitor
- iPhone 7 Plus
- iPhone 8 Huawei P21
- Samsung Galaxy S5
- iPad Mini
- iPad 768 x 1024

I also used responsivedesignchecker.com and Chrome Dev Tools for testing all other devices.

The site was also tested across multiple browsers to ensure compatibility (Chrome, Firefox, Edge, Safari and Internet Explorer).

I also asked family and friends to test the gameplay to ensure it was easy to understand and worked a planned. 

### Deployment

Deployment means to make the project live on the internet, accessible to anyone via a URL. I have listed the stages that I worked through below: 

**(i) Development**  
At the start of the build a new repository was created in GitHub and initialised in Git. I took a local repository from my machine and pushed it to a remote repository on GitHub. Throughout the development, the project was regularly pushed to GitHub, ensuring each new piece of functionality would be in a separate commit.

**(ii) Staging** 
the-interactive-memory-game is hosted using GitHub pages, deployed directly from the master branch.
To run the project locally you can clone this repository directly into any HTML editor, for example ATOM, Notepad++ or Sublime.

**(iii) Production**
The final stage of the project is production deployment. This is when the project is pushed live and can be used by the target audiences – the people who want to play the game. This stage includes documentation, such as the details in this README file and should be updated as and when any changes are made to the production environment. 

After production deployment a proper monitoring and logging system is essential to keep a check on the live environment. During development it is easier to deal with bugs because if something isn’t working you can play around with it until you find a fix. However, comparatively, you can’t do this when the website is live. 

### Credits

I learned about CSS Grids here: https://css-tricks.com/snippets/css/complete-guide-grid/

I learned about CSS Box sizing here: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

I read this article on JavaScript Async loading: https://flaviocopes.com/javascript-async-defer/

I read this article on JavaScript Audio Controllers: https://www.quanzhanketang.com/jsref/prop_audio_controller.html

I learned about JavaScript Constructors here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

##### Acknowledgements

As noted in the index.js file I used the Fisher Yeats Shuffle code which I took directly from a tutorial and learned more about here: 

- https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
- https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

I practiced along with the following online tutorials and received inspiration from them to help create my own game: 

- https://www.udemy.com/course/javascript-matching-game/
- https://www.youtube.com/watch?v=ZniVgo8U7ek
- https://www.youtube.com/watch?v=28VfzEiJgy4
- https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

I downloaded the images for the cards here: 

- https://www.flaticon.com/
- https://iconscout.com/icon/cat-33

I downloaded the audio files here: 

- CARTOON MP3: https://freesound.org/people/dominictreis/sounds/423321/
- CARD FLIP: https://freesound.org/people/Splashdust/sounds/84322/
- WINNER: https://freesound.org/people/PearceWilsonKing/sounds/249524/
- GAME OVER: https://freesound.org/people/dersuperanton/sounds/434465/

