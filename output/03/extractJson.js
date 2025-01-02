const fs = require('fs');

function extractTimestamps(inputFilePath, outputFilePath) {
    try {
        // Đọc file JSON
        const jsonData = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));

        // Lấy dữ liệu "timestamp" và chuyển đổi thành chuỗi
        const result = jsonData.timestamp.map(entry => entry.join(",")).join("\n");

        // Ghi kết quả vào file .txt
        fs.writeFileSync(outputFilePath, result, 'utf8');
        console.log(`Timestamps have been successfully written to: ${outputFilePath}`);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

// Đường dẫn tới file JSON
const inputFilePath = 'D:/Working/VueTest/input/timestamp.json'; // Thay bằng đường dẫn thực tế của file JSON
// Đường dẫn tới file đầu ra
const outputFilePath = 'D:/Working/VueTest/output/04/dialogue-player/public/timestamp.txt'; // Thay bằng đường dẫn thực tế của file .txt

// Gọi hàm
extractTimestamps(inputFilePath, outputFilePath);
