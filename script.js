document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('unlockForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-]*$/;

        if (!regex.test(login) || !regex.test(password)) {
            alert("Login or password has invalid characters");
            return; 
        }

        alert("Make sure you are logged out of your Mi account in the browser");
        alert("Copy link after authentication")
        
        openPopup().then(() => {
            nextFunction();
        }).catch(error => {
            console.error(error);
        });
    });
});

function openPopup() {
    return new Promise((resolve, reject) => {
        const popup = window.open(
            'https://account.xiaomi.com/pass/serviceLogin?sid=unlockApi&checkSafeAddress=true&passive=false&hidden=false',
            'popupWindow',
            'width=600,height=400'
        );

        if (!popup) {
            alert("Please, allow popup windows");
            setTimeout(() => {
                openPopup().then(resolve).catch(reject);
            }, 1000);
            return;
        }

       const checkPopupClosed = setInterval(() => {
            if (popup.closed) {
                clearInterval(checkPopupClosed);
                resolve();
            }
        }, 500);
    });
}

function nextFunction() {
    let xiaomi_url = prompt('Enter link');
}