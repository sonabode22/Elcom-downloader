// تفعيل الوضع المظلم
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// التحقق من الوضع المظلم عند التحميل
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// معالجة أحداث التنزيل
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.dataset.platform;
        showDownloadModal(platform);
    });
});

// عرض نافذة التنزيل
function showDownloadModal(platform) {
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${getPlatformName(platform)} - أدخل رابط المحتوى</h3>
            <div class="input-group">
                <input type="text" id="downloadUrl" placeholder="مثال: https://www.instagram.com/p/...">
                <button onclick="startDownload('${platform}')">
                    <span>بدء التنزيل</span>
                    <div class="loading-dots"></div>
                </button>
            </div>
        </div>
    `;
    
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
}

// بدء عملية التنزيل
function startDownload(platform) {
    const btn = document.querySelector('.download-modal button');
    btn.disabled = true;
    btn.innerHTML = `<div class="loading-dots"></div>`;

    // محاكاة عملية التنزيل
    setTimeout(() => {
        alert('تم التنزيل بنجاح!');
        document.querySelector('.download-modal').remove();
    }, 2000);
}

// تحويل اسم المنصة
function getPlatformName(platform) {
    const names = {
        instagram: 'إنستجرام',
        youtube: 'يوتيوب',
        tiktok: 'تيك توك',
        twitter: 'تويتر'
    };
    return names[platform];
}
