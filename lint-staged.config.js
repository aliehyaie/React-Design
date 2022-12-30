module.exports = {
    // this will check Typescript files
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

    // This will lint and format TypeScript and                                             //JavaScript files
    '**/*.(ts|tsx|js)': filenames => [
        `yarn eslint --fix ${filenames
            .map(filename => `"${filename}"`)
            .join(' ')}`,
        `yarn prettier --write ${filenames
            .map(filename => `"${filename}"`)
            .join(' ')}`,
    ],

    // this will Format MarkDown and JSON
    '**/*.(md|json)': filenames =>
        `yarn prettier --write ${filenames
            .map(filename => `"${filename}"`)
            .join(' ')}`,
};
