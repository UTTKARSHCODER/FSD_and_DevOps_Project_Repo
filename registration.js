// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form with class 'needs-validation'
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', (event) => {
        // Check if all input constraints (e.g. required) pass
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Add Bootstrap's .was-validated class to reveal invalid-feedback messages
        form.classList.add('was-validated');
    }, false);
});