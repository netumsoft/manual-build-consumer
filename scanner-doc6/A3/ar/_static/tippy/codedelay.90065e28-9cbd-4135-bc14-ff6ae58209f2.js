selector_to_html = {"a[href=\"#disable-same-code-scanning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u062a\u0639\u0637\u064a\u0644 \u0645\u0633\u062d \u0627\u0644\u0643\u0648\u062f \u0646\u0641\u0633\u0647<a class=\"headerlink\" href=\"#disable-same-code-scanning\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E210010030..png\"><img alt=\"../../Media/3E210010030..png\" src=\"../../Media/3E210010030..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">0\u0645.\u062b</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3000\u0645\u0644\u0645<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#same-code-delay-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0646\u0641\u0633 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u062a\u0623\u062e\u064a\u0631 \u0627\u0644\u0643\u0648\u062f<a class=\"headerlink\" href=\"#same-code-delay-settings\" title=\"Link to this heading\">#</a></h1><p>\u0644\u0645\u0646\u0639 \u0642\u0631\u0627\u0621\u0629 \u0646\u0641\u0633 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062f \u0639\u062f\u0629 \u0645\u0631\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u062a\u0648\u0627\u0644\u064a \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u0645\u0633\u062d\u060c \u064a\u0645\u0643\u0646\u0643 \u062a\u0639\u064a\u064a\u0646 \u062d\u062f \u0632\u0645\u0646\u064a \u0642\u0628\u0644 \u0627\u0644\u0633\u0645\u0627\u062d \u0628\u0642\u0631\u0627\u0621\u0629 \u0646\u0641\u0633 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062f.</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">500 \u0645\u0644\u064a<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E21001003500..png\"><img alt=\"../../Media/3E21001003500..png\" src=\"../../Media/3E21001003500..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">500 \u0645\u0644\u064a</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E2100100365535..png\"><img alt=\"../../Media/3E2100100365535..png\" src=\"../../Media/3E2100100365535..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u062a\u0639\u0637\u064a\u0644 \u0645\u0633\u062d \u0627\u0644\u0643\u0648\u062f \u0646\u0641\u0633\u0647</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../Media/3E210010033000..png\"><img alt=\"../../Media/3E210010033000..png\" src=\"../../Media/3E210010033000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">3000\u0645\u0644\u0645</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#ms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">0\u0645.\u062b<a class=\"headerlink\" href=\"#ms\" title=\"Link to this heading\">#</a></h2>"}
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
