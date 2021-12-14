describe('Login', () => {
  it('Login through Google', () => {
    const cookieName = 'abc'
    const socialLoginOptions = {
      username: 'xljualo@gmail.com',
      password: 'jualo321213223',
      loginUrl: 'https://www.jualo.com/?mobile=1',
      headless: false,
      logs: false,
      isPopup: true,
      popupDelay: 5000,
      preLoginSelector: '#signinModalBtn',
      loginSelector: '[href="/users/auth/google"]',
      postLoginSelector: '#otpModal'
    }

    return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
      cy.clearCookies()

      const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure
        })

        Cypress.Cookies.defaults({
          preserve: cookieName
        })
      }
    })
  })
})