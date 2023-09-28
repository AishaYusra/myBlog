// const uri = 'https://hiit-blog-api.onrender.com'     // the server url
// const uri = 'http://127.0.0.1:5000'     // the server url

// async function getBlog(id) {
//     const response = await fetch(`${uri}/blogs/${id}`);
//     const data = await response.json();
//     return data
// }


let params = new URLSearchParams(window.location.search);
let blogId = params.get('blogId');

const blog = await getBlog(blogId)

let allComments = blog.allComments
allComments.sort(sortByDatePosted)

function sortByDatePosted(a, b) {
    return new Date(a.date_posted) - new Date(b.date_posted);
}


const main = document.querySelector('main')

const blog_container = document.createElement('div')
blog_container.setAttribute('class', 'blog-container')

const blog_title = document.createElement('h2')
blog_title.setAttribute('class', 'blog-title')
blog_title.innerText = blog.title
blog_container.appendChild(blog_title)

const blog_author = document.createElement('p')
blog_author.setAttribute('class', 'blog-authur')
blog_author.innerText = 'by: ' + blog.author
blog_container.appendChild(blog_author)

const blog_body = document.createElement('p')
blog_body.setAttribute('class', 'blog-body')
blog_body.innerText = blog.body
blog_container.appendChild(blog_body)


//COMMENT SECTION

// Establish a WebSocket connection
// const socket = new WebSocket("ws://localhost:5000");
// const socket = new WebSocket("wss://hiit-blog-api.onrender.com/ws");

// Connection opened
// socket.addEventListener('open', event => {
//     console.log('Connected to WS Server')
// })

// Listen for incoming messages from the server
// socket.addEventListener("message", event => {
//     const comment = JSON.parse(event.data);
//     addNewComment(comment);
// });

//Add a new comment to the DOM 
function addNewComment(comments) {
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `
    <div class= 'eachComment>
        <h3 class='name'>${comments.name}</h3>
        <p class='body'>$comment.comment}</p>
    </div>
    `;
    comments.appendChild(commentElement);

}

const comment_container = document.createElement('div')
comment_container.setAttribute('class', 'comment-container')

const comments = document.createElement('div')
comments.setAttribute('class', 'comments')

const displayComments = () => {
    allComments.forEach(comment => {
        const eachComments = document.createElement('div')
        eachComments.className = 'eachComments'

        const name = document.createElement('h3')
        name.className = 'name'
        name.innerText = comment.name
        eachComments.appendChild(name)

        const body = document.createElement('p')
        body.className = 'body'
        body.innerText = comment.comment
        eachComments.appendChild(body)

        comments.appendChild(eachComments)

    });
}

comment_container.appendChild(comments)
displayComments()

const commentError = document.createElement('div')
commentError.className = 'commentError'
comment_container.appendChild(commentError)

const addComment = docum.createElement('form')
addComment.className = 'addComment'

const input = document.createElement('input')
input.className = 'newComment'
input.setAttribute('placeholder', 'Add a comment...')
InputEvent.type = 'text'
addComment.appendChild(input)

const submit = document.createElement('button')
submit.className = 'sendComment'
submit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
`

// submit.addEventListener('click', async (e) => {
//     e.preventDefault()
//     commentError.innerHTM = ''

//     if (input.value) {
//         const token = window.localStorage.getItem('token')

//         if (!token) commentError.innerHTML = `<p>Cannot post a comment unless you login. Click <a href='login.html'>HERE<a/> to login</p>`

//         else {
//             async function postComment() {
//             }

//             await postComment()
//         }

//     }
// })

submit.addEventListener('click', (e) => {
    e.preventDefault()

})

addComment.appendChild(submit)

comment_container.appendChild(addComment)