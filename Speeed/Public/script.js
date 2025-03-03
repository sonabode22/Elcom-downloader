const startBtn = document.getElementById('startBtn');
const needle = document.getElementById('needle');
const speedValue = document.getElementById('speedValue');
const speedUnit = document.getElementById('speedUnit');

// عناصر النتائج
const downloadKb = document.getElementById('downloadKb');
const downloadMb = document.getElementById('downloadMb');
const downloadMB = document.getElementById('downloadMB');
const uploadKb = document.getElementById('uploadKb');
const uploadMb = document.getElementById('uploadMb');
const uploadMB = document.getElementById('uploadMB');

const TEST_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const TEST_FILE_URL = 'https://yourserver.com/testfile'; // استبدل برابط الملف الحقيقي

function rotateNeedle(speedMbps) {
    const maxSpeed = 500;
    const angle = (speedMbps / maxSpeed) * 180 - 90;
    needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

function updateDisplay(speedBps, isDownload = true) {
    const speedKbps = (speedBps * 8) / 1024;
    const speedMbps = speedKbps / 1024;
    const speedMBs = speedBps / (1024 * 1024);

    if (isDownload) {
        downloadKb.textContent = speedKbps.toFixed(1);
        downloadMb.textContent = speedMbps.toFixed(1);
        downloadMB.textContent = speedMBs.toFixed(1);
    } else {
        uploadKb.textContent = speedKbps.toFixed(1);
        uploadMb.textContent = speedMbps.toFixed(1);
        uploadMB.textContent = speedMBs.toFixed(1);
    }

    speedValue.textContent = speedMbps.toFixed(1);
    rotateNeedle(speedMbps);
}

async function measureDownload() {
    try {
        const startTime = Date.now();
        const response = await fetch(TEST_FILE_URL + '?t=' + Date.now());
        const reader = response.body.getReader();
        let received = 0;
        
        while(true) {
            const {done, value} = await reader.read();
            if(done) break;
            received += value.length;
            const speed = received / ((Date.now() - startTime) / 1000);
            updateDisplay(speed, true);
        }
        
        return (TEST_FILE_SIZE * 8) / ((Date.now() - startTime) / 1000);
    } catch (error) {
        console.error('Download error:', error);
        return 0;
    }
}

async function measureUpload() {
    const dummyData = new Uint8Array(TEST_FILE_SIZE);
    const startTime = Date.now();
    
    try {
        await fetch(TEST_FILE_URL, {
            method: 'POST',
            body: dummyData,
            headers: {'Content-Type': 'application/octet-stream'}
        });
        
        const duration = (Date.now() - startTime) / 1000;
        const speed = (TEST_FILE_SIZE * 8) / duration;
        updateDisplay(speed, false);
        return speed;
    } catch (error) {
        console.error('Upload error:', error);
        return 0;
    }
}

async function startTest() {
    startBtn.disabled = true;
    
    // قياس التنزيل
    await measureDownload();
    
    // قياس الرفع
    await measureUpload();
    
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startTest);