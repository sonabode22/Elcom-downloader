// تفعيل اختيار نوع الملف
document.querySelectorAll('.file-type-selector button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.file-type-selector button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // إظهار خيارات الصيغ المناسبة
        const type = this.dataset.type;
        const formatSelector = this.closest('.card-body').querySelector('.format-selector select');
        
        if(type === 'image') {
            formatSelector.innerHTML = `
                <option>JPG - عالي الجودة</option>
                <option>PNG - شفافية</option>
                <option>WEBP - حجم صغير</option>
            `;
        } else if(type === 'video') {
            formatSelector.innerHTML = `
                <option>MP4 - 1080p</option>
                <option>MP4 - 4K</option>
                <option>MKV - غير مضغوط</option>
            `;
        }
    });
});

// محاكاة عملية التحميل
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.platform-card');
        card.classList.add('downloading');
        
        // محاكاة التحميل
        setTimeout(() => {
            card.classList.remove('downloading');
            card.classList.add('downloaded');
            setTimeout(() => card.classList.remove('downloaded'), 2000);
        }, 3000);
    });
});
