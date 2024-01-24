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
        if (fileName.includes(".")) {
            fileName = removeFileExtension(fileName)
        }
        if (fileName.includes("-")) {
            fileName = removeCharacter(fileName, "-")
        }

        if (fileName.includes("_")) {
            fileName = removeCharacter(fileName, "_")
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
    console.log(fileName, " ::: ", character)
    fileName = fileName.split(character)
    console.log(fileName)
    fileName = fileName.map(x => {
        let first_letter = x.charAt(0).toUpperCase()
        return first_letter + x.slice(1)
    })

    return fileName.join(" ")
}