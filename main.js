window.onload = () => {

    /* ----------------------------------------------------------------------------------------------*/ 
    // SECTION 1: INPUT BOSS NAME
    // HTML Section: 1. Right Side of the Game Play Area > Input Boss Name
    // 2. [Where it Appears] Game Headers > Sub-Title // Id = headingBoss
    // (1) Type in Boss Name, append, display as subtitle
    /* ----------------------------------------------------------------------------------------------*/     

    // Change Header to become Input Name
    let bossnameInput = document.querySelector("#nameInputField")
    let changeheaderName = document.querySelector("#submitButton")
    
        // A. Input Name of Boss
        let giveName = () => {

            let bossnameInputVal = bossnameInput.value

                if (bossnameInputVal === "") {  // If 'Mallet Up' is clicked without any boss name input
                    headingBoss.innerText = "Type a Name?"

                    alert("Don't be shy, type his name!")   // Prompt will appear to tell player to type name
                    return
                }

            let newh1 = document.createElement('h1') 
            newh1.setAttribute("style", "background-color: white;")
            newh1.innerText = "Beat " + bossnameInputVal + " up today!" 

            headingBoss.append(newh1)

            bossnameInput.value = ""
        }
        
        // B. Change Sub-Title Based on Input into Form
        changeheaderName.onclick = (event) => {
            event.preventDefault()
            headingBoss.innerText = ""
            giveName()
        }

    /* ----------------------------------------------------------------------------------------------*/ 
    // SECTION 2: CHANGE TIME LIMIT OF GAME / CHANGE GAME MODE
    // HTML Section: 1. Right Side of the Game Play Area > Buttons for Different Game Modes
    // (A) When 'Normal Game' is selected, duration of gameplay = 15 seconds (More)
    // (B) When 'Quick Game' is selected, duration of gameplay = 10 seconds (Less)
    // 1. On click, display label/indicator is shown on web to show most current game mode selected
    /* ----------------------------------------------------------------------------------------------*/      

    // (A) Normal Game
        let changeMoreTime = document.querySelector("#moreTime")

            // Function which needs to be executed for 'Normal Game'
            let changeTime15 = () => {
                
                // 1st Step: Remove any OLD game mode (indicators) selected before (remove any existing game labels due to prior selection(s))                
                let removeOldMode = document.getElementById("displayTime")
                
                while (removeOldMode.firstChild) {
                    removeOldMode.removeChild(removeOldMode.firstChild)
                }
                
                // 2nd Step: Create new game mode indicator                 
                let newTimingh4 = document.createElement('h4')
                newTimingh4.setAttribute("style", "background-color: #5cb85c;") 
                newTimingh4.innerText = "15 Seconds Game" // Output: Green game label created to show which Game Mode button clicked
                
                displayTime.append(newTimingh4)
            }
            
            // When button is clicked, display game timing for Normal Mode
            changeMoreTime.onclick = (event) => {
                quickMode10 = false // Will be run through Section 3 to feed number into countDown Timer (15 Sec)
                event.preventDefault()
                changeTime15()
                document.getElementById("time-left").textContent = "15" // Output: Displays 15 hardcode as first number in countdown
            }


    // (B) Quick Game
        let changeLessTime = document.querySelector("#lessTime")

            // Function which needs to be executed for 'Quick Game'
            let changeTime10 = () => {
                
                // 1st Step: Remove any OLD game mode (indicators) selected before (remove any existing game labels due to prior selection(s))
                let removeOldMode = document.getElementById("displayTime")
                
                while (removeOldMode.firstChild) {
                    removeOldMode.removeChild(removeOldMode.firstChild)
                }
                
                // 2nd Step: Create new game mode indicator 
                let newQuickTimingh4 = document.createElement('h4') 
                newQuickTimingh4.setAttribute("style", "background-color: #f0ad4e;")
                newQuickTimingh4.innerText = "10 Seconds Game" 

                displayTime.append(newQuickTimingh4) // Output: Green game label created to show which Game Mode button clicked
            }

            // When button is clicked, display game timing for Quick Mode
            changeLessTime.onclick = (event) => {
                quickMode10 = true // Will be run through Section 3 to feed number into countDown Timer (10 Sec)
                event.preventDefault()
                changeTime10()
                document.getElementById("time-left").textContent = "10" // Output: Displays 10 hardcode as first number in countdown
            }
    
    
    /* ----------------------------------------------------------------------------------------------*/ 
    // SECTION 3: COUNTDOWN TIMER
    // HTML Section: 1. Right Side of the Game Play Area > Buttons for Different Game Modes
    // (A) When 'Normal Game' is selected, duration of gameplay = 15 seconds (More)
    // (B) When 'Quick Game' is selected, duration of gameplay = 10 seconds (Less)
    /* ----------------------------------------------------------------------------------------------*/    
    
        // Timer on click when Start Button Clicked
        const timeLeftDisplay = document.querySelector("#time-left")
        const startBtn = document.querySelector("#start-button")
        // let timeLeft = 15

       
            let theGameModeChoosen = () => { 
                
                // Check if Quick Game is choosen [See if quickMode10 = false/true]    
                if (!quickMode10) { 
                    return 15  // False = Feed 15 into countDown (Normal Mode)
                    } return 10  // True = Feed 10 into countDown (Quick Mode)
                }

                // Activate countDown timer 
                let countDown = () => {

                    timeLeft = theGameModeChoosen() // REMEMBER: quickMode10 = false (as per declared), before start button clicked, hence put inside countDown (which is activated when Start Button clicked to register values)

                    gameInProgress = true // When start button is clicked, need to set game is in progress to true
        
                        let interval = setInterval(function(){    
                            timeLeft -=1            
                            timeLeftDisplay.innerHTML = timeLeft

                            if (timeLeft <= 0) { 
                                clearInterval(interval)
                                // timeLeft = 15
                                timeLeft = theGameModeChoosen()
                                timeLeftDisplay.innerHTML = timeLeft

                                document.querySelector("#start-button").innerText = "Start Again?"
                                gameInProgress = false                
                    
                                for (let i = 0; i < image.length; i++) {
                                    image[i].src = "./images/officeTable_image.png"
                                }

                                alert("Game Over! Click on [Start Again?] to beat again!")

                                return  // Stop the countdown
                            }
                }, 1000)
    
            } 
            
            startBtn.addEventListener('click', countDown) // On click of start button, start countdown timer

} // Close window.onload


