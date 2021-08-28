function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent [ 0 ].classList.add('ativo')


    if ( tabMenu.length > 0 && tabContent.length > 0 ) {

        function activeTab(index) {

            tabContent
            .forEach(section => section.classList.remove('ativo'))
        
            tabContent [ index ].classList.add('ativo')
        }
        
        tabMenu.forEach((link, index) => {
            link.addEventListener('click', () => activeTab(index))
        })
    }
}

function initAccordion() {

    let activeAccordion = () => {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    const accordionList = document.querySelectorAll('.js-accordion dt')
    accordionList[ 0 ].classList.add('ativo')
    accordionList[ 0 ].nextElementSibling.classList.add('ativo')

    accordionList.forEach( accordion => {
        accordion.addEventListener('click', activeAccordion)
    })
}

function initNavScroll() {

    const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()

        let htmlIDSection = event.currentTarget.getAttribute('href')
        let sectionReferenced = document.querySelector(htmlIDSection)

        let sectionReferencedPosition = sectionReferenced.offsetTop

        sectionReferenced.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start'
            }
        )

        // Forma alternativa
        // window.scrollTo(
        //     {
        //         top: sectionReferencedPosition,
        //         behavior: 'smooth'
        //     }
        // )
    }

    linksMenu.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}

function initAnimationScroll() {

    const contents = document.querySelectorAll('.js-fade')

    function fadeOnScroll() {

        let windowHeight = window.innerHeight
        let windowMiddleCalc = windowHeight * 0.5

        contents.forEach(section => {
            let distanceFromTheTop = section.getBoundingClientRect().top
            let showSection = distanceFromTheTop - windowMiddleCalc

            if (showSection < 0)
                section.classList.add('ativo')
        })
    }

    fadeOnScroll()

    window.addEventListener('scroll', fadeOnScroll)
}

initNavScroll()
initAccordion()
initTabNav()
initAnimationScroll()