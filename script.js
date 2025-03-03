// دالة لتنزيل المحتوى من إنستجرام
function downloadInstagram() {
    const url = document.getElementById('instagramUrl').value;
    if (url) {
        alert('جارٍ تحميل المحتوى من إنستجرام: ' + url);
        // يمكنك إضافة منطق التحميل الفعلي هنا
    } else {
        alert('الرجاء إدخال رابط صحيح من إنستجرام.');
    }
}

// تفعيل الوضع المظلم
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // تغيير النص داخل الزر بناءً على حالة الوضع المظلم
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<i class="fas fa-sun"></i> تمكين الوضع الفاتح';
        localStorage.setItem('darkMode', 'enabled'); // حفظ حالة الوضع المظلم
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i> تمكين الوضع المظلم';
        localStorage.setItem('darkMode', 'disabled'); // حفظ حالة الوضع المظلم
    }
});

// التحقق من حالة الوضع المظلم عند تحميل الصفحة
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i> تمكين الوضع الفاتح';
} else {
    document.body.classList.remove('dark-mode');
    document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-moon"></i> تمكين الوضع المظلم';
}
