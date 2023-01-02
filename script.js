const medo = 'meod gamal'

const h1 = document.querySelector('.heading-primary')
console.log(new Date().getFullYear())
h1.addEventListener('click', (e) => {
    h1.textContent = medo
})

////////////// get the a certainly year
const year = document.querySelector('.year')
year.textContent = new Date().getFullYear()

///////////////////////////////////////////////////////////
///////make mobile nav works
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const bodyEl = document.querySelector('body')

btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open')
})

////////////////////////////////////////////////////////////
// smooth scrolling  animation

const allLinks = document.querySelectorAll('a:link')
allLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const href = link.getAttribute('href')
            console.log(href)

            //scroll back to the top
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
            if (href !== '#' && href.startsWith('#')) {
                const sectionEl = document.querySelector(href)
                console.log(sectionEl)
                sectionEl.scrollIntoView({
                    behavior: 'smooth',
                })
                headerEl.classList.remove('nav-open')
            }
        })
    })
    ////////////////////////////////////////////////////////////
    //sticky navigation

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0]

        if (ent.isIntersecting === false) {
            console.log(ent)
            bodyEl.classList.add('sticky')
        } else {
            bodyEl.classList.remove('sticky')
        }
    }, {
        // in  the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    },
)
obs.observe(sectionHeroEl)

////////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
    var flex = document.createElement('div')
    flex.style.display = 'flex'
    flex.style.flexDirection = 'column'
    flex.style.rowGap = '1px'

    flex.appendChild(document.createElement('div'))
    flex.appendChild(document.createElement('div'))

    document.body.appendChild(flex)
    var isSupported = flex.scrollHeight === 1
    flex.parentNode.removeChild(flex)
    console.log(isSupported)

    if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()