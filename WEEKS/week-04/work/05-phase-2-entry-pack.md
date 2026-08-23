# W04-05 — Phase 2 Entry Pack (Week 05–08)

|              Phase 2 week | Candidate scope from RTM                                                                         | Input/evidence ready now                                                                  | Conditional / Not Ready item                                               | Owner/next action                                   | Entry status |
| ------------------------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| 05 Component/Unit Testing | FR-05 (face detection), NFR-02 (model accuracy), FR-06 (model inference, draft)                  | AC-01–03 ของ FR-05 พร้อม; AC-01–03 ของ NFR-02 พร้อม (รอเกณฑ์อนุมัติ); ผล MT-01–03 บางส่วน | FR-06 wording ยังไม่ final (GA-01)                                         | ธนภัทร / ยืนยัน FR-06 ก่อนเริ่มออกแบบ test case     | Conditional  |
|    06 Integration Testing | FR-04→FR-05→FR-06→FR-07 pipeline flow (แยกเฟรม→ตรวจจับใบหน้า→วิเคราะห์โมเดล→สรุปผล)              | Route Map Gate C (W02), design notes จากบทที่3                                            | Frontend ยัง Mockup (จาก W02 Route Map) กระทบการทดสอบ integration เต็มระบบ | ธนภัทร / เร่ง Frontend implement                    | Not Ready    |
|             07 System/UAT | FR-07 (การตัดสิน Real/Fake สุดท้าย) สำหรับ user journey ของ Lanner News                          | UAT-02 (planned), Route Map Gate D                                                        | Threshold/aggregation ของ FR-07 ยังไม่ยืนยัน (GA-02); Frontend ไม่พร้อม    | ธนภัทร / แก้ GA-02 ก่อน                             | Not Ready    |
| 08 Test Design Techniques | NFR-09 boundary (upload ผิดเงื่อนไข/ขนาดไฟล์ ≤100MB ตาม NFR-01), NFR-02 boundary (cross-dataset) | AC-02 ของ REQ-05 (negative/boundary), AC-03 ของ REQ-01 (cross-dataset boundary)           | เกณฑ์ 95%/90%/0.95 ยังไม่อนุมัติ (GA-03)                                   | ธนภัทร / ยืนยันเกณฑ์ก่อนออกแบบ test case เต็มรูปแบบ | Conditional  |

## Priority handoff

- Critical slice ที่ควร trace ต่อก่อน: QR-01 → FR-07 (final decision output) เพราะกระทบ stakeholder โดยตรงที่สุดและยัง Not Ready
- Requirement/AC ที่พร้อมที่สุด: FR-05 (REQ-02) — Ready เต็มที่ ไม่มี blocker
- Open decision ที่เสี่ยง block หลายสัปดาห์: threshold/aggregation ของ FR-07 (GA-02) — กระทบทั้ง Week 06 (Integration) และ Week 07 (System/UAT) ถ้าไม่ยืนยันเร็ว
- สิ่งที่ ENGSE212 ต้องทบทวน/อัปเดต: สถานะ Frontend implementation (ยัง Mockup) กระทบทุกสัปดาห์ตั้งแต่ Week 06 เป็นต้นไป — ต้องติดตามใกล้ชิด
- AI Use Declaration: ใช้ Claude ช่วยร่าง Review Log, RTM, Gate A decision และ Phase 2 Entry Pack จาก W01–W03 + SE02 + บทที่3 — ต้องตรวจทานก่อนส่งจริง
