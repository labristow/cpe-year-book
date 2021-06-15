const path = require('path');

module.exports = {
    async rewrites(){
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/:path*'
            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'sass')]
    }
}
