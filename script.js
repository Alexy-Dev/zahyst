window.addEventListener('DOMContentLoaded', () => {
    const  btnAboute = document.querySelector('.btn_aboute'),
           btnProject = document.querySelector('.btn_project'),
           btnAbouteFoot = document.querySelector('.btn_aboute_foot'),
           btnProjectFoot = document.querySelector('.btn_project_foot'),
           btnContact = document.querySelector('.btn_contact'),
           btnMain = document.querySelector('.btn_main'),         
           form = document.querySelector('.features'),
           formP = document.querySelector('.our-work'),
           formM = document.getElementById('main'),
           formC = document.getElementById('contact');

btnAboute.addEventListener('click', (e) => { 
    e.preventDefault();   
    form.scrollIntoView({
    behavior: 'smooth'
});        
});

btnProject.addEventListener('click', (e) => { 
    e.preventDefault();
    formP.scrollIntoView({
    behavior: 'smooth'
});        
});
btnAbouteFoot.addEventListener('click', (e) => { 
    e.preventDefault();   
    form.scrollIntoView({
    behavior: 'smooth'
});        
});

btnProjectFoot.addEventListener('click', (e) => { 
    e.preventDefault();
    formP.scrollIntoView({
    behavior: 'smooth'
});        
});
btnContact.addEventListener('click', (e) => { 
    e.preventDefault();
    formC.scrollIntoView({
     behavior: 'smooth'
});        
});
btnMain.addEventListener('click', (e) => { 
    e.preventDefault();
    formM.scrollIntoView({
    behavior: 'smooth'
});        
});
}
);