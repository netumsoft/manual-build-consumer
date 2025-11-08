selector_to_html = {"a[href=\"#restore-default-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Restaurar configura\u00e7\u00f5es padr\u00e3o<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../Media/S_CMD_FFFF.png\"><img alt=\"../../Media/S_CMD_FFFF.png\" src=\"../../Media/S_CMD_FFFF.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Restaurar configura\u00e7\u00f5es padr\u00e3o</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../Media/T_OUT_CVER.png\"><img alt=\"../../Media/T_OUT_CVER.png\" src=\"../../Media/T_OUT_CVER.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Obter vers\u00e3o do Firmware</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#system-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configura\u00e7\u00f5es do Sistema<a class=\"headerlink\" href=\"#system-settings\" title=\"Link to this heading\">#</a></h1><h2>Restaurar configura\u00e7\u00f5es padr\u00e3o<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#get-firmware-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Obter vers\u00e3o do Firmware<a class=\"headerlink\" href=\"#get-firmware-version\" title=\"Link to this heading\">#</a></h2>"}
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
