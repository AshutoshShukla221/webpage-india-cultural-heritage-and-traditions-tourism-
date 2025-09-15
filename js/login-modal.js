// Login Modal Functionality
document.getElementById('login-btn').onclick = () => {
    document.getElementById('login-modal').classList.add('active');
}

document.getElementById('login-close').onclick = () => {
    document.getElementById('login-modal').classList.remove('active');
}

window.onclick = (event) => {
    if (event.target == document.getElementById('login-modal')) {
        document.getElementById('login-modal').classList.remove('active');
    }
}

// Tab switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.onclick = () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    }
});

// Form submissions (prevent default for now)
document.getElementById('tourist-form').onsubmit = (e) => {
    e.preventDefault();
    alert('Tourist registration submitted!');
    document.getElementById('login-modal').classList.remove('active');
}

document.getElementById('business-form').onsubmit = (e) => {
    e.preventDefault();
    alert('Business registration submitted!');
    document.getElementById('login-modal').classList.remove('active');
}
