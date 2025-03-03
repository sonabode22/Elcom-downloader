// دالة لتنزيل المحتوى من إنستجرام
async function downloadInstagram() {
    const url = document.getElementById('instagramUrl').value;
    if (!url) {
        alert('الرجاء إدخال رابط صحيح من إنستجرام.');
        return;
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // استبدل بمفتاح API الخاص بك
            'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/?url=${encodeURIComponent(url)}`, options);
        const data = await response.json();

        if (data.status === 'success') {
            const downloadLink = data.data[0].url; // رابط التنزيل
            window.open(downloadLink, '_blank'); // فتح الرابط في نافذة جديدة
        } else {
            alert('حدث خطأ أثناء محاولة تنزيل المحتوى.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ أثناء الاتصال بالخادم.');
    }
}

// دوال أخرى (يمكنك إضافة منطق التحميل لليوتيوب وفيسبوك وبينترست لاحقًا)
function downloadYouTube() {
    const url = document.getElementById('youtubeUrl').value;
    if (url) {
        alert('جارٍ تحميل المحتوى من يوتيوب: ' + url);
        // يمكنك إضافة منطق التحميل الفعلي هنا
    } else {
        alert('الرجاء إدخال رابط صحيح من يوتيوب.');
    }
}

function downloadFacebook() {
    const url = document.getElementById('facebookUrl').value;
    if (url) {
        alert('جارٍ تحميل المحتوى من فيسبوك: ' + url);
        // يمكنك إضافة منطق التحميل الفعلي هنا
    } else {
        alert('الرجاء إدخال رابط صحيح من فيسبوك.');
    }
}

function downloadPinterest() {
    const url = document.getElementById('pinterestUrl').value;
    if (url) {
        alert('جارٍ تحميل المحتوى من بينترست: ' + url);
        // يمكنك إضافة منطق التحميل الفعلي هنا
    } else {
        alert('الرجاء إدخال رابط صحيح من بينترست.');
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