// 1. Basic Fetch with Authentication
async function fetchWithAuth() {
    const token = 'your_token_here';
    try {
        const response = await fetch('http://api.example.com/data', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// 2. Multiple Async API Calls
async function fetchMultipleEndpoints() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch('http://api.example.com/users'),
            fetch('http://api.example.com/posts')
        ]);
        
        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        
        return { users, posts };
    } catch (error) {
        console.error('Error:', error);
    }
}

// 3. DOM Manipulation with API Data
async function displayUserData() {
    const userList = document.getElementById('userList');
    const loadingSpinner = document.getElementById('loading');
    
    try {
        loadingSpinner.style.display = 'block';
        const response = await fetch('http://api.example.com/users');
        const users = await response.json();
        
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user-card');
            userElement.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `;
            userList.appendChild(userElement);
        });
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.textContent = 'Failed to load users';
        userList.appendChild(errorMessage);
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// 4. Form Submission with Validation
const form = document.querySelector('#registrationForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validation
    const errors = {};
    if (!data.email.includes('@')) {
        errors.email = 'Invalid email format';
    }
    if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    
    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
        return;
    }
    
    try {
        const response = await fetch('http://api.example.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        showSuccess('Registration successful!');
        form.reset();
    } catch (error) {
        showError(error.message);
    }
});

// 5. Error Handling and Loading States
class APIHandler {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.loading = false;
        this.error = null;
    }
    
    async fetchData(endpoint) {
        this.loading = true;
        this.error = null;
        
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            this.error = error.message;
            throw error;
        } finally {
            this.loading = false;
        }
    }
    
    getLoadingState() {
        return this.loading;
    }
    
    getError() {
        return this.error;
    }
}

// 6. Websocket Connection with Authentication
class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.token = null;
    }
    
    async connect(token) {
        this.token = token;
        
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.url);
            
            this.ws.onopen = () => {
                this.authenticate();
                resolve();
            };
            
            this.ws.onerror = (error) => {
                reject(error);
            };
            
            this.ws.onmessage = this.handleMessage.bind(this);
        });
    }
    
    authenticate() {
        this.ws.send(JSON.stringify({
            type: 'auth',
            token: this.token
        }));
    }
    
    handleMessage(event) {
        const data = JSON.parse(event.data);
        // Handle different message types
        switch(data.type) {
            case 'auth_success':
                console.log('Authentication successful');
                break;
            case 'auth_error':
                console.error('Authentication failed');
                this.ws.close();
                break;
            default:
                console.log('Received:', data);
        }
    }
    
    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// 7. Retry Mechanism for Failed Requests
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            const delay = Math.min(1000 * Math.pow(2, i), 5000);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}
