// Load build information when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadBuildInfo();
});

function loadBuildInfo() {
    // Try to load build info from a file that Jenkins creates
    fetch('build-info.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('buildNumber').textContent = data.buildNumber || 'N/A';
            document.getElementById('deployTime').textContent = data.deployTime || 'N/A';
            if (data.version) {
                document.getElementById('version').textContent = data.version;
            }
        })
        .catch(error => {
            // If file doesn't exist, show defaults
            document.getElementById('buildNumber').textContent = 'Local Build';
            document.getElementById('deployTime').textContent = new Date().toLocaleString();
        });
}

function testConnection() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Testing connection...</p>';
    
    // Simulate a connection test
    setTimeout(() => {
        const success = true; // In real scenario, this would be an actual API call
        
        if (success) {
            resultDiv.className = 'success';
            resultDiv.innerHTML = '✅ Connection successful! Server is running properly.';
        } else {
            resultDiv.className = 'error';
            resultDiv.innerHTML = '❌ Connection failed. Please check the server.';
        }
    }, 1000);
}

// Add some animation on scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
        }
    });
});
