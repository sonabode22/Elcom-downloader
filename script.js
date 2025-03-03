// دالة لتنزيل المحتوى
function downloadContent() {
    const url = document.getElementById('downloadUrl').value;
    if (!url) {
        alert('الرجاء إدخال رابط صحيح.');
        return;
    }

    // يمكنك إضافة منطق التحميل الفعلي هنا
    alert('جارٍ تحميل المحتوى: ' + url);
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
