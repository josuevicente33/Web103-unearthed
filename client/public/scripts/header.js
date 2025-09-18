const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left';

const logo = document.createElement('img');
logo.src = '/logo.png';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';

headerLeft.appendChild(logo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('Home');
headerButton.textContent = 'Home';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);

