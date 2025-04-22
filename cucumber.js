module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: [
            'step-definitions/**/*.ts',
            'support/**/*.ts'
        ],
        paths: ['features/**/*.feature'],
        format: [
            'progress-bar',
            'html:cucumber-report.html'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        }
    }
}