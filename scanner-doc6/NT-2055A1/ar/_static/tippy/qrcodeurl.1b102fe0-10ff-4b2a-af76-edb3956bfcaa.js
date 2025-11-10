selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010330..png\"><img alt=\"../../media/3E210010330..png\" src=\"../../media/3E210010330..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u062a\u0645\u0643\u064a\u0646 \u0631\u0645\u0632 URL</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#qr-code-url-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0631\u0627\u0628\u0637 \u0631\u0645\u0632 QR<a class=\"headerlink\" href=\"#qr-code-url-settings\" title=\"Link to this heading\">#</a></h1><p>\u062d\u0638\u0631 \u0627\u0644\u0645\u0633\u062d \u0627\u0644\u0636\u0648\u0626\u064a \u0644\u0631\u0645\u0648\u0632 QR URL \u0628\u062f\u0621\u0627\u064b \u0645\u0646 <code class=\"docutils literal notranslate\"><span class=\"pre\">http://</span></code>\u060c <code class=\"docutils literal notranslate\"><span class=\"pre\">https://</span></code>\u060c <code class=\"docutils literal notranslate\"><span class=\"pre\">www.</span></code></p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010331..png\"><img alt=\"../../media/3E210010331..png\" src=\"../../media/3E210010331..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u062a\u0639\u0637\u064a\u0644 \u0631\u0645\u0632 URL</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#disable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u062a\u0639\u0637\u064a\u0644 \u0631\u0645\u0632 URL<a class=\"headerlink\" href=\"#disable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#enable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u062a\u0645\u0643\u064a\u0646 \u0631\u0645\u0632 URL<a class=\"headerlink\" href=\"#enable-url-code\" title=\"Link to this heading\">#</a></h2>"}
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
