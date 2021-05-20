const infoBase = [
    info1 = 'https://jsonplaceholder.typicode.com/posts',
    info2 = 'https://jsonplaceholder.typicode.com/comments',
    info3 = 'https://jsonplaceholder.typicode.com/albums',
    info4 = 'https://jsonplaceholder.typicode.com/photos',
    info5 = 'https://jsonplaceholder.typicode.com/todos',
    info6 = 'https://jsonplaceholder.typicode.com/users',
]
localStorage.setItem('info' , JSON.stringify(infoBase))
const xhr = new XMLHttpRequest()

const getPosts = () => {
    let getInfo = JSON.parse(localStorage.getItem('info'))
    let counter = JSON.parse(localStorage.getItem('counter'))
    xhr.open('GET' , getInfo[counter])

    xhr.addEventListener('load' , () => {
        const response = JSON.parse(xhr.response)
        const container = document.querySelector('.content')

        if(counter == '0'){
            container.innerHTML =  response.reduce((prev , {title , body}) => {
                return prev += `
                <div class="item item_altZero">
                    <div class="item_title">
                        <p>${title}</p>
                    </div>
                    <div class="item_body">
                        <p>${body}</p>
                    </div>
                </div>`
            }, '')
        }else if(counter == '1'){
            container.innerHTML =  response.reduce((prev , {name , email , body}) => {
                return prev += `
                <div class="item_alt item">
                    <div class="item_title item_title_alt">
                        <p>${name}</p>
                    </div>
                    <div class='item_email'>
                        <p>${email}</p>
                    </div>
                    <div class="item_body">
                        <p>${body}</p>
                    </div>
                </div>`
            }, '')
        }else if(counter == '2'){
            container.innerHTML =  response.reduce((prev , {title}) => {
                return prev += `
                <a href='#' class="item item_alt2">
                    <div class="item_title item_title_alt2">
                        <p>${title}</p>
                    </div>
                </a>`
            }, '')
        }else if(counter == '3'){
            container.innerHTML =  response.reduce((prev , {title , url , thumbnailUrl}) => {
                return prev += `
                <a href='#' class="item item_alt3">
                    <div class="item_picture">
                        <img src='${thumbnailUrl}'>
                    </div>
                    <div class="item_title">
                        <p>${title}</p>
                    </div>
                    <div class='item_content'>
                        <img src='${url}'>
                    </div>
                </a>`
            }, '')
        }else if(counter == '4'){
            container.innerHTML =  response.reduce((prev , {title , completed}) => {
                if(completed){
                    return prev += `
                    <a href='#' class="item item_alt4 item_alt2">
                        <div class="item_title">
                            <p>${title}</p>
                        </div>
                    </a>`
                }else  return prev += `
                    <a href='#' class="item item_alt5 item_alt2">
                        <div class="item_title">
                            <p>${title}</p>
                        </div>
                    </a>`
            }, '')
        }else if(counter == '5'){
            container.innerHTML =  response.reduce((prev , {name , username , email , phone , website , address: { street , suite , city , zipcode , geo: { lat , lng } } }) => {
                return prev += `
                <a href='#' class="item item_alt6">
                    <div class="item_title item_title_alt">
                        <p>${name}</p>
                    </div>
                    <div class="item_email">
                        <p>${username}</p>
                    </div>
                    <div class='item_email'>
                        <p>${email}</p>
                    </div>
                    <div class='item_email'>
                        <p>${phone}</p>
                    </div>
                    <div class='item_email'>
                        <p>${website}</p>
                    </div>
                    <div class='item_emailBtn'>
                        <i class="fas fa-chevron-up"></i>
                        <div class='item_wrapper'>
                            <p>${street}</p>
                            <p>${suite}</p>
                            <p>${street}</p>
                            <p>${suite}</p>
                            <p>${city}</p>
                            <p>${zipcode}</p>
                            <p>${lat}</p>
                            <p>${lng}</p>
                        </div>
                    </div>
                </a>`
            }, '')
        }
    })
    xhr.addEventListener('error' , () => {
        alert("Something went wrong")
    })
    xhr.send()
}
getPosts();

window.addEventListener('load' , () => {
    if(!localStorage.getItem('counter')){
        localStorage.setItem('counter' , JSON.stringify('0'))
    }else{
        return
    }
})

const showBtn1 = document.querySelector('.showBtn1')
showBtn1.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 0
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})

const showBtn2 = document.querySelector('.showBtn2')
showBtn2.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 1
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})

const showBtn3 = document.querySelector('.showBtn3')
showBtn3.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 2
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})

const showBtn4 = document.querySelector('.showBtn4')
showBtn4.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 3
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})

const showBtn5 = document.querySelector('.showBtn5')
showBtn5.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 4
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})

const showBtn6 = document.querySelector('.showBtn6')
showBtn6.addEventListener('click' , () => {
    let counter = JSON.parse(localStorage.getItem('counter'))
    counter = 5
    localStorage.setItem('counter' , JSON.stringify(counter))
    window.location.reload()
})


