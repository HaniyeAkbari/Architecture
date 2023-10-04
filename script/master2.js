const commercial = document.querySelectorAll('.commercial')
const resident = document.querySelectorAll('.residental')
const remodel = document.querySelectorAll('.remodel')
const pic = document.querySelectorAll('.pic')
const toggle = document.querySelectorAll('.toggle')



document.getElementById('all').addEventListener('click', (e) => {
    pic.forEach((i)=>{
        i.style.display='flex'
    })
    reset()
    toggle[0].style.opacity=1
})

document.getElementById('commercial').addEventListener('click',(e)=>{
    pic.forEach((i)=>{
       if (i.classList.contains('commercial')) {
            i.style.display = 'flex'
        } else {
            i.style.display = 'none'
        } 
    })
    reset()
    toggle[1].style.opacity=1
})

document.getElementById('resident').addEventListener('click',(e)=>{
    pic.forEach((i)=>{
       if (i.classList.contains('residental')) {
            i.style.display = 'flex'
        } else {
            i.style.display = 'none'
        } 
    })
    reset()
    toggle[3].style.opacity=1
})

document.getElementById('remodel').addEventListener('click',(e)=>{
    pic.forEach((i)=>{
       if (i.classList.contains('remodel')) {
            i.style.display = 'flex'
        } else {
            i.style.display = 'none'
        } 
    })
    reset()
    toggle[2].style.opacity=1
    
})


const reset = () => {
    toggle.forEach((item) => {
        item.style.opacity = 0
    })
}

