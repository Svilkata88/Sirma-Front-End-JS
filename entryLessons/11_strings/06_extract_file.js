function extractFile(path) {
    const words = path.split('\\');
    const searchedFile = words[words.length-1];

    const name = searchedFile.split('.').slice(0, -1).join('.');
    const extension = searchedFile.split('.').pop();
    console.log(`File name:`,name);
    console.log('File extension:',extension);
}

extractFile(
    'C:\\desktop\\academy\\template.pptx'
);

// extractFile(
//     'C:\\Projects\\website.folder\\file.name.js'
// );