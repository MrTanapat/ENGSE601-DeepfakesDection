# หลักฐานจากการรันจริง · DeepfakesDection_Team

ทุกไฟล์มาจากการรันจริงกับ Frontend ของโครงงาน ENGSE212 commit `441d891` เมื่อ 22 ต.ค. 2569 เวลา 11:15 น. ไม่ได้แก้ข้อความในผลรัน · ส่วนหัวของไฟล์ `.txt` บอกวันที่ เครื่องมือ โฟลเดอร์ และคำสั่ง · บรรทัดท้ายบอก exit code

| ไฟล์ | ระดับ | ผล |
|---|---|---|
| [TC-01_to_TC-11_unit_2026-10-22.txt](TC-01_to_TC-11_unit_2026-10-22.txt) | Unit | 8 ผ่าน · 3 ไม่ผ่าน (TC-03 · TC-09 · TC-10) |
| [SYS-01_SYS-02_system-auto_2026-10-22.txt](SYS-01_SYS-02_system-auto_2026-10-22.txt) | System อัตโนมัติ | SYS-01 ผ่าน · SYS-02 ไม่ผ่าน |
| [SYS-01_system_2026-10-22_1-open.png](SYS-01_system_2026-10-22_1-open.png) | System | ขั้นที่ 1 เปิด `/detect` แบบ Guest |
| [SYS-01_system_2026-10-22_2-selected.png](SYS-01_system_2026-10-22_2-selected.png) | System | ขั้นที่ 2 เลือก `clip_5MB.mp4` แล้วเห็นปุ่มเริ่มตรวจ |
| [SYS-02_system_2026-10-22_1-after-select.png](SYS-02_system_2026-10-22_1-after-select.png) | System | เลือกไฟล์ 100 MB + 1 ไบต์ แล้วยังเห็นปุ่มเริ่มตรวจ · หน้าจอเขียน "ขนาดไฟล์สูงสุด: 500MB" |

ตั้งชื่อ `<รหัส TC>_<ระดับ>_<วันที่ปี ค.ศ.>` · ดูกติกาเต็มใน [EVIDENCE-RULES.md](../../EVIDENCE-RULES.md) · ไฟล์ในโฟลเดอร์นี้ต้องมาจากการรันจริงเท่านั้น
