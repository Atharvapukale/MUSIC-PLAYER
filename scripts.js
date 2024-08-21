document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const currentTrackDisplay = document.getElementById('current-track');
    const searchBox = document.getElementById('search');

    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (!isPlaying) {
            // Simulate playing a track
            currentTrackDisplay.textContent = 'Playing: Sample Track';
            isPlaying = true;
        }
    });

    pauseButton.addEventListener('click', () => {
        if (isPlaying) {
            // Simulate pausing a track
            currentTrackDisplay.textContent = 'Paused: Sample Track';
            isPlaying = false;
        }
    });

    // Search functionality (for demonstration)
    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();
        // Simulate searching by updating the track display
        if (searchTerm) {
            currentTrackDisplay.textContent = `Searching for: ${searchTerm}`;
        } else {
            currentTrackDisplay.textContent = 'No track playing';
        }
    });
});
