document.addEventListener('DOMContentLoaded', () => {
    const vrImageContainer = document.getElementById('vrImageContainer');
    const secretMessageBox = document.getElementById('secretMessageBox');

    function toggleMessage() {
        const isSecretMessageVisible = !secretMessageBox.classList.contains('hidden');

        if (isSecretMessageVisible) {
            vrImageContainer.style.display = 'block';
            secretMessageBox.classList.add('hidden');
            secretMessageBox.classList.remove('visible');
            
        } else {
            vrImageContainer.style.display = 'none';

            secretMessageBox.classList.remove('hidden');
            secretMessageBox.classList.add('visible');
        }
    }
    vrImageContainer.addEventListener('click', toggleMessage);
    secretMessageBox.addEventListener('click', toggleMessage);
});
