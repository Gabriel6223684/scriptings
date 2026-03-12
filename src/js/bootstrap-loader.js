/**
 * bootstrap-loader.js
 * Carrega automaticamente Bootstrap CSS, JS e Popper.js no HTML.
 * Uso: <script src="bootstrap-loader.js"></script>
 */

(function () {
    const BOOTSTRAP_VERSION = "5.3.3";
    const CDN_BASE = `https://cdn.jsdelivr.net/npm/bootstrap@${BOOTSTRAP_VERSION}/dist`;

    const resources = [
        {
            type: "style",
            id: "bootstrap-css",
            href: `${CDN_BASE}/css/bootstrap.min.css`,
            integrity:
                "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
        },
        {
            type: "script",
            id: "bootstrap-js",
            src: `${CDN_BASE}/js/bootstrap.bundle.min.js`, // bundle já inclui Popper.js
            integrity:
                "sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmrgmUMjST/A/CrZTqHeyGfMpFVv",
            defer: true,
        },
    ];

    function alreadyLoaded(id) {
        return !!document.getElementById(id);
    }

    function loadStyle({ id, href, integrity }) {
        if (alreadyLoaded(id)) return;

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        if (integrity) {
            link.integrity = integrity;
            link.crossOrigin = "anonymous";
            link.referrerPolicy = "no-referrer";
        }
        document.head.appendChild(link);
        console.log(`[bootstrap-loader] CSS carregado: ${href}`);
    }

    function loadScript({ id, src, integrity, defer }) {
        if (alreadyLoaded(id)) return;

        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        if (integrity) {
            script.integrity = integrity;
            script.crossOrigin = "anonymous";
            script.referrerPolicy = "no-referrer";
        }
        if (defer) script.defer = true;

        script.onload = () =>
            console.log(`[bootstrap-loader] JS carregado: ${src}`);
        script.onerror = () =>
            console.error(`[bootstrap-loader] Falha ao carregar: ${src}`);

        document.head.appendChild(script);
    }

    // Injeta os recursos
    resources.forEach((res) => {
        if (res.type === "style") loadStyle(res);
        else if (res.type === "script") loadScript(res);
    });
})();