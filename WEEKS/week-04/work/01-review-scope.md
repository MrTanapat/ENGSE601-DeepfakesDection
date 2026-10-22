# W04-01 — Review Scope and Preparation

| Field                                     | Team record                                                                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Project/team                              | เว็บแอปตรวจจับ Deepfake (DeepfakesDection)                                                                                                 |
| SRS/Requirement source + version/commit   | SE02Finalversion.docx (IN-01) §10.3–10.4, SE02 Final 2 มี.ค. 2569                                                                               |
| Review date/session                       | 23 ส.ค. 69 (self-review session)                                                                                                                |
| Critical slice / requirement IDs (3–5)    | QR-01 (Model generalization risk) / NFR-02, FR-05, FR-06, FR-07, NFR-09                                                                         |
| Linked W01 risks / W02 route / W03 output | W01: QR-01 (Quality Risk Cards, `w01-submission-v1`) · W02: Route Map Gate A–D (`w02-submission-v1`) · W03: REQ-01–REQ-05 (`w03-submission-v1`) |
| Author/Requirement owner                  | ธนภัทร นุกูล                                                                                                                                    |
| Reviewer(s)                               | ไม่มี — self-check เท่านั้น (ทำคนเดียว)                                                                                                         |
| Recorder/facilitator                      | ธนภัทร นุกูล                                                                                                                                    |
| Out of scope                              | Requirement อื่นนอกเหนือจาก 5 ข้อที่เลือก (FR-01–04, FR-08–09, NFR-01, NFR-03–08); ไม่เขียน SRS ใหม่ทั้งเล่ม                                    |

## Sources available

| Artifact               | Path/URL + version                                    | Status    | How used in review                                           |
| ---------------------- | ----------------------------------------------------- | --------- | ------------------------------------------------------------ |
| Proposal               | SE02Finalversion.docx (IN-01)                         | Existing  | อ้างอิงข้อความ BR/FR/NFR ต้นฉบับทุก Finding                  |
| Requirement/SRS        | SE02 §10.3–10.4 (ฝังใน Proposal, ยังไม่แยกไฟล์เดี่ยว) | Existing  | ใช้เป็น source ของทุก Finding ใน Review Log                  |
| W03-OUT                | `WEEKS/week-03/submission/` (tag `w03-submission-v1`) | Existing  | ใช้เป็น input revised wording + Acceptance Criteria          |
| Glossary/business rule | ไม่มีไฟล์แยก                                          | Not Ready | ไม่ได้ใช้ในรอบนี้                                            |
| Design/interface notes | บทที่3_200826.pdf (IN-03)                             | Existing  | ใช้ยืนยันเทคนิค (RetinaFace, XceptionNet, Context Expansion) |
