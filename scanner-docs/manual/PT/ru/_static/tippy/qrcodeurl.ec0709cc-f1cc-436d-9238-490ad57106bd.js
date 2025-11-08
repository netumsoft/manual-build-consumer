selector_to_html = {"a[href=\"#qr-code-url-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 URL \u043a\u043e\u0434\u0430 QR<a class=\"headerlink\" href=\"#qr-code-url-settings\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h1><p>\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f QR-\u043a\u043e\u0434\u043e\u0432, \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441 <code class=\"docutils literal notranslate\"><span class=\"pre\">http://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">https://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">www.</span></code></p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E210010331..png\"><img alt=\"../../Media/3E210010331..png\" src=\"../../Media/3E210010331..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c URL \u043a\u043e\u0434</span><a class=\"headerlink\" href=\"#id2\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u0434 URL<a class=\"headerlink\" href=\"#enable-url-code\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E210010330..png\"><img alt=\"../../Media/3E210010330..png\" src=\"../../Media/3E210010330..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u0434 URL</span><a class=\"headerlink\" href=\"#id1\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#disable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c URL \u043a\u043e\u0434<a class=\"headerlink\" href=\"#disable-url-code\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
