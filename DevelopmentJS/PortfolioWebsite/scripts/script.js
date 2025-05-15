const css = document.styleSheets[0]

let aboutState = true
let contactState = false
let portfoliostate = false

const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const portfolio = document.querySelector("#portfolio")

const showAbout = () => {
    if(aboutState != true){
        contact.style.opacity = 0
        portfolio.style.opacity = 0
        about.style.opacity = 0.5

        aboutState = true
        contactState = false
        portfoliostate = false
    }
}

const showContact = () => {
    if(contactState != true){
        contact.style.opacity = 0.5
        portfolio.style.opacity = 0
        about.style.opacity = 0

        aboutState = false
        contactState = true
        portfoliostate = false
    }  
}

const showPortfolio = () => {
    if(portfoliostate != true){
        contact.style.opacity = 0
        portfolio.style.opacity = 0.5
        about.style.opacity = 0

        aboutState = false
        contactState = false
        portfoliostate = true
    }
}
