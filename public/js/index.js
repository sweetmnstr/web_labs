new WOW().init();

const regBtn = document.querySelector('#reg__form-btn')
const phone = document.querySelector('#phone')
const name = document.querySelector('#name')
const email = document.querySelector('#email')


regBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let dataSend = {
        name: name.value,
        phone: phone.value,
        email:email.value
    }
    axios.post('/register', dataSend)
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
})


