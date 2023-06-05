const goToServices = document.querySelector('#go-to-services');
const goToLegislation = document.querySelector('#go-to-legislation');
const goToContacts = document.querySelector('#go-to-contacts');
const services = document.querySelector('.services');
const legislation = document.querySelector('.legislation');
const contacts = document.querySelector('.footer_title')

goToServices.addEventListener('click', function (e) {
    e.preventDefault();
    services.scrollIntoView({ behavior: 'smooth' });

});

goToLegislation.addEventListener('click', function (e) {
    e.preventDefault();
    legislation.scrollIntoView({ behavior: 'smooth' });
});

goToContacts.addEventListener('click', function (e) {
    e.preventDefault();
    contacts.scrollIntoView({ behavior: 'smooth' });
});