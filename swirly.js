console.log("swirly baby")
var inputElements = document.getElementsByClassName("js-text-full")

if (window.getSelection().toString().length > 0) {
    const elementId = document.activeElement.id
    let content = window.getSelection().toString()
    content = removeFileExtension(content)
    content = content.split("-")
    content = content.map(x => {
        let first_letter = x.charAt(0).toUpperCase()
        return first_letter + x.slice(1)
    })
    
    document.getElementById(elementId).value = content.join(" ")
  
} else{
    Array.from(inputElements).forEach(function (element) {

        // do the transform on the string
        let val = element.value
        val = removeFileExtension(val)
        // split into separate words
        val = val.split("-")
        // capitalize first letter
        val = val.map(x => {
            let first_letter = x.charAt(0).toUpperCase()
            return first_letter + x.slice(1)
        })
        element.value = val.join(" ")
    });
}

function removeFileExtension(fileName) {
    return fileName.split(".")[0]
}