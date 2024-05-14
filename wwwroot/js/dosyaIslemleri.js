// wwwroot/js/dosyaIslemleri.js

window.dosyaIslemleri = {
    dosyaSec: function (inputRef) {
        inputRef.click();
    },
    getDosyaYolu: function () {
        return new Promise((resolve, reject) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.addEventListener('change', (event) => {
                const dosya = event.target.files[0];
                resolve(dosya ? dosya.name : null);
            });
            input.click();
        });
    }
};
