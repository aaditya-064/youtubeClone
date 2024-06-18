const menuButton = document.querySelector("#menuButton")
const sideNavs = document.querySelectorAll('.sideNav_')
const topNavItems = document.querySelector('.topNavItems') 
const wholeSideNav = document.querySelector('.wholeSideNav_')
const columnsFromSecond = document.querySelector(".columnsFromSecond_")

menuButton.addEventListener('click', ()=>{
    sideNavs.forEach(i => i.classList.toggle('hide_'))
    topNavItems.classList.toggle('hide')
    wholeSideNav.classList.toggle('removeSideNav_')
    columnsFromSecond.classList.toggle('scrollBar_')
})

