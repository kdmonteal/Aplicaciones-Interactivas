var askButton = document.getElementById("askButton"),
    questionInput = document.getElementById("question"),
    responseText = document.getElementById("responseText");

askButton.addEventListener("click", async function(){
    const question = questionInput.value;

    if(question){
        responseText.textContent = "Pensando...";
    }else{
        responseText.textContent = "Ingrese un texto...";
    }
});
