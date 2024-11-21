<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
</head>
<style>
        body {
            background-color: #9A7E6F;
        }
        .form-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-image: linear-gradient(to right bottom, #CBD2A4, #CBD2A4);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
        }
        .form-control {
            border-style: solid;
        }
        .required::after {
            content: " *";
            color: red;
        }
        .hint {
            font-size: 12px;
            color: gray;
        }
    </style>
<body>
    <div class="form-container">
        <form action="http://10.10.139.82:8000/api/patrons" method="POST" novalidate>
            <h2>Student Registration Form</h2>

            <div class="mb-3">
                <label for="firstName" class="form-label required">First Name</label>
                <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Enter your first name" required>
            </div>

            <div class="mb-3">
                <label for="lastName" class="form-label required">Last Name</label>
                <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Enter your last name" required>
            </div>

            <div class="mb-3">
                <label for="birthday" class="form-label required">Birthday</label>
                <input type="date" class="form-control" id="birthday" name="birthday" required>
            </div>

            <div class="mb-3">
                <label for="sex" class="form-label required">Sex</label>
                <select id="sex" name="sex" class="form-select" required>
                    <option value="" disabled selected>Select your sex</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label required">Address</label>

                <input type="text" class="form-control" id="province" name="province" placeholder="Province" required>
                <input type="text" class="form-control" id="city" name="city" placeholder="City" required>
                <input type="text" class="form-control" id="zip" name="zip" placeholder="Zip" required>
            </div>

            <div class="mb-3">
                <label for="country" class="form-label required">Country</label>
                <select id="country" name="country" class="form-select" required>
                    <option value="" disabled selected>Select your country</option>
                    <option value="United States">United States</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
             </div>
            
    
            <div class="mb-3">
                <label for="mainPhone" class="form-label required">Main Phone</label>
                <input type="tel" class="form-control" id="phone_number" name="phone_number" placeholder="e.g., +639123456789" pattern="\+?[0-9]{10,}" required>
                <div class="hint">Enter a valid phone number</div>
            </div>
    
            <div class="mb-3">
                <label for="secondaryPhone" class="form-label required">Secondary Phone</label>
                <input type="text" class="form-control" id="secondaryPhone" name="secondaryPhone" placeholder="N/A if not available" required>
            </div>

            <div class="mb-3">
                <label for="otherPhone" class="form-label required">Other Phone</label>
                <input type="text" class="form-control" id="otherPhone" name="otherPhone" placeholder="N/A if not available" required>
            </div>
    
            <div class="mb-3">
                <label for="primaryEmail" class="form-label required">Primary Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required>
            </div>

            <div class="mb-3">
                <label for="secondaryEmail" class="form-label required">Secondary Email</label>
                <input type="text" class="form-control" id="secondaryEmail" name="secondaryEmail" placeholder="N/A if not available">
            </div>

            <div class="mb-3">
                <label for="primary1" class="form-label required">Primary Contact Info</label>
                <input type="text" class="form-control" id="primary1" name="primary1" placeholder="Contact number or Email" required>
            </div>

            <div class="mb-3">
                <label for="studentNumber" class="form-label required">Student Number</label>
                <input type="text" class="form-control" id="card_number" name="card_number" placeholder="ex: 2021234567" required>
                <div class="hint">Enter a valid 9-digit student number</div>
            </div>

            <div class="mb-3">
                <label for="college" class="form-label required">College</label>
                <select id="college" name="college" class="form-select" required>
                    <option value="" disabled selected>Select your college</option>
                    <option value="CEIT">CEIT</option>
                    <option value="CAFENR">CAFENR</option>
                    <option value="CAS">CAS</option>
                    <option value="CCJ">CCJ</option>
                    <option value="CED">CED</option>
                    <option value="CON">CON</option>
                    <option value="CEMDs">CEMDs</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="course" class="form-label required">Course</label>
                <input type="text" class="form-control" id="course" name="course" placeholder="ex: BSIT" required>
            </div>

            <div class="mb-3">
                <label for="registrationDate" class="form-label">Registration Date</label>
                <input type="date" class="form-control" id="registration_date" name="registration_date">
            </div>

            <div class="mb-3">
                <label for="expirationDate" class="form-label">Expiration Date</label>
                <input type="date" class="form-control" id="expiry_date" name="expiry_date">
            </div>

            <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary">Reset</button>
            </div>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const today = new Date();
            const formattedToday = today.toISOString().split('T')[0];
            const nextYear = new Date(today.setFullYear(today.getFullYear() + 1)).toISOString().split('T')[0];
            
            document.getElementById('registration_date').value = formattedToday;
            document.getElementById('expiry_date').value = nextYear;

            const birthdayField = document.getElementById('birthday');
            const year2007 = '2015-12-31';
            birthdayField.setAttribute('max', year2007);
        });


        const form = document.querySelector('form'); 
        form.addEventListener('submit', function(event) { 
        event.preventDefault(); 
});

        // Remove the existing script tag content and replace with this code
document.addEventListener('DOMContentLoaded', function () {
    // Set up dates
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const nextYear = new Date(today.setFullYear(today.getFullYear() + 1)).toISOString().split('T')[0];
    
    document.getElementById('registration_date').value = formattedToday;
    document.getElementById('expiry_date').value = nextYear;

    const birthdayField = document.getElementById('birthday');
    const year2007 = '2015-12-31';
    birthdayField.setAttribute('max', year2007);

    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    // Clear error messages on input
    const formInputs = form.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
});

// Function to display errors next to fields
function displayErrors(errors) {
    // Remove any existing error messages
    clearAllErrors();

    // Display new error messages
    Object.keys(errors).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        console.log(field)
        if (field) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-danger error-message';
            errorDiv.textContent = errors[fieldName];
            field.parentNode.appendChild(errorDiv);
            field.classList.add('is-invalid');
        }
    });
}

// Function to clear error message for a specific field
function clearError(field) {
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
        field.classList.remove('is-invalid');
    }
}

// Function to clear all error messages
function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const invalidFields = document.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => field.classList.remove('is-invalid'));
}

// Form submission function
async function submitForm(event) {
    event.preventDefault();
    
    // Clear any existing error messages
    clearAllErrors();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint provided by your instructor
        const response = await fetch('http://10.10.139.82:8000/api/patrons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            // If the API returns validation errors
            if (result.errors) {
                displayErrors(result.errors);
            } else {
                // Generic error message
                alert('An error occurred while submitting the form. Please try again.');
            }
        } else {
            // Success message
            alert('Form submitted successfully!');
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again.');
    }
}


    </script>
    
</body>
</html>
