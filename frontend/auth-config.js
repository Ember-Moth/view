window.API_CONFIG = { baseUrl: 'https://api-view.cathiefish.org' };

const AUTH_CONFIG = {
    clientId: '136939086552-bt28icv34nucmjna8hfndr6bopr5qcp4.apps.googleusercontent.com',
    onSuccess: (user) => {
        console.log('Authentication successful:', user.email);
    },
    onError: (error) => {
        console.error('Authentication error:', error);
    }
};

window.AUTH_CONFIG = AUTH_CONFIG;
window.ALLOWED_EMAILS = ['xiannvweideta@gmail.com'];
