const element = document.getElementById('input')

element.addEventListener('keydown', function (event) {
    const message = '<code>' + event.key + '</code>'
    const value = event.target.value
    console.log(value)


    if (event.key === 'Enter' && value.length > 0) {
        const messageElement = document.createElement('div')

        /*messageElement.classList.add('message')*/
        messageElement.innerText = value
        document.getElementById('result').appendChild(messageElement)
        /*document.querySelector('#result').appendChild(messageElement)*/
        event.target.value = ''
    }

    document.getElementById('event').innerHTML = message
})
