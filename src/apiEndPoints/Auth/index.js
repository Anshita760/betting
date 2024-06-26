const Auth = {
    accountLogin: {
        url: '/login',
        method: 'POST',
    },
    accountVerify: {
        url: '/signup/verify',
        method: 'POST',
    },
    accountSignUp: {
        url: '/signup',
        method: 'POST',
    }, 
    updateProfile: {
        url: '/user/update_profile',
        method: 'POST',
    },
    accountLogout: {
        url: '/login/logout',
        method: 'POST',
    },
    changePassword: {
        url: '/user/change_password',
        method: 'POST',
    },
}

export default Auth;