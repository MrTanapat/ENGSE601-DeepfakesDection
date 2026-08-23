# W03 Peer Review, Revision and AI Record

## Peer review

- Draft commit/version: v1 (draft) — commit hash จะกรอกตอน commit จริงก่อน tag `w03-submission-v1`
- Author(s): ธนภัทร นุกูล
- Reviewer(s): ไม่มี — self-check เท่านั้น (ทำคนเดียว)
- Date: 22 ส.ค. 69 (self-check)

| Finding ID | Requirement/AC location    | Finding/question                                                                                        | Disposition | Revision made / open action                                                         | Owner  | Re-check     |
| ---------- | -------------------------- | ------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------- | ------ | ------------ |
| W03-PR-01  | REQ-01 (NFR-02) / AC-01–03 | เกณฑ์ Accuracy≥90%, AUC≥0.95 เป็นค่าที่ทีมตั้งเอง ยังไม่ผ่านอนุมัติจากอาจารย์/ผู้ว่าจ้างอย่างเป็นทางการ | Clarify     | เปิด open question ไว้ในเอกสาร ระบุ owner+due แล้ว                                  | ธนภัทร | ก่อน Week 04 |
| W03-PR-02  | REQ-03 (FR-06)             | ข้อความต้นฉบับ FR-06 ตัดไม่ครบ ("...") ทำให้ preprocessing เต็มไม่ชัด                                   | Fix         | ต้องกลับไปเปิด SE02Finalversion.docx ตัวจริงเพื่อยืนยันข้อความเต็มก่อนปิด Not Ready | ธนภัทร | ก่อน Week 04 |
| W03-PR-03  | REQ-04 (FR-07)             | ไม่ทราบ aggregation method/threshold จริงที่ implement (average? threshold เท่าไหร่?)                   | Fix         | ต้องเช็คกับโค้ด/ทีม implement จริงก่อนปิด Not Ready                                 | ธนภัทร | ก่อน Week 04 |
| W03-PR-04  | REQ-05 (NFR-09)            | เกณฑ์ ≥95% success rate เป็นตัวเลขที่เสนอเอง ยังไม่ยืนยัน                                               | Clarify     | เปิด open question ไว้ในเอกสาร                                                      | ธนภัทร | ก่อน Week 04 |

## Revision note

- จาก draft → revision commit/version: v1 (draft ปัจจุบัน) — ยังไม่เคย submit/tag มาก่อน จึงยังไม่มี revision รอบสอง
- เปลี่ยนอะไรและเพราะอะไร: ปรับ NFR-02, FR-05, FR-06, FR-07, NFR-09 จากข้อความกำกวม/ทดสอบไม่ได้ ให้มีเกณฑ์วัดผ่าน–ไม่ผ่านชัดเจน (รายละเอียดใน `critical-requirement-review.md`) เพราะ self-check (Five-check) พบว่าเป็น Ambiguous/Incomplete/Not Testable
- ยังมี open issue ใด: REQ-03 (ข้อความ FR-06 ต้นฉบับไม่ครบ), REQ-04 (aggregation/threshold ของ FR-07 ยังไม่ยืนยัน), REQ-01/REQ-05 (ตัวเลขเกณฑ์ยังไม่อนุมัติจากภายนอก)
- Reviewer re-check result: Conditional — ยังไม่มี reviewer จริงมา re-check, self-check ประเมินว่า Conditional (ผ่านได้บางส่วน ยังมี Not Ready 2 ข้อ)

## AI Use Declaration

- ใช้ AI: Yes
- ใช้เพื่อ: วิเคราะห์ Five-check (ambiguous/incomplete/inconsistent/infeasible/not testable) และร่าง revised wording + Acceptance Criteria จากเอกสาร SE02 Final + บทที่3 + ผลงาน W01/W02
- Input ที่ให้/วิธีปกป้องข้อมูล: ให้เฉพาะข้อความ requirement จากเอกสารโครงงาน (SE02, บทที่3) ไม่มีข้อมูลส่วนบุคคลหรือข้อมูลลับของ Lanner News อยู่ใน prompt
- ข้อเสนอที่ใช้/แก้/ปฏิเสธ: ใช้โครง Five-check และ Acceptance Criteria ที่ AI ร่างเป็นฐาน แต่ตัวเลขเกณฑ์ (90%, 0.95, 95%) และ open question ทั้งหมดยังไม่ถือเป็น final ต้องให้เจ้าของงานตรวจ/ยืนยันก่อน — ไม่ปฏิเสธข้อเสนอใด แต่ flag เป็น Conditional/Not Ready แทนการเดาแล้วปิดเงียบ
- ตรวจสอบกับ SRS/owner อย่างไร: เทียบทุกข้อกับข้อความต้นฉบับใน SE02Finalversion.docx และบทที่3_200826.pdf โดยตรง ส่วนที่หาหลักฐานยืนยันไม่ได้ (REQ-03, REQ-04) ถูก flag เป็น Not Ready แทนการสมมติ
- Verification owner/date: ธนภัทร นุกูล / ยังไม่ตรวจสอบขั้นสุดท้าย — ต้องทำก่อน Week 04

ทีมยืนยันว่าไม่มี stakeholder decision, approval, test result, log หรือ screenshot ที่ AI/ทีมสร้างขึ้นโดยไม่ได้ดำเนินการจริง
