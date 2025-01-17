// Open Modals
document.getElementById('contactBtn').onclick = function() {
    document.getElementById('contactModal').style.display = 'block';
};
document.getElementById('hireBtn').onclick = function() {
    document.getElementById('hireModal').style.display = 'block';
};

// Close Modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};