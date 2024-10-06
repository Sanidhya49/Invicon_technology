document.addEventListener('DOMContentLoaded', function() {
    // Read More functionality
    const readMoreLink = document.getElementById('read-more');
    const aboutCompany = document.querySelector('.footer-section p');
    
    readMoreLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (aboutCompany.style.maxHeight) {
            aboutCompany.style.maxHeight = null;
            readMoreLink.textContent = 'Read More';
        } else {
            aboutCompany.style.maxHeight = aboutCompany.scrollHeight + "px";
            readMoreLink.textContent = 'Read Less';
        }
    });

    // Visit counter functionality (this is just a mock-up, as real counting would require server-side implementation)
    const visitCount = document.getElementById('visit-count');
    let count = parseInt(visitCount.textContent);
    
    setInterval(() => {
        count++;
        visitCount.textContent = count;
    }, 60000); // Increase count every minute for demonstration purposes
});