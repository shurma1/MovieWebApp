export function initTelegramCss(){
    const tgStyles = {
    '--tg-color-scheme': 'dark',
    '--tg-theme-bg-color': '#212121',
    '--tg-theme-button-color': '#8774e1',
    '--tg-theme-button-text-color': '#ffffff',
    '--tg-theme-hint-color': '#aaaaaa',
    '--tg-theme-link-color': '#8774e1',
    '--tg-theme-secondary-bg-color': '#181818',
    '--tg-theme-text-color': '#ffffff',
    '--tg-viewport-height': '100vh',
    '--tg-viewport-stable-height': '100vh',
        'background': 'rgb(24, 24, 24)',
    '--second-button-color': 'rgba(135,116,225,0.1)',
    '--monochrome-overlay-color': 'rgba(255,255,255,0.12)',
    '--skeleton-color': 'rgba(170,170,170,0.16)',
    '--tg-theme-bg-color-rgb': '33,33,33'
    };

    const compiledStyle = Object.entries(tgStyles).map(([value, key]) =>  `${value}:${key}`).join((';'))
    console.log(compiledStyle)
    document.body.setAttribute('style', compiledStyle)
}