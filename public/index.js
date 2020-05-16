async function begin() {
  const response = await fetch('/wizards', { method: 'GET' });
  const data = await response.json();

  const wizardsList = document.querySelector('#wizards');

  for (const wizard of data) {
    const listItem = document.createElement('li');
    listItem.innerText = wizard;
    wizardsList.appendChild(listItem);
  }
}

begin();
