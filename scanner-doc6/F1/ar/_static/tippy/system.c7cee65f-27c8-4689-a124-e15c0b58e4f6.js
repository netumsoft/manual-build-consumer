selector_to_html = {"a[href=\"#get-firmware-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0646\u0633\u062e\u0629 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u062b\u0627\u0628\u062a<a class=\"headerlink\" href=\"#get-firmware-version\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#restore-default-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0625\u0633\u062a\u0639\u0627\u062f\u0629 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/T_OUT_CVER.png\"><img alt=\"../../media/T_OUT_CVER.png\" src=\"../../media/T_OUT_CVER.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0646\u0633\u062e\u0629 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u062b\u0627\u0628\u062a</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#system-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645<a class=\"headerlink\" href=\"#system-settings\" title=\"Link to this heading\">#</a></h1><h2>\u0625\u0633\u062a\u0639\u0627\u062f\u0629 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/S_CMD_FFFF.png\"><img alt=\"../../media/S_CMD_FFFF.png\" src=\"../../media/S_CMD_FFFF.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u0625\u0633\u062a\u0639\u0627\u062f\u0629 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
