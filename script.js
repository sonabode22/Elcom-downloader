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
            <h3>أدخل رابط ${getPlatformName(platform)}</h3>
            <input type="text" id="downloadUrl" placeholder="https://">
            <button onclick="startDownload('${platform}')">تنزيل الآن</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// بدء عملية التنزيل
function startDownload(platform) {
    const url = document.getElementById('downloadUrl').value;
    if (!url) {
        alert('الرجاء إدخال رابط صحيح!');
        return;
    }
    
    // محاكاة عملية التنزيل
    alert(`جارٍ تنزيل المحتوى من ${getPlatformName(platform)}...`);
    document.querySelector('.download-modal').remove();
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
