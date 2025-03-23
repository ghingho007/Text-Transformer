const modal = document.getElementById("myModal");
const main = document.getElementById("main");
const sentYes = document.getElementById("sentYes");
const sentNo = document.getElementById("sentNo");
const textVerify = document.getElementById("input");
const mustFill = document.getElementById("required-p");
const output = document.getElementById("output");
const copiedText = document.getElementById("copied-text");

function openModal() {
    modal.style.display = "flex"; 
    main.style.filter = "blur(4px)"; 
}

function closeModal() {
    modal.style.display = "none";
    main.style.filter = "none";
}

function reload() {
    output.value = ""; 
    textVerify.value = ""; 
    mustFill.style.display = "block"; 
    copiedText.style.display = "block"; 
    copiedText.style.color = "green";
    copiedText.innerHTML = "Fields cleared!";

    setTimeout(() => {
        copiedText.style.display = "none"; 
    }, 2000);
}

function submit() {

    if (textVerify.value.trim() === "") {
        output.innerHTML = "";
        sentNo.style.display = "flex";
        main.style.filter ="blur(4px)";

        setTimeout(() => {
            sentNo.style.display = "none";
            main.style.filter ="none"; 
        }, 1500);
    } 
    else {
            sentYes.style.display = "flex";
            main.style.filter = "blur(4px)";

            setTimeout(() => {
                sentYes.style.display = "none";
                main.style.filter = "none";
            }, 1500);

            setTimeout(() => {
                let outputText = document.getElementById("input").value;
                document.getElementById("output").innerHTML = outputText;
            }, 1510);

            
        }
    }

textVerify.addEventListener("input", function() {
    
    this.value = this.value.toUpperCase();
    
    if (textVerify.value.trim() === "" )
        mustFill.style.display = "block";
    else {
        mustFill.style.display = "none";
    }
});

function copy() {

    const textToCopy = output.value.trim().toLowerCase();
    if (textToCopy !== "") {
        navigator.clipboard.writeText(textToCopy); 
        copiedText.style.display = "block"; 
        copiedText.style.color = "green";
        copiedText.innerHTML = "Text copied!";
    
        setTimeout(() => {
            copiedText.style.display = "none";
        }, 2000);
    } else {
        copiedText.style.display = "block"; 
        copiedText.style.color = "red";
        copiedText.innerHTML = "There is no text to be copied!"; 
        
        setTimeout(() => {
            copiedText.style.display = "none";
        }, 2000);
        
    }
}