/* ----------------------------------------------------------------------------------------------*/ 
// DECLARED GLOBAL VARIABLES
/* ----------------------------------------------------------------------------------------------*/ 

    let image = document.getElementsByTagName("img") // Set 'image' as tag for office tables (which is img in HTML)
    // How does it work: The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as an HTMLCollection object.
    // An HTMLCollection object is an array-like list of HTML elements.

    let countBeatings = document.getElementById('count') // Set countBeatings to consolidate sum of variables hit
    
    let score = countBeatings.querySelector(".score")    // Consolidates all score by using inner.HTML
    
    // let scoreHistory = document.getElementById("scoreHistory")
    // let history = document.getElementById("history")    
    // let text = document.getElementById("text")

    const hitBossSound = new Audio("css/css_hit.mp3")
    const hitDogSound = new Audio("css/css_dogbark.mp3")
    const hitWifeSound = new Audio("css/css_womanshout.mp3")

    let count = 0
    let preScore = 0 

    var gameInProgress = false // Serves as check if countDown = 0 (i.e. no more time left to play) 
    var quickMode10 = false // Serves as check if quick game mode is selected OR NOT

/* ----------------------------------------------------------------------------------------------*/ 
// GAME FLOW
/* ----------------------------------------------------------------------------------------------*/ 
    
    /* ----------------------------------------------------------------------------------------------*/    
    // (1) Start the game when 'Start' button is clicked
    // Execute function (3) to begin game
    
    let startbossgame = () => {
        count = 0
        score.innerHTML = 0
        gameInProgress = true
        appear()
    }

    /* ----------------------------------------------------------------------------------------------*/    
    // (2) To generate a random number
    // The generated number will let function (3) & (4) decide on which variable (boss/dog/wife) to appear
    
    let randomnumber = () => {
        return Math.floor(Math.random() *400)
    }

    /* ----------------------------------------------------------------------------------------------*/    
    // (3) To display either boss/dog/wife on grid - FIRST ROUND
    // By using the generated number in (2), if/else/else if statement will choose which function to execute

    let appear = () => {  

        let generatednumber = randomnumber()

        if (generatednumber %5 == 0) {  // If number can be divided by 5, wife will appear on grid
            appearwife()} 
    
        else if (generatednumber %2 == 0) {  // If number CANNOT be divided by 5, BUT is even, boss will appear on grid
            appearboss()} 
    
        else {
            appeardog()}  // If number CANNOT be divided by 5 AND is NOT even (i.e. odd), dog will appear on grid

        console.log(generatednumber)  // 'Inspect' what is the generated number to check
    }


    /* ----------------------------------------------------------------------------------------------*/
    // (4) To display either boss/dog/wife on grid - SUBSEQUENT ROUNDS
    // By using random number generated, if/else/else if statement will choose which subsequent function to execute from 
    // Executed at the end from (5), (6) and (7)
    
    let newappear = () => {

        // Check if game is in progress, if not in progress, return
        if (!gameInProgress) {
            return
        }

            let generatednumber = randomnumber()
            
            if (generatednumber %5 == 0) {
                setTimeout(appearwife, 500)} 
                
            else if (generatednumber %2 == 0) {
                setTimeout(appearboss, 500)} 
                
            else {
                setTimeout(appeardog, 500)}
                console.log(generatednumber)  
    }

    /* ----------------------------------------------------------------------------------------------*/
    // (5) When function (3) or (4) is executed, either (A) Boss/ (B) Dog/ (C) Wife will appear
    // Either 1 of 2 outcomes will happen (die/runaway), depending on whether boss variable is clicked or not

    // (5A) For Boss to appear
    let appearboss = () => { // Try using function declaration if there is an error with regards to setTimeout
        console.log(gameInProgress)
        if (!gameInProgress) {
            return
        }
        bossvariable = Math.floor(Math.random() * 9) // bossvariable = array index [i] (random number)
        image[bossvariable].src = "./images/boss_image_1.png" // image[i].src (i.e. change table to boss image)
        image[bossvariable].setAttribute("onclick","dieboss()") // Outcome 1: boss hit = aka clicked ->  image[i].setAttribute on click (i.e. if hit, boss die fucntion will execute)
        
        setTimeout(runawayboss, 500)   //Outcome 2: boss NOT hit aka NO CLICK after X seconds -> setTimeout (i.e. if X secs no click, boss runaway function executes) 
                                        //AND to let the appearboss() go away when Outcome 1 is achieved (dieboss does not have line to make uninjured boss disappear)
    }

    // (5B) For Dog to appear
    let appeardog = () => {
        console.log(gameInProgress)
        if (!gameInProgress) {
            return
        } 
        dogvariable = Math.floor(Math.random() * 9)
        image[dogvariable].src = "./images/officedog_image.png"
        image[dogvariable].setAttribute("onclick","diedog()")
        setTimeout(runawaydog, 500)
    }
    
    // (5C) For Wife to appear
    let appearwife = () => {
        console.log(gameInProgress)
        if (!gameInProgress) {
            return
        } 
        wifevariable = Math.floor(Math.random() * 9)
        image[wifevariable].src = "./images/bosswife_image.png"
        image[wifevariable].setAttribute("onclick","diewife()")
        setTimeout(runawaywife, 500)
    }
    
    /* ----------------------------------------------------------------------------------------------*/
    // (6) When function (5) is executed + Outcome 1
    // Image is being clicked on (i.e. hit), results in points being scored/deducted
    // IMPORTANT NOTE: DO NOT LINK REAPPEAR() OR ANY FUNCTIONS HERE - ULTIMATELY, THE LAST LINE OF APPEAR() WILL BE EXECUTED
    
    // (6A) Boss being hit
    let dieboss = () => {
        if (!gameInProgress) {
            return
        }
        hitBossSound.play()
        image[bossvariable].src = "./images/bossdie_image_1.png"
        image[bossvariable].removeAttribute("onclick")
        // newappear()        
        // setTimeout("newappear()", 1000)
        count +=5
        score.innerHTML = count
    }

    
    // (6B) Dog being hit
    let diedog = () => { 
        if (!gameInProgress) {
            return
        }
        hitDogSound.play()
        image[dogvariable].src = "./images/officedogdie_image.png"
        image[dogvariable].removeAttribute("onclick")
        // newappear()
        // setTimeout("newappear()", 1000) 
        count--
        score.innerHTML = count
    }


    // (6C) Wife being hit
    let diewife = () => {
        if (!gameInProgress) {
            return
        }
        hitWifeSound.play()
        image[wifevariable].src = "./images/bosswifedie_image.png"
        image[wifevariable].removeAttribute("onclick")
        // newappear()
        // setTimeout("newappear()", 1000)
        count -=5
        score.innerHTML = count
    }


    /* ----------------------------------------------------------------------------------------------*/
    // (7) When function (5) is executed + Outcome 2
    // Either 1 of 2 outcomes will happen (die/runaway), depending on whether boss variable is clicked or not

    // (7A) Boss to Disappear
    let runawayboss = () => {
        if (!gameInProgress) {
            return
        }
        image[bossvariable].src = "./images/officeTable_image.png"
        image[bossvariable].removeAttribute("onclick")
        // if (image[bossvariable].src === "./images/officeTable_image.png"){
        //     return
        // }
        newappear()
        // setTimeout(newappear, 1000)
    }

    // (7B) Dog to Disappear
    let runawaydog = () => {
        if (!gameInProgress) {
            return
        }
        image[dogvariable].src = "./images/officeTable_image.png"
        image[dogvariable].removeAttribute("onclick")
        // if (image[dogvariable].src === "./images/officeTable_image.png"){
        //     return
        // }
        newappear()
        // setTimeout(newappear, 1000)
    }
        

    // (7C) Wife to Disappear
    let runawaywife = () => {
        if (!gameInProgress) {
            return
        }
        image[wifevariable].src = "./images/officeTable_image.png"
        image[wifevariable].removeAttribute("onclick")
        // if (image[wifevariable].src === "./images/officeTable_image.png"){
        //     return
        // }
        newappear()
        // setTimeout(newappear, 1000)
    }        
