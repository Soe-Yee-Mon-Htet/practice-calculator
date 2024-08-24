const display = document.getElementById('display');
function appendToDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value = "";
};

function calculate(){
    try{display.value = eval(display.value)}
    catch(Error)
    {
        display.value = "Error";
    }
};

//git init
// git status (Which file you changed)
//git add (To track your file) staging area
//git commit (give message name)
//git log (how many commit you and other do)
//git checkout
//(1) Working directory, working tree,working workspace
//(2)Staging Area
//Repository

