// Handle file upload
document.querySelector('.upload-btn').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.xlsx, .xls';
  input.click();

  input.onchange = (e) => {
      const file = e.target.files[0];
      // Add Excel parsing logic here
  };
});

// Toggle invite checkbox
document.getElementById('inviteCheck').addEventListener('change', (e) => {
  const sendInvite = e.target.checked;
  // Handle invite setting
});

// Control buttons
document.querySelector('.start-btn').addEventListener('click', startProcess);
document.querySelector('.pause-btn').addEventListener('click', pauseProcess);
document.querySelector('.stop-btn').addEventListener('click', stopProcess);

function startProcess() {
  console.log('Process started');
  // Add start logic
}

function pauseProcess() {
  console.log('Process paused');
  // Add pause logic
}

function stopProcess() {
  console.log('Process stopped');
  // Add stop logic
}