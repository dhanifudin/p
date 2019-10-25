'use strict';

const defaultUrl = process.env.DEFAULT_URL;

module.exports = {
    method: 'GET',
    path: '/{code}',
    options: {
        handler: async (request, h) => {

            try {
                const { Urls } = request.models();
                const { code } = request.params;


                const item = await Urls.query()
                    .where('code', code)
                    .first();

                const getUrl = () => {

                    if (item && (item.android || item.ios)) {
                        const { family } = request.plugins.scooter.os;
                        return (family === 'Android') ? item.android
                            : (family === 'iOS') ? item.ios : item.url;
                    }

                    return (item) ? item.url : defaultUrl;
                };

                return h.redirect(getUrl());
            }
            catch (err) {
                return h.redirect(defaultUrl)
            }
        }
    }
};
