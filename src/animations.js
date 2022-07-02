import animate from 'animateplus';

function animationHome() {
    animate({
        elements: '.wave1',
        duration: 5000,
        easing: "out-elastic 1 2",
        transform: ["translateX(-400px)", "translateX(0px)",]
    })
    animate({
        elements: '.wave2',
        duration: 5000,
        easing: "out-elastic 1 2",
        transform: ["translateX(400px)", "translateX(0px)",]
    })
    animate({
        elements: '.wave3',
        duration: 5000,
        easing: "out-elastic 1 2",
        transform: ["translateX(-400px)", "translateX(0px)",]
    })
    animate({
        elements: '.wave4',
        duration: 5000,
        easing: "out-elastic 1 2",
        transform: ["translateX(400px)", "translateX(0px)",]
    })
    animate({
        elements: '.descriptionTitle',
        duration: 1000,
        delay: 400,
        easing: "out-elastic 1 2",
        opacity:['0', '1'],
        transform: ["scale(1.5)", "scale(1)"]
    })
    animate({
        elements: 'hr',
        duration: 3000,
        delay: 500,
        easing: "out-elastic 1 2",
        transform: ["scaleX(0)", "scaleX(1)"]
    })
    animate({
        elements: '.descriptionContent',
        duration: 1000,
        delay: 300,
        delay: 600,
        easing: "out-elastic 1 2",
        opacity:['0', '1'],
        transform: ["scale(1.5)", "scale(1)"]
    })
    animate({
        elements: '.hamburgerImg',
        duration: 1000,
        delay: 200,
        easing: "out-elastic 1 2",
        opacity:['0', '1'],
        transform: ["scale(1.5)", "scale(1)"]
    })
    animate({
        elements: '.swiper-button-prev',
        duration: 4000,
        delay: 900,
        easing: "out-elastic 1 2",
        opacity:['0', '1'],
        transform: ["translateX(90px)", "translateX(0px)"]
    })
    animate({
        elements: '.swiper-button-next',
        duration: 4000,
        delay: 900,
        easing: "out-elastic 1 2",
        opacity:['0', '1'],
        transform: ["translateX(-90px)", "translateX(0px)"]
    })
}

function animationAbout() {
    animate({
        elements: '.info1',
        duration: 2000,
        easing: "out-elastic 1 2",
        opacity: ["0", "1"],
        transform: ["scale(1.5)", "scale(1)"]
    })
    animate({
        elements: '.info2',
        duration: 2000,
        easing: "out-elastic 1 2",
        opacity: ["0", "1"],
        transform: ["scale(1.5)", "scale(1)"]
    })
}

function animationContact() {
    animate({
        elements: '.form',
        easing: "out-elastic 1 2",
        duration: 1000,
        delay: 200,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.nameInput',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 300,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.lastNameInput',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 400,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.phoneInput',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 500,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.emailInput',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 600,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.subjectInput',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 700,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
    animate({
        elements: '.submit',
        duration: 2000,
        easing: "out-elastic 1 2",
        delay: 800,
        transform: ["scale(1.5)", "scale(1)"],
        opacity:['0', '1']
    })
}

export { animationHome, animationAbout, animationContact }