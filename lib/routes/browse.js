'use strict';

const useragent = require('useragent');

module.exports = {
    method: 'GET',
    path: '/{code}',
    options: {
        handler: async (request, h) => {

            const { Urls } = request.models();
            const { code } = request.params;


            const item = await Urls.query()
                .where('code', code)
                .first();

            let url = process.env.DEFAULT_URL;

            if (item) {
                if (item.android || item.ios) {
                    const { scooter } = request.plugins;
                    if (scooter.os.family === 'Android') {
                        url = item.android;
                    } else if (scooter.os.family === 'iOS') {
                        url = item.ios;
                    } else {
                        url = item.url;
                    }
                } else {
                    url = item.url;
                }
            }

            return h.redirect(url);
        }
    }
};
