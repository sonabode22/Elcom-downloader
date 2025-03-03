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

// Drag and Drop
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const browseText = document.getElementById('browse');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const uploadBtn = document.getElementById('upload-btn');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.style.border = '2px dashed var(--secondary-color)';
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.style.border = '2px dashed var(--primary-color)';
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

browseText.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (file) {
        showNotification(`تم اختيار الملف: ${file.name}`);
    }
}

// إشعارات
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// نموذج التواصل
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // هنا يمكنك إرسال البيانات إلى الخادم
    console.log({ name, email, message });
    showNotification('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
});
