selector_to_html = {"a[href=\"#make-a-connection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0625\u0646\u0634\u0627\u0621 \u0627\u062a\u0635\u0627\u0644<a class=\"headerlink\" href=\"#make-a-connection\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#quick-configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u062a\u0643\u0648\u064a\u0646 \u0633\u0631\u064a\u0639<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#demo-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u062c\u0631\u064a\u0628\u064a<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#use-tcp-client-to-transfer-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0627\u0633\u062a\u062e\u062f\u0645 \u0639\u0645\u064a\u0644 TCP \u0644\u0646\u0642\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a<a class=\"headerlink\" href=\"#use-tcp-client-to-transfer-data\" title=\"Link to this heading\">#</a></h1><h2>\u062a\u0643\u0648\u064a\u0646 \u0633\u0631\u064a\u0639<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>"}
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
