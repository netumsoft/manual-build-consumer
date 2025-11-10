selector_to_html = {"a[href=\"#restore-default-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#get-firmware-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0438<a class=\"headerlink\" href=\"#get-firmware-version\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/S_CMD_FFFF.png\"><img alt=\"../../media/S_CMD_FFFF.png\" src=\"../../media/S_CMD_FFFF.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e</span><a class=\"headerlink\" href=\"#id1\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/T_OUT_CVER.png\"><img alt=\"../../media/T_OUT_CVER.png\" src=\"../../media/T_OUT_CVER.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0438</span><a class=\"headerlink\" href=\"#id2\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#system-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438<a class=\"headerlink\" href=\"#system-settings\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h1><h2>\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>"}
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
