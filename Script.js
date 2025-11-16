
    const form = document.getElementById('signupform');
    const username = document.getElementById('userName').value;
    const email = document.getElementById('eMail').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmpass = document.getElementById('confirm-password').value;
    
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        if(validateInputs())
        {
            alert('Sign up Successful!');
        }
    });

    function validateInputs()
    {
        let isValid = true;
        const fullNameValue = username.value.trim();
        const emailValue = email.value.trim();
        const mobileValue = mobile.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmpass.value.trim();

        if(fullNameValue === '')
        {
            setError(username, 'Full Name is required');
            isValid = false;
        }else{
            setSuccess(username);
        }
        
        if(emailValue === '')
        {
            setError(email, 'Email is required');
            isValid = false;
        }else if (!isValidEmail(emailValue))
        {
            setError(email, 'Provide a valid email address');
            isValid = false;
        } else
        {
            setSuccess(email);
        }

        if(mobileValue === '')
        {
            setError(mobile, 'Moile Number is required');
            isValid = false;
        }else if (!/^\d{10}$/.test(mobileValue))
        {
            setError(mobile, 'Mobile number must be 10 digits');
            isValid = false;
        } else
        {
            setSuccess(mobile);
        }

        if(passwordValue === '')
        {
            setError(password, 'Password is required');
            isValid = false;
        }else if (passwordValue.length < 8)
            {
            setError(password, 'Password must be at leaset 8 characters');
            isValid = false;
        } else
        {
            setSuccess(password);
        }

        if(confirmPasswordValue === '')
        {
            setError(confirmpass, 'Please confirm your password');
            isValid = false;
        }else if (confirmPasswordValue !== passwordValue)
            {
            setError(confirmpass, 'Password do not match');
            isValid = false;
        } else
        {
            setSuccess(confirmpass);
        }
        return isValid;
    }

    function setError(element, message)
    {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error');

        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

     function setSuccess(element)
    {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error');

        errorDisplay.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    function isValidEmail(email)
    {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }