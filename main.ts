const buttonToggle = document.getElementById('toggle') as HTMLButtonElement;
const get = document.getElementById('get') as HTMLElement;

buttonToggle.addEventListener('click', () => {
    // Check the current display style of the 'get' element
    if (get.style.display === 'none' || get.style.display === '') {
        get.style.display = 'block';
    } else {
        get.style.display = 'none';
    }
});

// !-- 
// echo "# resume" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sumbulNaz8/resume.git
// git push -u origin main -->