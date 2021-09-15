window.addEventListener('DOMContentLoaded', () => {
    const  btnAboute = document.querySelectorAll('.btn_aboute'),
           btnProject = document.querySelectorAll('.btn_project'),           
           btnContact = document.querySelectorAll('.btn_contact'),
           btnMain = document.querySelector('.btn_main'),         
           form = document.querySelector('.features'),
           formP = document.querySelector('.our-work'),
           formM = document.getElementById('main'),
           formC = document.getElementById('contact');

btnAboute.forEach(btn => {           
    btn.addEventListener('click', (e) => { 
    e.preventDefault();   
    form.scrollIntoView({
    behavior: 'smooth'
        });        
    });
});
btnProject.forEach(btn => {          
    btn.addEventListener('click', (e) => { 
    e.preventDefault();
    formP.scrollIntoView({
    behavior: 'smooth'
        });        
    });
});

btnContact.forEach(btn => {       
    btn.addEventListener('click', (e) => { 
    e.preventDefault();
    formC.scrollIntoView({
     behavior: 'smooth'
        });        
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