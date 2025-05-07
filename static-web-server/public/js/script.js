document.addEventListener('DOMContentLoaded', function() {
    loadCricketScores();
    
    // Add event listener for refresh button
    document.getElementById('refresh-scores').addEventListener('click', loadCricketScores);
});

function loadCricketScores() {
    const playersTableBody = document.getElementById('players-data');
    playersTableBody.innerHTML = '<tr><td colspan="6" class="loading">Loading scores...</td></tr>';
    
    fetch('/api/cricket/scores')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayScores(data);
        })
        .catch(error => {
            console.error('Error fetching cricket scores:', error);
            playersTableBody.innerHTML = '<tr><td colspan="6" class="error">Failed to load cricket scores. Please try again.</td></tr>';
        });
}

function displayScores(players) {
    const playersTableBody = document.getElementById('players-data');
    playersTableBody.innerHTML = '';
    
    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.ballsFaced}</td>
            <td>${player.runs}</td>
            <td>${player.sixes}</td>
            <td>${player.fours}</td>
            <td>${player.status}</td>
        `;
        playersTableBody.appendChild(row);
    });
}