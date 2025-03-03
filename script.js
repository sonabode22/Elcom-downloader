// مثال للدوال التي تقوم بمعالجة التنزيلات (ستحتاج إلى إضافتها لاحقاً)

function downloadInstagram() {
    const url = document.getElementById('instagramUrl').value;
    alert('تحميل من إنستجرام: ' + url);
}

function downloadYouTube() {
    const url = document.getElementById('youtubeUrl').value;
    alert('تحميل من يوتيوب: ' + url);
}

function downloadFacebook() {
    const url = document.getElementById('facebookUrl').value;
    alert('تحميل من فيسبوك: ' + url);
}

function downloadPinterest() {
    const url = document.getElementById('pinterestUrl').value;
    alert('تحميل من بينترست: ' + url);
}
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // تغيير النص داخل الزر بناءً على حالة الوضع المظلم
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<i class="fas fa-sun"></i> تمكين الوضع الفاتح';
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i> تمكين الوضع المظلم';
    }
});