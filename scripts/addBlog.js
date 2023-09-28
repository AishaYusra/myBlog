const title = document.querySelector('input')
const body = document.querySelector('textarea')
const btn = document.querySelector('form button')

// btn.addEventListener('click', async (e) => {
//     e.preventDefault()

//     if (title.value && body.value) {
//         await postBlog(title.value, body.value)
//         title.value = ''
//         body.value = ''
//         window.location.replace = 'index.html'
//     }
// })

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (title.value && body.value) {

        (title.value, body.value)
        title.value = ''
        body.value = ' '
        window.location.href = 'index.html'

    }
})