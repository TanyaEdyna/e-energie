
const scrollLinks = document.querySelectorAll('a[href*="#"]');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const blockID = link.getAttribute('href').substring(1);
        link = document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})


