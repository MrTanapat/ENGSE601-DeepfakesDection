# W03 Work — Critical Requirement Review

## Review scope

- Project/team: เว็บแอปตรวจจับ Deepfake (DeepfakesDection_Team)
- SRS/Requirement artifact + version/commit: SE02Finalversion.docx (IN-01) §10.3–10.4, SE02 Final 2 มี.ค. 2569 — commit: [กรอกตอน commit จริง]
- Critical slice / linked W01 risk / W02 route: QR-01 — Model generalization risk (W01) / Route Map Gate A–D (W02)
- Authors: ธนภัทร นุกูล
- Decision owner(s): ธนภัทร นุกูล (ทำคนเดียว)

---

## Requirement Record — REQ-01

### A. Source and risk

| Field                   | Record                                                          |
| ----------------------- | --------------------------------------------------------------- |
| Original Requirement ID | NFR-02                                                          |
| Original text           | "โมเดลตรวจจับต้องมีความแม่นยำในระดับที่เหมาะสมต่อการใช้งานจริง" |
| Source/version/location | SE02 Final §10.4 (IN-01)                                        |
| Linked risk/stakeholder | QR-01 (W01) / Lanner News                                       |

### B. Lightweight review

| Check / issue type    | Pass / Finding | Evidence, question or counterexample                     |
| --------------------- | -------------- | -------------------------------------------------------- |
| Clear / unambiguous   | Fail           | "ระดับที่เหมาะสม" ไม่มีตัวเลข/metric ระบุ                |
| Complete              | Fail           | ไม่ระบุว่าใช้ metric ใดวัด (accuracy? AUC? F1?)          |
| Consistent            | Pass           | ไม่ขัดกับ requirement อื่น                               |
| Feasible              | Pass           | มีผลทดสอบเบื้องต้นแล้ว (F1=0.9744, AUC=0.9927 บน FF-C23) |
| Testable / observable | Fail           | ไม่มีเกณฑ์ผ่าน–ไม่ผ่านชัดเจนให้ตัดสิน                    |

### C. Revision and open decision

- Revised wording: **เมื่อระบบประมวลผลวิดีโอผ่านโมเดล XceptionNet ระบบต้องให้ผลลัพธ์ Real/Fake ที่มี Accuracy ≥ 90% และ AUC ≥ 0.95 เมื่อวัดบนชุดทดสอบ FaceForensics++ C23**
- Assumption ที่ยังไม่ใช่ decision: เกณฑ์ 90%/0.95 อ้างจากค่าที่ทีมตั้งเอง (MT-01/MT-02) ยังไม่ผ่านอนุมัติจากอาจารย์/ผู้ว่าจ้างอย่างเป็นทางการ
- Open question: เกณฑ์นี้ครอบคลุม cross-dataset (นอก FF-C23) ด้วยหรือไม่
- Decision owner + due/decision point: ธนภัทร นุกูล / ก่อน Week 04
- Status: Conditional

### D. Acceptance Criteria

| AC ID | Context/Input/State           | Event/Rule                 | Observable expected result                | Type/risk covered |
| ----- | ----------------------------- | -------------------------- | ----------------------------------------- | ----------------- |
| AC-01 | รันชุดทดสอบ FF-C23            | ประมวลผลผ่านโมเดล          | Accuracy ที่วัดได้ ≥ 90%                  | Normal            |
| AC-02 | รันชุดทดสอบ FF-C23 เดียวกัน   | คำนวณ AUC                  | AUC ที่วัดได้ ≥ 0.95                      | Normal            |
| AC-03 | ทดสอบด้วย deepfake นอก FF-C23 | รันประเมินผล cross-dataset | ต้องรายงานค่าจริงแม้ต่ำกว่าเกณฑ์ ห้ามซ่อน | Negative/Boundary |

### E. Planned evidence

- Planned test level: Component (Model test)
- Planned evidence: ผล MT-01, MT-02, MT-03 (รวม cross-dataset)
- Current status: Existing (บน FF-C23) / **Not Executed** (cross-dataset)
- Owner/next action: ธนภัทร / รัน cross-dataset ก่อน Week 04–05

---

## Requirement Record — REQ-02

### A. Source and risk

| Field                   | Record                                      |
| ----------------------- | ------------------------------------------- |
| Original Requirement ID | FR-05                                       |
| Original text           | "ระบบต้องตรวจจับใบหน้าในแต่ละเฟรมของวิดีโอ" |
| Source/version/location | SE02 Final §10.3, UC-04 (IN-01)             |
| Linked risk/stakeholder | QR-01 (W01)                                 |

### B. Lightweight review

