const fs = require('fs');

exports.bootstrap = _ => {
    global['action'] = [];

    readAndLoadActions = (container, directory) => {
        fs.readdirSync(directory).forEach(file => {
            if (file === 'index.js') {
                return;
            } 
    
            const stats = fs.lstatSync(`${directory}/${file}`);
    
            if (stats.isDirectory()) {
                container[file] = [];

                return readAndLoadActions(container[file], `${directory}/${file}`)
            }

            return container[file.split('.')[0]] = require(`${directory}/${file}`);
        });
    }
    
    readAndLoadActions(global['action'], __dirname);
}