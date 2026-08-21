# W01 Work — Quality Risk Cards

## Submission context

- Project/team: DeepfakesDection_Team
- Proposal/SRS source + version: `INPUTS\proposal\SE02-Deepfakes-detection-Document-Edit_thanit_signed.pdf`, `INPUTS\requirements-srs\Software_Requirements_Specification.pdf`
- Authors: ธนภัทร นุกูล
- Peer reviewer: -
- Review date/commit: 21/08/26

> ทำ 3–5 cards โดยคัดลอกหัวข้อ Card เพิ่มตามจำนวนจริง

## Card QR-01

| Field           | Team record                                                     |
| --------------- | --------------------------------------------------------------- |
| Source          | NFR-02 + โมเดลเทรนบน FF-C23 เท่านั้น                            |
| Situation       | เจอ deepfake ที่ต่างจากข้อมูลเทรน                               |
| Risk statement  | จำแนกผิดเป็น Real → Lanner News เผยแพร่ข่าวปลอม                 |
| Quality concern | Functional suitability / Reliability                            |
| Impact          | สูง — core function                                             |
| Verification    | ผ่าน MT-01 (Acc≥90%), MT-02 (AUC≥0.95) หรือไม่                  |
| Validation      | perform ดีไหมกับ deepfake นอก FF-C23                            |
| Evidence status | Existing (F1=0.9744, AUC=0.9927) แต่ Not Executed cross-dataset |
| Owner/next      | ธนภัทร; ทดสอบ deepfake นอก FF-C23 เพิ่ม                         |

## Card QR-02

| Field           | Team record                              |
| --------------- | ---------------------------------------- |
| Source          | Gantt Chart เดือน 4-5                    |
| Situation       | Frontend ยังเป็น Mockup ใกล้ช่วง Testing |
| Risk statement  | ไม่มีเวลาพอสำหรับ Integration Test/UAT   |
| Quality concern | Functional suitability / Schedule        |
| Impact          | สูง — กระทบเดดไลน์ทั้งหมด                |
| Verification    | ผ่าน FT-01–FT-09 หรือไม่                 |
| Validation      | ทำ UAT ทันกำหนดไหม                       |
| Evidence status | Not Ready — ยังเป็น Mockup               |
| Owner/next      | ธนภัทร; เริ่ม implement Next.js โดยเร็ว  |

## Card QR-03

| Field           | Team record                                                |
| --------------- | ---------------------------------------------------------- |
| Source          | NFR-03 + Security Design (OWASP Top 10:2025)               |
| Situation       | เปิดให้ Guest เข้าถึงได้ + มีข้อมูลผู้ใช้จริง              |
| Risk statement  | ความปลอดภัยยังไม่ implement จริง เสี่ยงข้อมูลรั่ว ขัด PDPA |
| Quality concern | Security                                                   |
| Impact          | สูง — เกี่ยวข้องกฎหมาย                                     |
| Verification    | ผ่าน ST-01–ST-06 หรือไม่                                   |
| Validation      | retention policy ทำงานจริงไหม                              |
| Evidence status | Planned — ยังไม่ implement                                 |
| Owner/next      | ธนภัทร; implement security ก่อน test                       |
|                 |

## Peer check and revision

| Check                                        | Result / comment                    | Revision made / open action |
| -------------------------------------------- | ----------------------------------- | --------------------------- |
| ทุก card trace ไปยัง source จริงได้          | self-check ผ่าน                     | รอ external reviewer        |
| risk statement มี event/condition และ impact | self-check ผ่าน                     | รอ external reviewer        |
| V&V action ตอบ risk ไม่ใช่คำกว้าง            | self-check ผ่าน (อ้าง test ID จริง) | รอ external reviewer        |
| evidence status เป็นความจริง                 | self-check ผ่าน                     | รอ external reviewer        |

## Team conclusion

- Critical risk/feature ที่เลือกไป Week 02: **QR-01** — กระทบ stakeholder โดยตรงที่สุด, หลักฐานชัดสุด
- สิ่งที่ยังไม่รู้และ owner: ผล cross-dataset จริง, ความคืบหน้า Backend — ธนภัทร
- AI Use Declaration: ใช้ Claude ช่วยร่างจาก SE02+บทที่3 — ต้องตรวจทานก่อนส่งจริง
