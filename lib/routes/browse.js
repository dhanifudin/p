'use strict';

module.exports = {
    method: 'GET',
    path: '/{code}',
    options: {
        handler: async (request, h) => {

            const { Urls } = request.models();
            const { code } = request.params;

            console.log(code);

            const url = await Urls.query()
                .where('code', code)
                .first();

            if (!url) {
                return h.redirect(process.env.HOME);
            }

            return url;
        }
    }
};
