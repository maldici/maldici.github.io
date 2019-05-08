    const clearAll = () => {
    document.getElementById("results").innerHTML = "(click 'Process')"; 
    document.getElementById("string").value = "";
    }
    const delimit = () => {
        const banWords = ["II", "III", "IV", "V", "JR", "JR.", "SR", "SR.", "ESQ", "ESQ.", "DE", "LA", "LE", "VAN", "DER",
        "DEL", "DELLA", "E", "VON", "AL", "BEN", "BIN", "DA", "DAS", "DEN", "DI", "DO", "DOS", "D'", "DU", "EL", "IL",
        "L'", "MAC", "MC", "O'", "SAINT", "SAINTE", "ST.", "STE.", "TEN", "TER", "V.", "V.D.", "SEN", "ZUM"]
              
        let counter = 0,
        dArray = String(document.getElementById('string').value).split(" "),
        banCount = 0
        // Capture ban word match, eliminate fusion between ban word + prior word, halt comparison after match
        checkInput: for (let i = 0; i < dArray.length; i++){
            checkBans: for (let b = 0; b < banWords.length; b++){
                if (dArray[i].toUpperCase() == banWords[b]){
                    banCount++ 
                    dArray.splice(i, 1, " " + dArray[i])
                    break checkBans;
                }
            }
        if (banCount == 0){
          counter++
        } else {
          banCount--
}
        if (counter % 4 == 0){
          dArray.splice(i, 0, "<br>")
       } else 
            if (counter % 2 == 0){
                dArray.splice(i, 0, " ")
}
}
       dArray = dArray.join('')
       document.getElementById('results').innerHTML = "<b>Select and copy the following into excel for formatted rows: </b><br><br>" + dArray
    }