| Check / issue type    | Pass / Finding | Evidence, question or counterexample          |
| --------------------- | -------------- | --------------------------------------------- |
| Clear / unambiguous   | Fail           | ไม่ระบุวิธี/เครื่องมือตรวจจับ                 |
| Complete              | Fail           | ไม่ระบุกรณีมีหลายใบหน้า หรือไม่มีใบหน้าในเฟรม |
| Consistent            | Pass           | —                                             |
| Feasible              | Pass           | มีเทคนิคจริงตามบทที่3 (RetinaFace)            |
| Testable / observable | Conditional    | ทดสอบได้ถ้าระบุ edge case ชัด                 |

### C. Revision and open decision

- Revised wording: **เมื่อระบบแยกเฟรมจากวิดีโอเสร็จแล้ว (FR-04) ระบบต้องใช้ RetinaFace ตรวจจับตำแหน่งใบหน้าทุกใบหน้าที่ปรากฏในแต่ละเฟรม แล้วส่งต่อไปยังขั้นตอนวิเคราะห์ (FR-06); เฟรมที่ไม่พบใบหน้าให้ข้ามโดยไม่เกิด error**
- Assumption ที่ยังไม่ใช่ decision: ไม่มี
- Open question: ไม่มี
- Decision owner + due/decision point: ไม่มี
- Status: Ready

### D. Acceptance Criteria

| AC ID | Context/Input/State    | Event/Rule             | Observable expected result     | Type/risk covered |
| ----- | ---------------------- | ---------------------- | ------------------------------ | ----------------- |
| AC-01 | เฟรมมี 1 ใบหน้าชัดเจน  | ตรวจจับด้วย RetinaFace | ต้อง crop ใบหน้าได้ถูกต้อง     | Normal            |
| AC-02 | เฟรมมีมากกว่า 1 ใบหน้า | ตรวจจับ                | ต้องพบและประมวลผลครบทุกใบหน้า  | Negative/Boundary |
| AC-03 | เฟรมไม่มีใบหน้า        | ตรวจจับ                | ต้องข้ามโดยไม่ error/ไม่ crash | Negative/Boundary |

### E. Planned evidence

- Planned test level: Component
- Planned evidence: unit test RetinaFace detection บนชุดภาพตัวอย่าง
- Current status: Not Executed
- Owner/next action: ธนภัทร / ก่อน Week 05 (Component Test Case Set)

---

## Requirement Record — REQ-03

### A. Source and risk

| Field                   | Record                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Original Requirement ID | FR-06                                                                                                                             |
| Original text           | "ระบบต้องวิเคราะห์ภาพใบหน้าด้วยโมเดล Deep Learning (XceptionNet + …)" — _ข้อความต้นฉบับตัดไม่ครบ (มี "..." ค้างอยู่ในเอกสารจริง)_ |
| Source/version/location | SE02 Final §10.3, UC-04 (IN-01)                                                                                                   |
| Linked risk/stakeholder | QR-01 (W01)                                                                                                                       |

### B. Lightweight review

| Check / issue type    | Pass / Finding | Evidence, question or counterexample  |
| --------------------- | -------------- | ------------------------------------- |
| Clear / unambiguous   | Fail           | ข้อความต้นฉบับไม่ครบ ตัดกลางประโยค    |
| Complete              | Fail           | ไม่ระบุ preprocessing ก่อนเข้าโมเดล   |
| Consistent            | Unknown        | ต้องเทียบกับบทที่3 เพิ่มเติม          |
| Feasible              | Pass           | ตามบทที่3 มีเทคนิคจริงรองรับ          |
| Testable / observable | Fail           | ยังตัดสินไม่ได้จนกว่าจะรู้ข้อความเต็ม |

### C. Revision and open decision

- Revised wording (ร่างชั่วคราว — ยังไม่ยืนยัน): เมื่อได้ภาพใบหน้าที่ crop แล้ว ระบบต้องขยายขอบเขตภาพด้วย Context Expansion (1.3x) แล้วส่งเข้าโมเดล XceptionNet เพื่อคำนวณ probability score (0–1) ต่อเฟรม
- Assumption ที่ยังไม่ใช่ decision: Context Expansion เป็นส่วนหนึ่งของ FR-06 จริง (อ้างจากบทที่3 ไม่ใช่ SE02 โดยตรง)
- Open question: ข้อความเต็มของ FR-06 ในเอกสารต้นฉบับคืออะไร — ต้องกลับไปเปิด SE02Finalversion.docx ตัวจริงเพื่อยืนยัน
- Decision owner + due/decision point: ธนภัทร นุกูล / ก่อน Week 04
- Status: **Not Ready**

### D. Acceptance Criteria

| AC ID | Context/Input/State     | Event/Rule   | Observable expected result        | Type/risk covered |
| ----- | ----------------------- | ------------ | --------------------------------- | ----------------- |
| AC-01 | เฟรมมีใบหน้าชัดเจน      | ส่งเข้าโมเดล | ต้อง output probability score 0–1 | Normal            |
| AC-02 | ภาพใบหน้าคุณภาพต่ำ/เบลอ | ส่งเข้าโมเดล | ต้องคำนวณผลได้โดยไม่ error        | Negative/Boundary |

