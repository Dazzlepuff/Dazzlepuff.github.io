function loadLanguageBar(username, repo, elementId) {
    fetch(`https://api.github.com/repos/${username}/${repo}/languages`)
      .then(response => response.json())
      .then(data => {
        const totalBytes = Object.values(data).reduce((a, b) => a + b, 0);
        let languageBar = '';
        for (const [language, bytes] of Object.entries(data)) {
          const percentage = ((bytes / totalBytes) * 100).toFixed(2);
          languageBar += `
                    <div class="language ${language.toLowerCase()}" style="width: ${percentage}%;"
                        data-name="${language}">
                        <div class="tooltip">${language}</div>
                    </div>`;
        }
        document.getElementById(elementId).innerHTML = languageBar;
      })
      .catch(error => console.error('Error fetching language data:', error));
  }
  
  document.querySelectorAll('.project-item').forEach((item, index) => {
    const username = item.getAttribute('data-username');
    const repo = item.getAttribute('data-repo');
    const languageBarId = `language-bar-project${index + 1}`;
  
    loadLanguageBar(username, repo, languageBarId);
  });
  