console.log('JavaScript is running!');

const iconSet = document.querySelector('.icon-container');

function logID() {
      console.log('clicked on this SVG Icon', this.id);
}

iconSet.addEventListener('click', logID);