  function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.style.display = 'none';
    });
    // Show selected screen
    document.getElementById(screenId).style.display = (screenId === 'welcome-screen' || screenId === 'how-it-works' || screenId === 'main-page') ? (screenId === 'welcome-screen' ? 'flex' : 'grid') : 'flex';
  }
  