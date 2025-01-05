const fs = require("fs");
const xml2js = require("xml2js");

// Đường dẫn đến file đầu vào
const inputFilePath = "D:/Working/VueTest/input/ssml.xml";
// Đường dẫn đến file đầu ra
const outputFilePath = "D:/Working/VueTest/output/outputFile/output.txt";

fs.readFile(inputFilePath, "utf-8", (err, data) => {
    // Kiểm tra lỗi khi đọc file
    if (err) {
        console.error("Error reading file:", err.message);
    } else {
        const parser = new xml2js.Parser();
        parser.parseString(data, (err, result) => {
            if (err) {
                console.error("Error parsing XML:", err.message);
            } else {
                // Trích xuất và xử lý dữ liệu từ file XML
                const voices = result.speak.voice;
                const dialogue = voices.map((voice) => {
                    const name = voice.$.name;
                    const text = voice._.trim();
                    const speaker = name.includes("en-US") ? "James" : "Lan";
                    return `${speaker}: ${text}`;
                }).join("\n");

                // Ghi kết quả vào file .txt
                fs.writeFile(outputFilePath, dialogue, "utf-8", (err) => {
                    if (err) {
                        console.error("Error writing file:", err.message);
                    } else {
                        console.log("Dialogue successfully written to:", outputFilePath);
                    }
                });
            }
        });
    }
});
