import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from '@propelauth/react';

function AuthenticationButtons(props) {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions()

    if (props.isLoggedIn) {
        return <button onClick={logoutFn}>Logout</button>
    } else {
        return <div>
            <button onClick={redirectToSignupPage}>Signup</button>
            <button onClick={redirectToLoginPage}>Login</button>
        </div>
    }
}

export default withAuthInfo(AuthenticationButtons, {
    displayWhileLoading: <div>Loading...</div>
})
