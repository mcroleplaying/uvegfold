const marked = require('marked');
const fs = require('fs');

function readMarkdown(filepath) {
    return new Promise(resolve => {
        let contents = fs.readFileSync(filepath, 'utf-8').toString();
        resolve(contents);
    })
}

readMarkdown('documents/HeroicChronicle_Kherret.md').then(contents => {
    let htmlContent = `<html><head><title>Kherret Heroic Chronicle</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></head><body><div class="container">${marked(contents)}</div></body><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></html>`;
    fs.writeFileSync('html/HeroicChronicle_Kherret.html', htmlContent);
})