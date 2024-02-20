var inputElements = document.getElementsByClassName("js-text-full")

if (window.getSelection().toString().length > 0) {
    const elementId = document.activeElement.id
    let fileName = window.getSelection().toString()
    if (fileName.includes(".")) {
        fileName = removeFileExtension(fileName)
    }

    if (fileName.includes("-")) {
        fileName = removeCharacter(fileName, "-")
    }

    if (fileName.includes("_")) {
        fileName = removeCharacter(fileName, "_")
    }
    
    document.getElementById(elementId).value = fileName
  
} else{
    Array.from(inputElements).forEach(function (element) {
        let fileName = element.value
        if (fileName.includes("-")) {
            fileName = removeCharacter(fileName, "-")
        }

        if (fileName.includes("_")) {
            fileName = removeCharacter(fileName, "_")
        }

        fileName = addDashToDates(fileName)

        if (fileName.includes(".")) {
            fileName = removeFileExtension(fileName)
        }

        element.value = fileName
    });
}

function removeFileExtension(fileName) {
    var fileNameWithoutExtension = fileName.split(".")
    fileNameWithoutExtension.pop()
    return fileNameWithoutExtension.join(" ")
}

function removeCharacter(fileName, character) {
    fileName = fileName.split(character)
    fileName = fileName.map(x => {
        let first_letter = x.charAt(0).toUpperCase()
        return first_letter + x.slice(1)
    })

    return fileName.join(" ")
}

function addDashToDates(fileName) {
    fileName = fileName.split(" ")
    console.log(fileName.length)
    for (let i = 0; i < fileName.length; i++) {
        if (!isNumber(fileName[i]) || i + 1 >= fileName.length)  {
            continue
        }
        // this is essentially check the REST of the array to see if there a more numbers coming
        // its confusing af and this might be super slow lets find out lmao
        for (let j = i + 1; j < fileName.length; j++) {
             // check if next item is a number or last_item
            if (!isNumber(fileName[j])) {
                console.log("this ones the trouble maker", fileName[j])
                break
            }
            console.log("hey i'm here!", fileName[j])
            fileName[i] = fileName[i] + "-" + fileName[j]
            fileName.splice(j, 1)
            console.log("j iterator be like ", j)
            j -= 1
        }
    }


    return fileName.join(" ")
}

function isNumber(_string) {
    
    if (isNaN(_string)) {
        return false
    }

    return true
}