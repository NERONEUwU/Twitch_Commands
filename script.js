// Fetch JSON data asynchronously
fetch('commands.json')
  .then(response => response.json())
  .then(data => {
    const commandsList = document.getElementById('commands-list');
    const searchInput = document.getElementById('searchInput');

    // Function to filter commands based on search input
    const filterCommands = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredCommands = Object.entries(data).filter(([command, description]) => {
        return command.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm);
      });
      
      // Clear the previous list
      commandsList.innerHTML = '';

      // Display filtered commands
      filteredCommands.forEach(([command, description]) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span class="command">${command}</span><span class="description"> ${description}</span>
          <button class="copy-btn">Copy</button>
        `;
        commandsList.appendChild(listItem);
      });
    };

    // Call filterCommands function on input change
    searchInput.addEventListener('input', filterCommands);

    // Initial display of all commands
    filterCommands();

    // Add event listeners to the copy buttons
    commandsList.addEventListener('click', event => {
      const target = event.target;
      if (target.classList.contains('copy-btn')) {
        const commandText = target.previousElementSibling.previousElementSibling.textContent.trim(); // Extract command text only
        navigator.clipboard.writeText(commandText)
          .then(() => alert('Command copied to clipboard'))
          .catch(err => console.error('Error copying command:', err));
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));






  document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('light-theme');
        const sunIcon = document.querySelector('.fa-sun');
        const moonIcon = document.querySelector('.fa-moon');

        if (document.body.classList.contains('light-theme')) {
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
        } else {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        }
    });



});