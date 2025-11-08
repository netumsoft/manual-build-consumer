selector_to_html = {"a[href=\"#demo-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0414\u0435\u043c\u043e-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430<a class=\"headerlink\" href=\"#demo-software\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#use-tcp-client-to-transfer-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c TCP \u043a\u043b\u0438\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445<a class=\"headerlink\" href=\"#use-tcp-client-to-transfer-data\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h1><h2>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f<a class=\"headerlink\" href=\"#quick-configuration\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#quick-configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f<a class=\"headerlink\" href=\"#quick-configuration\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#make-a-connection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435<a class=\"headerlink\" href=\"#make-a-connection\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>"}
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
