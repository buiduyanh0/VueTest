const fs = require("fs");
const xml2js = require("xml2js");

// Đường dẫn tới file đầu vào
const inputFilePath = "D:/Working/VueTest/input/ssml.xml";
// Đường dẫn tới file đầu ra
const outputFilePath = "D:/Working/VueTest/output/04/dialogue-player/public/outputAB.txt";

fs.readFile(inputFilePath, "utf-8", (err, data) => {
    if (err) {
        // Kiểm tra lỗi khi đọc file
        console.error("Error reading file:", err.message);
    } else {
        const parser = new xml2js.Parser();
        parser.parseString(data, (err, result) => {
            if (err) {
                // Kiểm tra lỗi khi phân tích cú pháp XML
                console.error("Error parsing XML:", err.message);
            } else {
                // Đảm bảo cấu trúc dữ liệu đã phân tích có thông tin cần thiết
                const voices = result?.speak?.voice;
                if (voices && Array.isArray(voices)) {
                    // Biến để luân phiên giữa các speaker
                    let speakerToggle = true;
                    let dialogueLines = [];

                    // Duyệt qua các phần tử voice để trích xuất đoạn hội thoại
                    voices.forEach((voice) => {
                        const text = voice._?.trim();
                        if (text) {
                            // Chuyển đổi speaker giữa A và B
                            const speaker = speakerToggle ? "A" : "B";
                            dialogueLines.push(`${speaker}: ${text}`);
                            speakerToggle = !speakerToggle; // Đổi speaker
                        }
                    });

                    // Ghi kết quả vào file .txt
                    fs.writeFile(outputFilePath, dialogueLines.join("\n"), "utf-8", (err) => {
                        if (err) {
                            console.error("Error writing file:", err.message);
                        } else {
                            console.log("Dialogue successfully written to:", outputFilePath);
                        }
                    });
                } else {
                    console.error("No <voice> elements found in the XML file.");
                }
            }
        });
    }
});
