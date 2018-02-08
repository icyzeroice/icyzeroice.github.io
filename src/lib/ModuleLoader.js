console.log('%cHentai! What are you looking for?', 'color: rgb(0, 255, 0)');

// ???
function addScript(filePath) {
  let node = document.createElement('script');
  node.src = filePath;
  document.body.appendChild(node);
}

addScript('./src/lib/ConsoleInStyle.js');

// AMD