window.onload = () => {

    // Timer on click when Button Clicked
    const timeLeftDisplay = document.querySelector("#time-left")
    const startBtn = document.querySelector("#start-button")
    let timeLeft = 20

    let countDown = () => {
        setInterval(function(){
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0)
                document.querySelector("#start-button").innerText = "Start Again?"
                document.querySelector("#start-button").addEventListener('click', countDown())
                // alert("Good Job! You are your own boss!")
                return 
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

    startBtn.addEventListener('click', countDown) // On click of start button, start countdown timer


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
            newh1.attributes = "color", "red"
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


}


    let image = document.getElementsByTagName("img") // Set 'image' as tag for office tables (which is img in HTML)
    // How does it work: The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as an HTMLCollection object.
    // An HTMLCollection object is an array-like list of HTML elements.

    let countBeatings = document.getElementById('count') // Set countBeatings to consolidate sum of variables hit
    
    let score = countBeatings.querySelector(".score")    // 
    
    let scoreHistory = document.getElementById("scoreHistory")
    
    let text = document.getElementById("text")
    
    let history = document.getElementById("history")

    const hitBossSound = new Audio('css/css_hit.mp3')
    const hitDogSound = new Audio('css/css_dogbark.mp3')
    const hitWifeSound = new Audio('css/css_womanshout.mp3')

    
    let bossvariable
    let officedogvariable
    let wifevariable
    
    let count = 0
    let preScore = 0 
    
    /* ----------------------------------------------------------------------------------------------*/    
    // (1) Start the game when 'Start' button is clicked
    // Execute function (3) to begin game
    let startbossgame = () => {
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

        console.log(generatednumber)  // 'Inspect' what is the generated number to checl
    }


    /* ----------------------------------------------------------------------------------------------*/
    // (4) To display either boss/dog/wife on grid - SUBSEQUENT ROUNDS
    // By using random number generated, if/else/else if statement will choose which subsequent function to execute
    let newappear = () => {

        let generatednumber = randomnumber()
        
        if (generatednumber %5 == 0) {
            setTimeout(appearwife, 2000)} 
            
        else if (generatednumber %2 == 0) {
            setTimeout(appearboss, 2000)} 
            
        else {
            setTimeout(appeardog, 2000)}
            console.log(generatednumber)  
    }

    /* ----------------------------------------------------------------------------------------------*/
    // (5) When function (3) or (4) is executed, either (A) Boss/ (B) Dog/ (C) Wife will appear
    // Either 1 of 2 outcomes will happen (die/runaway), depending on whether boss variable is clicked or not

    // (5A) For Boss to appear
    let appearboss = () => { // Try using function declaration if there is an error with regards to setTimeout
        bossvariable = Math.floor(Math.random() * 9) // bossvariable = array index [i] (random number)
        image[bossvariable].src = "./images/boss_image_1.png" // image[i].src (i.e. change table to boss image)
        image[bossvariable].setAttribute("onclick","dieboss()") // Outcome 1: boss hit = aka clicked ->  image[i].setAttribute on click (i.e. if hit, boss die fucntion will execute)
        setTimeout(runawayboss, 1000) //Outcome 2: boss NOT hit aka NO CLICK after X seconds -> setTimeout (i.e. if X secs no click, boss runaway function executes) 
    }

    // (5B) For Dog to appear
    let appeardog = () => { 
        dogvariable = Math.floor(Math.random() * 9)
        image[dogvariable].src = "./images/officedog_image.png"
        image[dogvariable].setAttribute("onclick","diedog()")
        setTimeout(runawaydog, 1000)
    }
    
    // (5C) For Wife to appear
    let appearwife = () => { 
        wifevariable = Math.floor(Math.random() * 9)
        image[wifevariable].src = "./images/bosswife_image.png"
        image[wifevariable].setAttribute("onclick","diewife()")
        setTimeout(runawaywife, 1000)
    }
    
    /* ----------------------------------------------------------------------------------------------*/
    // (6) When function (5) is executed + Outcome 1
    // Image is being clicked on (i.e. hit), results in points being scored/deducted
    
    // (6A) Boss being hit
    let dieboss = () => {
        hitBossSound.play()
        image[bossvariable].src = "./images/bossdie_image_1.png"
        image[bossvariable].removeAttribute("onclick")
        newappear()        
        // setTimeout("newappear()", 1000) 
        count +=5
        score.innerHTML = count
    }

    
    // (6B) Dog being hit
    let diedog = () => {
        hitDogSound.play()
        image[dogvariable].src = "./images/officedogdie_image.png"
        image[dogvariable].removeAttribute("onclick")        
        newappear()
        // setTimeout("newappear()", 1000) 
        count--
        score.innerHTML = count
    }


    // (6C) Wife being hit
    let diewife = () => {
        hitWifeSound.play()
        image[wifevariable].src = "./images/bosswifedie_image.png"
        image[wifevariable].removeAttribute("onclick")         
        newappear()
        // setTimeout("newappear()", 1000)
        count -=5
        score.innerHTML = count
    }


    /* ----------------------------------------------------------------------------------------------*/
    // (7) When function (5) is executed + Outcome 2
    // Either 1 of 2 outcomes will happen (die/runaway), depending on whether boss variable is clicked or not

    // 2. Boss to Disappear
    let runawayboss = () => {
        image[bossvariable].src = "./images/officeTable_image.png"
        image[bossvariable].removeAttribute("onclick")
        if (image[bossvariable].src === "./images/officeTable_image.png"){
            return
        }
        setTimeout(newappear, 1000)
    }

    // 2. Dog to Disappear
    let runawaydog = () => {
        image[dogvariable].src = "./images/officeTable_image.png"
        image[dogvariable].removeAttribute("onclick")
        if (image[dogvariable].src === "./images/officeTable_image.png"){
            return
        }
        setTimeout(newappear, 1000)
    }
        

    //2. Wife to Disappear
    let runawaywife = () => {
        image[wifevariable].src = "./images/officeTable_image.png"
        image[wifevariable].removeAttribute("onclick")
        if (image[wifevariable].src === "./images/officeTable_image.png"){
            return
        }
        setTimeout(newappear, 1000)
    }        