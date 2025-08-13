// Simple counter functionality
let count = 0;

document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.getElementById('increment');
    const countDisplay = document.getElementById('count');
    
    incrementButton.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
});

// Function for testing
function getCount() {
    return count;
}

function resetCount() {
    count = 0;
    const countDisplay = document.getElementById('count');
    if (countDisplay) {
        countDisplay.textContent = count;
    }
}

// Export for testing (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCount, resetCount };
}