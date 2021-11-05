function displayChange() {
    const input = document.getElementById('input')
    const display = document.getElementById('display')
    console.log("function")

    input?.addEventListener('input', function (event) {
        const value=event.target.value

        console.log(event.currentTarget)
        display.innerText=value

    })
}
displayChange()








