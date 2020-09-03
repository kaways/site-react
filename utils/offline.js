if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator
) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(reg) {
        console.log('Service worker registrado');
    })
    .catch(function(e) {
        console.error('Erro durante o registro do worker:', e);
    });
}