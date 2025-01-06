các phần đã làm đc:
1. extract text từ file ssml.xml thành 2 bản output.txt và outputAB.txt (các file output được đặt trong mục outputFile)
2. extract text từ timestamp.json (file timestamp.txt được đặt trong thư mục outputFile)
3. tạo app Vue để chạy file audio và hiển thị dialogue đọc từ outputAB.txt
4. đã tạo được hàm đánh index nhưng hiện tại hàm đọc dialouge bị đang không nhận dẫn đến việc:
5. Chi tiết:
![image](https://github.com/user-attachments/assets/8f3cb3d0-741b-4e5d-9652-36a977b1c21d)
Hàm cắt text từ timestamp.txt: đã trim được dữ liệu từ file đc chia ra làm 4 element: start, end, index và wordLength
 ![image](https://github.com/user-attachments/assets/f3019c6d-db84-4252-981c-c8a4d7ec7d26)
Tiếp tục ta có hàm onTimeUpdate:
Trong hàm findIndex sẽ trích xuất từ dữ liệu từ timestamp để đánh index phù hợp với thời gian của đoạn âm thanh
Trong hàm findIndex có hàm con getDialogueLineIndex
![image](https://github.com/user-attachments/assets/bdb75453-a29b-4acd-94ab-1aa8f0ce3c6a)
Hàm này sẽ tính số từ có trong một dòng hội thoại từ đó để hàm findIndex sẽ đánh index sao cho phù hợp với đoạn hội thoại được trích xuất từ file outputAB.txt
