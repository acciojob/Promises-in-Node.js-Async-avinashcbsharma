const fs = require('fs').promises;
const path = require('path');

async function readAndModifyFile(filePath) {
    try {
        // Read the file asynchronously
        const fileContents = await fs.readFile(filePath, 'utf-8');

        // Convert to uppercase and reverse
        const modifiedText = fileContents.toUpperCase().split('').reverse().join('');

        // Print the modified text
        console.log('Modified text:');
        console.log(modifiedText);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found at path '${filePath}'`);
        } else {
            console.error('An error occurred while reading the file:', error.message);
        }
    }
}

// Accept the file path as a command-line argument
const filePath = process.argv[2];

if (!filePath) {
    console.error('Usage: node app.js <file-path>');
} else {
    readAndModifyFile(filePath);
}