### E. Planned evidence

- Planned test level: Component
- Planned evidence: unit test model inference
- Current status: Not Ready (รอยืนยันข้อความ requirement เต็มก่อน)
- Owner/next action: ธนภัทร / ยืนยันข้อความต้นฉบับก่อน Week 04

---

## Optional REQ-04 / REQ-05

เพิ่มสองข้อนี้เพราะ QR-01 กระทบ core pipeline ทั้งสาย และเวลาที่เหลือจำกัด

### REQ-04

**A.** Original ID: FR-07 — "ระบบต้องสรุปผลรวมของเฟรมทั้งหมดเพื่อแสดงผลเป็นวิดีโอจริงหรือ Deepfake" (SE02 §10.3, UC-04) — Linked risk: QR-01, Lanner News

**B.** Clear: Fail (ไม่ระบุ aggregation method/threshold) · Complete: Fail · Consistent: Pass · Feasible: Pass · Testable: Fail

**C.** Revised wording (ร่าง — ยังไม่ยืนยัน): เมื่อประมวลผลทุกเฟรมที่ตรวจพบใบหน้าเสร็จ ระบบต้องคำนวณค่าเฉลี่ยของ probability score ทุกเฟรม แล้วตัดสินเป็น "Fake" หากค่าเฉลี่ย ≥ [ยืนยัน threshold จริง] มิฉะนั้นเป็น "Real" — Open question: aggregation method และ threshold จริงคืออะไร — Owner/due: ธนภัทร / ก่อน Week 04 — Status: **Not Ready**

**D.** AC-01 (Normal): วิดีโอ ground truth=Fake → ต้องได้ผลลัพธ์ "Fake" · AC-02 (Normal): วิดีโอ ground truth=Real → ต้องได้ผลลัพธ์ "Real" · AC-03 (Negative/Boundary): ค่าเฉลี่ยใกล้ threshold → ต้องแสดงระดับความเชื่อมั่นประกอบ ไม่ฟันธงลอยๆ

**E.** Test level: System/UAT · Evidence: UAT-02 · Status: Not Ready · Owner: ธนภัทร / ก่อน Week 04

### REQ-05

**A.** Original ID: NFR-09 — "ระบบต้องทำงานได้อย่างถูกต้องโดยไม่เกิดข้อผิดพลาดบ่อยครั้ง" (SE02 §10.4) — Linked risk: QR-01 (โดยอ้อม — reliability)

**B.** Clear: Fail · Complete: Fail · Consistent: Fail (อาจซ้อนทับกับ NFR-05 โดยไม่แยกขอบเขต) · Feasible: Pass · Testable: Fail

**C.** Revised wording: ระบบต้องประมวลผล request การตรวจจับ (upload→result) สำเร็จโดยไม่เกิด error ระดับระบบ (5xx/crash) อย่างน้อย 95% ของ request ที่เข้าเงื่อนไขไฟล์ถูกต้อง (≤100MB ตาม NFR-01) — Assumption: 95% เป็นตัวเลขที่ทีมเสนอเอง — Open question: เกณฑ์ 95% เหมาะสมไหม ต้องยืนยัน — Owner/due: ธนภัทร / ก่อน Week 04 — Status: Conditional

**D.** AC-01 (Normal): upload วิดีโอถูกเงื่อนไข 100 ครั้ง → error ไม่เกิน 5 ครั้ง · AC-02 (Negative/Boundary): upload ไฟล์ผิดเงื่อนไข → ต้องตอบ error message ชัดเจน ไม่ crash

**E.** Test level: System · Evidence: load/error-rate test log · Status: Not Executed · Owner: ธนภัทร / ก่อน Week 08

---

## Handoff summary for Week 04

| Requirement ID | Revision status | Acceptance basis ready? | Open decision/blocker                    | Owner/due    | Candidate test level |
| -------------- | --------------- | ----------------------- | ---------------------------------------- | ------------ | -------------------- |
| NFR-02         | Revised         | Conditional             | ยืนยัน scope cross-dataset               | ธนภัทร / W04 | Component (Model)    |
| FR-05          | Revised         | Yes                     | —                                        | ธนภัทร       | Component            |
| FR-06          | Revised (draft) | No                      | ยืนยันข้อความเต็มจาก SE02 ต้นฉบับ        | ธนภัทร / W04 | Component            |
| FR-07          | Revised (draft) | No                      | ยืนยัน aggregation method/threshold จริง | ธนภัทร / W04 | System/UAT           |
| NFR-09         | Revised         | Conditional             | ยืนยันเกณฑ์ 95%                          | ธนภัทร / W04 | System               |
