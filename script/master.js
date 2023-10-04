const ham = document.getElementById('ham')
ham.addEventListener('click', () => {
    document.getElementById('menu').style.transform = 'translateX(0)'
    document.getElementById('head').style.transform = 'translateX(-50%)'
})
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('menu').style.transform = 'translateX(100%)'
    document.getElementById('head').style.transform = 'translateX(0)'
})




