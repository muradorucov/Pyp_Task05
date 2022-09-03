let addButton = document.querySelector("#add-button")
let clearButton = document.querySelector("#clear-button");
let toasts = document.querySelector("#toasts")



addButton.addEventListener('click', (event) => {
    let cancelable = document.querySelector("#cancelable")
    let successBtn = document.querySelector("#success")
    let errorBtn = document.querySelector("#error")



    if (successBtn.checked) {
        let duration = document.querySelector("#duration").value;


        const success = document.createElement("div");
        const successDesc = document.createElement("p");
        const successBtn = document.createElement("button");

        success.classList.add('success-toast', 'toast');
        successDesc.classList.add('message');
        successBtn.classList.add('cancel-button');

        toasts.appendChild(success);
        success.appendChild(successDesc);
        if(cancelable.checked){
            success.appendChild(successBtn);
        }

        successBtn.innerHTML = 'X';

        var text = document.getElementById("message-content").value;
        if (text == '') {
            successDesc.innerHTML = 'Succes';
        } else {
            successDesc.innerHTML = text
        }
        var _tick = setInterval(function () {
            success.remove()
        }, duration = duration < 500 ? 500 : duration)

        successBtn.addEventListener('click', (event => {
            success.remove()
        }))

    }
    if (errorBtn.checked) {
        let duration = document.querySelector("#duration").value;
        const error = document.createElement("div");
        const errorDesc = document.createElement("p");
        const errorBtn = document.createElement("button");

        error.classList.add('error-toast', 'toast');
        errorDesc.classList.add('message');
        errorBtn.classList.add('cancel-button');

        toasts.appendChild(error);
        error.appendChild(errorDesc);
        if(cancelable.checked){
            error.appendChild(errorBtn);
        }
        

        errorBtn.innerHTML = 'X'

        var text = document.getElementById("message-content").value;
        if (text == '') {
            errorDesc.innerHTML = 'Error';
        } else {
            errorDesc.innerHTML = text
        }
        var _tick = setInterval(function () {
            error.remove()
        }, duration = duration < 500 ? 500 : duration)

        errorBtn.addEventListener('click', (event => {
            error.remove()
        }))
    }
})
clearButton.addEventListener('click', (event) => {
    let divs = document.querySelectorAll('#toasts div')
    divs.forEach(div => {
        div.remove()
    })
})
