# W04-04 — Quality Gate A Decision

## Evidence reviewed

- SRS/Requirement version: SE02 Final §10.3–10.4 (IN-01), 2 มี.ค. 2569
- W03-OUT: `WEEKS/week-03/submission/` — tag `w03-submission-v1`, commit `d16048ea19a6e2b6a3fd4e5654716611ece18408`
- Review Log: `02-srs-review-log.md` commit [กรอกตอน commit จริง]
- RTM v1: `03-rtm-lite.csv` commit [กรอกตอน commit จริง]
- Reviewers/decision owner/date: ธนภัทร นุกูล (self-check) / 23 ส.ค. 69

## Decision

- [ ] `Ready`
- [x] `Conditional` — ไปต่อเฉพาะส่วนที่ระบุ พร้อม conditions, owner และ due
- [ ] `Not Ready`

## Evidence-based rationale

อ้าง Review Log (RV-01–RV-05) และ Requirement status table: FR-05 (RV-04) ผ่านครบ ไม่มี open issue — **Ready**. NFR-02 (RV-01) และ NFR-09 (RV-05) มี wording ที่วัดผลได้แล้ว แต่ตัวเลขเกณฑ์ (Accuracy≥90%/AUC≥0.95, ≥95% success rate) เป็นค่าที่ทีมเสนอเอง ยังไม่ผ่านการยืนยันจากอาจารย์/ผู้ว่าจ้าง — **Conditional**. FR-06 (RV-02) และ FR-07 (RV-03) ยังมี blocker ที่แก้ไม่ได้ด้วยตัวเอง (ข้อความต้นฉบับไม่ครบ, ไม่รู้ threshold จริง) และ FR-07 คือผลลัพธ์สุดท้ายที่ Lanner News ใช้ตัดสินใจโดยตรง — จึงยัง **Not Ready** ในระดับ requirement นั้น แต่ไม่ได้ block ทุกส่วนของ Phase 2 (FR-05/NFR-02/NFR-09 ไปต่อได้) ภาพรวมจึงตัดสินเป็น Gate A = **Conditional**

## Conditions / blockers / actions

| ID    | Condition or blocker                                                                                                        | Affected requirement / Phase 2 work            | Action                                                                 | Owner  | Due                           | Re-check evidence                       |
| ----- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- | ------ | ----------------------------- | --------------------------------------- |
| GA-01 | ข้อความ FR-06 ต้นฉบับไม่ครบ ต้องยืนยันจาก SE02Finalversion.docx จริง                                                        | FR-06 → W05 (Component/Unit Testing ส่วนโมเดล) | เปิดเอกสารต้นฉบับ ยืนยันข้อความเต็ม ปรับ revised wording ให้เป็น final | ธนภัทร | ก่อน Week 05                  | อัปเดต Review Log RV-02 + RTM row FR-06 |
| GA-02 | Aggregation method/threshold ของ FR-07 ยังไม่ยืนยันจาก implementation จริง                                                  | FR-07 → W06/W07 (Integration, System/UAT)      | เช็คโค้ด/ทีม implement จริง แล้วปรับ AC ให้ตรง threshold จริง          | ธนภัทร | ก่อน Week 04 (ช้าสุดก่อน W07) | อัปเดต Review Log RV-03 + RTM row FR-07 |
| GA-03 | เกณฑ์ตัวเลข Accuracy≥90%/AUC≥0.95 (NFR-02) และ ≥95% success rate (NFR-09) ยังไม่อนุมัติจากอาจารย์/ผู้ว่าจ้างอย่างเป็นทางการ | NFR-02, NFR-09 → W05, W08                      | นำเกณฑ์ไปขอ confirm กับอาจารย์/Lanner News อย่างเป็นทางการ             | ธนภัทร | ก่อน Week 05                  | บันทึกผลยืนยันใน Review Log             |

## Sign-off

- Requirement owner/representative: `Not Available` — ยังไม่มี stakeholder ภายนอกมา sign-off
- Reviewer: ธนภัทร นุกูล / 23 ส.ค. 69
- Team: ธนภัทร นุกูล / 23 ส.ค. 69

Sign-off นี้เป็นบันทึกการทบทวนในรายวิชา ไม่ใช่การอนุมัติจาก stakeholder จริง เนื่องจากยังไม่มีหลักฐานการอนุมัติจากภายนอก
