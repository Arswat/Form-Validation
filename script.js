        const form  = document.getElementById("form");
        const username  = document.getElementById("username");
        const email  = document.getElementById("email");
        const password  = document.getElementById("password");
        const password2  = document.getElementById("password2");

        form.addEventListener('submit', e =>{
            e.preventDefault();
            checkInput();
        });

        function checkInput(){
            const usernamevalue = username.value.trim();
            const emailvalue = email.value.trim();
            const passwrodvalue = password.value.trim();
            const password2value = password2.value.trim();

            if(usernamevalue === '')
            {
                setError(username,'Username cannot be blank');
            }
            else
            {
                setSuccess(username);   
            }

            if(emailvalue === '')
            {
                setError(email, 'Email cannot be blank');
            }
            else if(!isemail(emailvalue))
            {
                setError(email, 'Not a valid email');
            }
            else{
                setSuccess(email);
            }

            if(passwordvalue === '')
            {
                setError(passwrod,'Password cannot be blank');
            }
            else
            {
                setSuccess(passwrod);   
            }

            if(passwrod2value === '')
            {
                setError(passwrod2,'Password cannot be blank');
            }
            else if(passwordvalue!==password2value)
            {
                setError(password2,'password does not match')
            }
            else
            {
                setSuccess(password2);   
            }

            function setError(input,meesage)
            {
                const formcontrol = input.parentElement;
                const small = formcontrol.querySelector('small');
                formcontrol.className = 'form-control error';
                small.innerText = message;
            }

            function setSuccess(input)
            {
                const formcontrol = input.parentElement;
                formcontrol.className = 'form-control success';
            }
            
            function isemail(email)
            {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")
                @((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|
                (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            }
        }