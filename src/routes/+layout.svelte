<script lang="ts">
    import "unfonts.css";
    import "$lib/styles/global.css";

    // Props
    let { children } = $props();

    // State
    let mobileMenuOpen = $state(false);
    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta name="theme-color" content="#217ff1" />
    <meta name="robots" content="index, follow" />
    <img
        src="https://umami.myhren.ai/p/T5yST9fhE"
        width="1"
        height="1"
        style="display:none;"
    />
</svelte:head>

<nav class="nav">
    <div class="nav-inner container">
        <a href="/" class="nav-logo"
            ><enhanced:img
                src="$lib/assets/logo.png"
                alt="Myhren AI"
                class="nav-logo-img"
                width="266"
            /></a
        >

        <div class="nav-links desktop-only">
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Contact</a>
        </div>

        <div class="nav-cta desktop-only">
            <a
                href="https://cal.com/myhrenai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-nav"
            >
                Book a call<span class="dot"></span>
            </a>
        </div>

        <button
            class="nav-hamburger mobile-only"
            onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
            aria-label="Toggle menu"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                {#if mobileMenuOpen}
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                {:else}
                    <path d="M4 5h16" /><path d="M4 12h16" /><path
                        d="M4 19h16"
                    />
                {/if}
            </svg>
        </button>
    </div>

    {#if mobileMenuOpen}
        <div class="mobile-menu mobile-only">
            <a href="/#services" onclick={closeMobileMenu}>Services</a>
            <a href="/#process" onclick={closeMobileMenu}>Process</a>
            <a href="/#faq" onclick={closeMobileMenu}>FAQ</a>
            <a href="/#contact" onclick={closeMobileMenu}>Contact</a>
            <a
                href="https://cal.com/myhrenai/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
                onclick={closeMobileMenu}
            >
                Book a call
            </a>
        </div>
    {/if}
</nav>

<main>
    {@render children()}
</main>

<footer class="footer">
    <div class="container">
        <div class="footer-grid footer-top">
            <div class="footer-brand">
                <enhanced:img
                    src="$lib/assets/logo.png"
                    alt="Myhren AI"
                    class="footer-logo-img"
                    width="266"
                />
                <p class="footer-tagline">
                    AI systems and automations for businesses. Built to
                    eliminate the work you hate.
                </p>
                <div class="footer-contact-links">
                    <a href="mailto:contact@myhren.ai">contact@myhren.ai</a>
                    <a
                        href="https://cal.com/myhrenai/strategy-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="footer-book-link">Book a call →</a
                    >
                </div>
            </div>

            <div class="footer-col">
                <div class="footer-col-title">Services</div>
                <ul>
                    <li><a href="#services">Workflow Automation</a></li>
                    <li><a href="#services">AI Agents</a></li>
                    <li><a href="#services">System Integration</a></li>
                    <li><a href="#services">Process Consulting</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <div class="footer-col-title">Company</div>
                <ul>
                    <li><a href="#process">How It Works</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <div class="footer-col-title">Legal</div>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <span>© 2026 MYHREN AI · Org.nr 932 149 893</span>
            <span>NORWAY</span>
        </div>
    </div>
</footer>

<style>
    .nav {
        position: sticky;
        top: 0;
        z-index: 50;
        background: rgba(255, 255, 255, 0.88);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid #e8e8e8;
    }

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--nav-h);
    }

    .nav-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .nav-logo-img {
        height: 32px;
        width: auto;
        display: block;
    }

    .nav-links {
        display: flex;
        gap: 28px;
    }

    .nav-links a {
        color: var(--c-text);
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        opacity: 0.75;
        transition: opacity 0.2s;
    }

    .nav-links a:hover {
        opacity: 1;
    }

    .nav-cta {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .nav-hamburger {
        background: none;
        border: none;
        padding: 8px;
        cursor: pointer;
        color: var(--c-text);
    }

    .mobile-menu {
        padding: 16px clamp(20px, 5vw, 40px) 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-top: 1px solid var(--c-border);
    }

    .mobile-menu a {
        font-size: 16px;
        font-weight: 500;
        color: var(--c-text);
        text-decoration: none;
        padding: 8px 0;
    }

    .mobile-menu :global(.btn-primary) {
        color: var(--c-white);
        justify-content: center;
        text-align: center;
        margin-top: 4px;
    }

    .footer {
        background: var(--c-dark);
        color: var(--c-white);
        padding: 64px 0 40px;
    }

    .footer-top {
        padding-bottom: 48px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .footer-brand {
        grid-column: span 5;
    }

    .footer-logo-img {
        height: 32px;
        width: auto;
        display: block;
        filter: brightness(0) invert(1);
    }

    .footer-tagline {
        margin-top: 20px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
        max-width: 320px;
        line-height: 1.6;
    }

    .footer-contact-links {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .footer-contact-links a {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
    }

    .footer-book-link {
        color: var(--c-accent) !important;
    }

    .footer-col {
        grid-column: span 2;
    }

    .footer-col-title {
        font-family: var(--f-mono);
        font-size: 10px;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        margin-bottom: 16px;
    }

    .footer-col ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .footer-col a {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.75);
        text-decoration: none;
        transition: color 0.2s;
    }

    .footer-col a:hover {
        color: var(--c-white);
    }

    .footer-bottom {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }

    .footer-bottom span {
        font-family: var(--f-mono);
        font-size: 11px;
        color: rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 900px) {
        .footer-brand {
            grid-column: 1 / -1;
        }

        .footer-col {
            grid-column: span 1;
        }
    }

    @media (max-width: 600px) {
        .footer-col {
            grid-column: 1 / -1;
        }
    }
</style>
