function num() {
    let userInput= document.getElementById("wow").value.trim().split(/\s+/);
    count=1

    if (userInput==""){
        document.getElementById("kok").textContent = "Total Words: 0";
        return;
    }
    words=userInput.length
        document.getElementById("kok").textContent = "Total Words: "+ words;

    }