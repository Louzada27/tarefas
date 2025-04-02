// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    notification.style.zIndex = '9999';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    return isValid;
}

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card, .table, .form');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// Handle form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            showNotification('Please fill in all required fields', 'danger');
        }
    });
});

// Handle task status changes
document.querySelectorAll('.task-status').forEach(select => {
    select.addEventListener('change', function() {
        const taskId = this.dataset.taskId;
        const newStatus = this.value;

        fetch(`/tasks/api/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            })
            .then(response => response.json())
            .then(data => {
                showNotification('Task status updated successfully');
            })
            .catch(error => {
                showNotification('Error updating task status', 'danger');
            });
    });
});

// Handle task deletion confirmation
document.querySelectorAll('.delete-task').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!confirm('Are you sure you want to delete this task?')) {
            e.preventDefault();
        }
    });
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});