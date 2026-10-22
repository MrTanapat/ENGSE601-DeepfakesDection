# W02 Work — Project Quality Route Map

## Context

- Project/team: เว็บแอปตรวจจับ Deepfake (DeepfakesDection)
- Current SDLC status: Implement — Model/Backend (XceptionNet) เทรน+ทดสอบเบื้องต้นเสร็จแล้ว, Frontend ยังอยู่ HLD/Design (Mockup เท่านั้น)
- Milestone/sprint/date: ตาม Gantt Chart (SE02 §12.3) กำลังเข้าเดือน 4–5 (Testing) ณ 22 ส.ค. 69
- Critical requirement/feature/risk: NFR-02 (ความแม่นยำของโมเดล) + QR-01 (Model generalization risk จาก W01)
- Source/version: SE02 Final (IN-01) + บทที่3_200826.pdf (IN-03)
- Authors/reviewer: ธนภัทร นุกูล / ยังไม่มี peer reviewer

## Route Map — one critical slice

| Phase / Gate               | V&V question                                                                                     | Evidence + status                                                                                        | Decision / feedback                  | Owner / when                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| Requirements/SRS — Gate A  | NFR-02 ถูกต้อง ครบ ชัด และมี acceptance basis (Accuracy≥90%, AUC≥0.95 จาก MT-01/MT-02) พอหรือไม่ | NFR-02 ระบุใน SE02 §10.4 — Existing                                                                      | Pass                                 | ธนภัทร / เสร็จแล้ว                                   |
| HLD/Detail Design — Gate B | Design ส่วนใดรับผิดชอบ NFR-02 และพร้อมตรวจหรือไม่ (dataset/technique)                            | บทที่3 กำหนด XceptionNet + FF-C23 + Context Expansion 1.3x — Existing                                    | Ready                                | ธนภัทร / เสร็จแล้ว 20 ส.ค. 69                        |
| Implement/Build — Gate C   | Build จริงแสดง behavior ตาม design หรือไม่ (โมเดล implement ตรง spec)                            | Kaggle notebook + training logs — Existing (Backend); Frontend — Not Ready (mockup only)                 | Proceed (Backend) / Fix (Frontend)   | ธนภัทร / Backend เสร็จ, Frontend ต้องเร่งก่อนเดือน 5 |
| Test/Defect — Gate C       | Case ใดจะตอบ risk cross-dataset (deepfake นอก FF-C23)                                            | MT-01–MT-05 Existing บน FF-C23 (F1=0.9744, AUC=0.9927); cross-dataset — Not Executed; UAT-02 — Not Ready | Not Executed (รอทดสอบ cross-dataset) | ธนภัทร / ก่อน Week 04–05                             |
| Release/Portfolio — Gate D | Residual risk/evidence พอให้ตัดสินปล่อยใช้จริงกับ Lanner News หรือไม่                            | Planned — UAT sign-off, deployment log                                                                   | Not Accept (ยัง)                     | ธนภัทร / ตามแผนเดือน 5 (Gantt)                       |

## Feedback loop

| Trigger/finding                                          | ย้อนกลับไปแก้ artifact ใด                              | Evidence ที่ต้องอัปเดต             | Owner/when           |
| -------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------- | -------------------- |
| Cross-dataset test พบ accuracy ต่ำกว่าเกณฑ์ (นอก FF-C23) | Design (บทที่3 — พิจารณาขยาย dataset) / Model training | ผล MT ใหม่, บันทึกการเลือก dataset | ธนภัทร / ก่อน Gate D |

## Evidence gap and next action

| Gap / Not Ready item                                 | Why                                         | Next action                                     | Owner  | Target milestone      |
| ---------------------------------------------------- | ------------------------------------------- | ----------------------------------------------- | ------ | --------------------- |
| Cross-dataset evaluation (นอก FF-C23) — Not Executed | ยังไม่มี/ยังไม่ได้กำหนด test set นอก FF-C23 | หา/สร้าง test set นอก FF-C23 แล้วรัน evaluation | ธนภัทร | ก่อน Week 04–05       |
| Frontend implementation — Not Ready                  | ยัง implement ไม่เริ่ม (มีแค่ Mockup)       | เริ่ม implement Next.js จาก Figma               | ธนภัทร | ก่อนเดือน 5 (Testing) |

## Peer review and handoff

- Reviewer + date/commit: ไม่มี — self-check เท่านั้น (ทำคนเดียว)
- Revision made: —
- Requirement IDs ที่จะเข้า Week 03: NFR-02, FR-06, FR-07, NFR-09, FR-05
- AI Use Declaration: ใช้ Claude ช่วยร่างจาก W01 Quality Risk Cards (QR-01) + SE02 + บทที่3 — ต้องตรวจทานก่อนส่งจริง
