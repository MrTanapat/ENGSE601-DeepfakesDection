# W01 Work — Quality Risk Cards (v1)

## Submission context

- Project/team: เว็บแอปพลิเคชันตรวจจับ Deepfake อัจฉริยะฯ — `DeepfakesDection_Team`
- Proposal/SRS source + version:
  - IN-01 Proposal — `INPUTS/proposal/SE02-Deepfakes-detection-Document-Edit_thanit_signed.pdf` (SE02 Final, 2 มี.ค. 2569) §6, §10.3–10.6, §12.3
  - IN-02 SRS — `INPUTS/requirements-srs/Software_Requirements_Specification.pdf` (FR-001–FR-010, NFR-001–NFR-005, ข้อจำกัด, สมมติฐาน)
  - IN-03 Design — `INPUTS/design/บทที่3_20-08-26.pdf` (บทที่ 3, 20 ส.ค. 2569) §3.4, §3.8, §3.10, §3.11
  - Stakeholder context — สัมภาษณ์กองบรรณาธิการ Lanner News (SE02 §4, §14.1) และ `PROJECT.md`
- Authors: ธนภัทร นุกูล (Primary Author)
- Peer reviewer: อาจารย์นริศ กำแพงแก้ว / เพื่อนต่างทีม — **รอทบทวน (Not Executed)**; รอบนี้มีเฉพาะ self-check ของผู้เขียน
- Review date/commit: 22 ต.ค. 2569 / [กรอก commit hash หลัง commit]
- Submission file: `WEEKS/week-01/submission/W01_DeepfakesDection_Team_Quality-Risk-Cards_v1.pdf` — ดู Revision note ท้ายไฟล์

> ระดับความสำคัญ (Priority) = Impact × Likelihood ประเมินโดยผู้เขียน (H/M/L) · สถานะหลักฐานใช้ `Existing` / `Planned` / `Not Ready` / `Not Executed` ตาม README

## Card summary

| ID    | Requirement / stakeholder ที่เกี่ยวข้อง                       | Quality concern                          | Priority      | Evidence ปัจจุบัน                          |
| ----- | ------------------------------------------------------------- | ---------------------------------------- | ------------- | ------------------------------------------ |
| QR-01 | BR-01, BR-04, NFR-02 / MT-01–MT-04 — กอง บก. Lanner News      | Functional correctness, Robustness       | H (I=H, L=M–H) | Existing (FF-C23) / Planned (นอก FF-C23)   |
| QR-02 | BR-05, NFR-01, SRS NFR-002, MT-05, FT-03/04                    | Performance (time behaviour), E2E flow   | H (I=H, L=H)   | Not Ready (ยังไม่มี build ที่เชื่อมกัน)    |
| QR-03 | BR-07, NFR-03, ตาราง 3.22–3.23, ST-01–ST-06, PDPA              | Security, Compliance (PDPA)              | H (I=H, L=M)   | Existing (design) / Not Executed (ST)      |
| QR-04 | BR-03, FR-07/FR-08, SRS FR-007–FR-009, UAT-02/03               | Functional correctness, Usability        | H (I=H, L=M)   | Not Ready (threshold/ความหมายคะแนน)        |
| QR-05 | IN-01 vs IN-02 vs IN-03 (FR/NFR ID, scope, Context Expansion) | Requirement consistency, Traceability    | H (I=H, L=H)   | Existing (ความขัดแย้ง) / Not Ready (decision) |

## Card QR-01 — โมเดลให้ผล "Real" กับคลิปปลอมที่ต่างจากข้อมูลเทรน

| Field           | Team record |
| --------------- | ----------- |
| Source          | SE02 §10.3 BR-01, BR-04; §10.4 NFR-02 · SRS ข้อจำกัด 1 (โมเดลอาจตรวจไม่ได้ทุกเทคนิค) + สมมติฐานข้อ 5 · บทที่3 §3.4.1 (FF++ C23, 6 เทคนิค), §3.4.3 (Video-level split), §3.11.3 MT-01–MT-04 |
| Situation       | กอง บก. Lanner News ได้รับคลิปจากแหล่งข่าวภาคประชาชนผ่าน LINE/Facebook ซึ่งถูกบีบอัดซ้ำ (SE02 §9) และอาจสร้างด้วยเทคนิคที่ไม่อยู่ใน FF++ ทั้ง 6 ประเภท |
| Risk statement  | **หาก** คลิป deepfake ที่บีบอัดหนักกว่า C23 หรือสร้างด้วยเทคนิคนอก FF++ ถูกอัปโหลด และโมเดลให้ผล "Real" (False Negative) **แล้ว** บก. อาจใช้ผลนี้ประกอบการเผยแพร่คลิปปลอม → สำนักข่าวเสียความน่าเชื่อถือ/เสี่ยงถูกฟ้อง (SE02 §6) และบุคคลในคลิปเสียชื่อเสียง |
| Quality concern | Functional correctness + Robustness ต่อคุณภาพอินพุต — เป็นฟังก์ชันหลักตาม BR-01 และค่าที่วัดได้ตอนนี้มาจาก distribution เดียวกับชุดเทรน จึงยังไม่ตอบว่าใช้กับคลิปจริงได้ |
| Impact          | H — ผลผิดชนิด False Negative ส่งตรงถึงการตัดสินใจเผยแพร่ข่าว · Likelihood M–H — SRS ยอมรับเองว่าโมเดลอาจตรวจเทคนิคใหม่ไม่ได้ |
| Verification    | (1) รัน MT-01–MT-04 บน Testing Set FF-C23 ที่แบ่งแบบ Video-level แยกจาก Validation (ผลที่มีตอนนี้เป็นของ Validation set และมีวิดีโอ Real เพียง 200 เทียบ Fake 3,000) (2) ตรวจว่า preprocessing ตอน inference ใน Backend ตรงกับตอนเทรน: 1 fps, RetinaFace ≥ 64×64, อัตรา Context Expansion, 299×299, Normalize 0.5 (เอกสารยังขัดกันเรื่องอัตราขยาย — ดู QR-05) |
| Validation      | (1) ทดสอบนอกเงื่อนไขเทรน: นำคลิปใน Testing Set ไปบีบอัดซ้ำแบบที่ LINE/Facebook ทำ และใช้ชุดข้อมูลภายนอกอย่างน้อย 1 ชุด เพื่อดูว่า Recall คลาส Fake ลดลงเท่าไร (2) UAT-02/UAT-03 กับกอง บก. Lanner News โดยใช้คลิปตัวอย่างที่ บก. คัดมาเอง |
| Evidence status | **Existing** — `results/checkpoints_phase1/final_metrics.json` (Validation set): video-level Acc 0.959, F1 0.978, AUC 0.991; frame-level AUC 0.982 · ค่า F1 0.9744/AUC 0.9927 ใน `PROJECT.md` ยังหาไฟล์ต้นทางไม่พบ · **Planned** — C40 (มี `evaluate_c40.py` แต่ยังไม่พบผลรัน) · **Planned** — UAT-02/03 |
| Owner/next      | ธนภัทร — ลงทะเบียน notebook/log เป็นหลักฐาน และกำหนดชุดทดสอบนอก FF-C23 ก่อน W05 |

## Card QR-02 — เส้นทางใช้งานจริง (Frontend → Backend → Model) ยังไม่ถูกเชื่อม จึงยังไม่รู้ว่าทันเวลาข่าว

| Field           | Team record |
| --------------- | ----------- |
| Source          | SE02 BR-05, NFR-01 (≤ 100 MB "ภายในเวลาที่เหมาะสม"), §12.3 Gantt (พัฒนาเดือน 4–5, ทดสอบเดือน 5–6) · SRS NFR-002 (ภาพ ≤ 30 วินาที, วิดีโอ ≤ 5 นาที) · บทที่3 §3.3 (Docker/Uvicorn), MT-05 (≤ 500 ms/ภาพ), FT-03, FT-04 (วิดีโอ ≤ 59 วินาที) · `PROJECT.md` (Frontend ยังเป็น Mockup) |
| Situation       | ผู้สื่อข่าวอัปโหลดวิดีโอข่าวใกล้ 100 MB ช่วงข่าวด่วน บนเซิร์ฟเวอร์งบ Cloud ~1,000 บาท ขณะที่ Backend ยังว่าง (`backend/main.py` 0 byte) และโมเดลเคยรันบน Kaggle GPU เท่านั้น |
| Risk statement  | **หาก** การเชื่อม Frontend–Backend–Model เริ่มช้า, inference บนเซิร์ฟเวอร์จริงช้ากว่าบน Kaggle GPU และ Frontend ตัด request ที่ 30 วินาที (`api.ts` timeout) **แล้ว** เวลา upload→result ของวิดีโออาจเกิน 5 นาทีหรือ timeout โดยไม่มีใครพบจนถึง UAT → บก. เลิกใช้เพราะช้ากว่าตรวจด้วยตา (ขัด BR-05) และ UAT ต้องเลื่อนหรือทำบน Mockup |
| Quality concern | Performance efficiency (time behaviour) + ความครบของ end-to-end flow — SRS มีเกณฑ์เวลาชัดเจน แต่แผนทดสอบบทที่3 มีเพียง MT-05 (ต่อภาพ) ไม่มี case วัดเวลา end-to-end |
| Impact          | H — กระทบการนำไปใช้จริงและกำหนดการ UAT · Likelihood H — ยังไม่มี build ที่เชื่อมกัน |
| Verification    | (1) เพิ่ม test case เวลา end-to-end: ภาพ ≤ 30 วินาที, วิดีโอ 100 MB ≤ 5 นาที บน Docker image ที่จะ deploy (2) วัด MT-05 บน CPU/GPU ของเซิร์ฟเวอร์จริง ไม่ใช่ Kaggle (3) รัน FT-03, FT-04, FT-06, FT-07 ผ่าน browser หลังเชื่อมระบบ (4) ทดสอบ request ที่นานกว่า 30 วินาทีกับ timeout ใน `api.ts` |
| Validation      | ถาม บก. Lanner News ว่ารอได้นานเท่าไรในข่าวด่วน และวิดีโอข่าวทั่วไปยาว/ใหญ่เท่าไร (FT-04 ทดสอบแค่ ≤ 59 วินาที แต่ NFR-01 รับถึง 100 MB) แล้วยืนยันใน UAT-03 |
| Evidence status | **Existing** — Frontend หน้า detect + `UploadZone` (ENGSE212 commit `441d891`) · **Not Ready** — Backend API (`backend/main.py` ว่าง) · **Planned** — log เวลา end-to-end |
| Owner/next      | ธนภัทร — ทำ upload→result ให้รันได้ 1 เส้นทาง (ภาพ) แล้ววัดเวลา ก่อน W06 Integration Test Design |

## Card QR-03 — ไฟล์/ข้อมูลผู้ใช้รั่ว หรือถูกเก็บนานเกินนโยบาย PDPA

| Field           | Team record |
| --------------- | ----------- |
| Source          | SE02 BR-07, NFR-03 · บทที่3 §3.8 ตารางที่ 3.22 (R2: Member 30 วัน, Guest 24 ชม.), §3.10 ตารางที่ 3.23 (RBAC, Magic Bytes, Rate limit 20 ครั้ง/นาที, Pre-signed URL), ย่อหน้า PDPA, §3.11.5 ST-01–ST-06 |
| Situation       | Guest อัปโหลดได้โดยไม่ login; คลิปที่ บก. ส่งตรวจอาจเป็นฟุตเทจข่าวที่ยังไม่เผยแพร่และมีใบหน้าบุคคลจริง |
| Risk statement  | **หาก** lifecycle rule ของ R2 ไม่ถูกตั้งจริง, Pre-signed URL มีอายุนานหรือถูกส่งต่อ, endpoint ไม่ตรวจ role หรือ token ถูกขโมยผ่าน XSS (Frontend เก็บ token ใน localStorage ขณะที่ design กำหนด HttpOnly Cookie) **แล้ว** คลิป/ประวัติของ Member ถูกผู้อื่นเข้าถึงหรือค้างเกิน 30 วัน/24 ชม. → ขัด PDPA และแหล่งข่าวของ Lanner News รั่ว; และหากไม่ตรวจ Magic Bytes ไฟล์อันตรายที่เปลี่ยนนามสกุลจะเข้าสู่ Backend |
| Quality concern | Security (Confidentiality, Integrity, Accountability) + การปฏิบัติตาม PDPA — ระบบเปิดให้ผู้ไม่ยืนยันตัวตนอัปโหลด และเก็บไฟล์บน cloud |
| Impact          | H — มีผลทางกฎหมายและความเชื่อใจของแหล่งข่าว · Likelihood M — มี design ครบ แต่ยังไม่ implement/ทดสอบ |
| Verification    | (1) รัน ST-01–ST-05 และ ST-06 (OWASP Top 10:2025) (2) ตรวจ config lifecycle ของ R2 ทั้ง 3 path ในตารางที่ 3.22 และอายุ Pre-signed URL (3) code review การตรวจ role ทุก endpoint ของ Member/Admin (4) เพิ่ม test case การลบไฟล์ตาม retention ซึ่งยังไม่มีในแผนทดสอบ (5) ตรวจที่เก็บ token ให้ตรงตารางที่ 3.23 |
| Validation      | ยืนยันกับ Lanner News ว่าการเก็บคลิปต้นฉบับ 30 วันบน cloud ยอมรับได้สำหรับฟุตเทจที่ยังไม่เผยแพร่หรือไม่ และต้องแสดงข้อความแจ้งความเป็นส่วนตัวก่อนอัปโหลดหรือไม่ |
| Evidence status | **Existing** — Security design (ตารางที่ 3.23–3.24) · **Existing** — พบความต่างจาก design: `tokenStorage` ใน `frontend/src/services/api.ts` ใช้ localStorage · **Not Executed** — ST-01–ST-06 (ยังไม่มี Backend ให้รัน) · **Planned** — test case retention |
| Owner/next      | ธนภัทร — เพิ่ม retention test case ในชุด W05/W11 และตั้ง lifecycle rule พร้อมหลักฐาน config |

## Card QR-04 — ผล Real/Fake และคะแนนถูกตีความผิด เพราะ threshold และความหมายของคะแนนยังไม่ถูกกำหนด

| Field           | Team record |
| --------------- | ----------- |
| Source          | SE02 BR-03, FR-07, FR-08 · SRS FR-007–FR-009 (Risk Score 0–100%, Low/Medium/High) · บทที่3 §3.11.4 (ป้าย REAL/FAKE + Confidence %), Admin Dashboard (ช่วงก้ำกึ่ง "เช่น 40–60%" รอ Admin ยืนยัน), UAT-02/UAT-03 · W04 GA-02 |
| Situation       | บก. อัปโหลดวิดีโอที่ถูกปลอมเพียงบางช่วง (เช่น 10 วินาทีจาก 2 นาที) หรือได้คะแนนก้ำกึ่ง |
| Risk statement  | **หาก** ระบบเฉลี่ยคะแนนทุกเฟรมแล้วตัดสินด้วย threshold ที่ไม่ได้ระบุไว้ **แล้ว** ช่วงที่ปลอมอาจถูกเจือจางจนได้ "REAL"; หรือคะแนน 55% แสดงเป็นป้าย FAKE สีแดงโดยไม่บอกว่าก้ำกึ่ง และ "Confidence 80%" ถูกอ่านเป็น "ปลอม 80%" → บก. ตัดสินใจผิดทั้งสองทาง (ปล่อยคลิปปลอม หรือทิ้งคลิปจริงที่เป็นข่าวสำคัญ) |
| Quality concern | Functional correctness + Usability (ความเข้าใจผลลัพธ์, การป้องกันความผิดพลาดของผู้ใช้) — BR-03 กำหนดให้ผู้ใช้ที่ไม่มีความรู้ AI ตัดสินใจได้เร็วจากผลนี้ |
| Impact          | H — เป็นผลลัพธ์สุดท้ายที่ผู้ใช้เห็น · Likelihood M — ไม่มีเอกสาร requirement ใดกำหนด threshold, ช่วง Low/Medium/High หรือวิธีรวมคะแนน; ผลเทรนมี best threshold ระดับเฟรม 0.826 แต่ผลระดับวิดีโอใช้ 0.5 |
| Verification    | (1) ตรวจเอกสารให้มีนิยามเดียว: ชื่อคะแนน (SRS ใช้ Risk Score, บทที่3 ใช้ Confidence Score), วิธีรวมคะแนนเฟรม, threshold Real/Fake, ช่วง Low/Medium/High, ช่วงก้ำกึ่ง (2) unit test การรวมคะแนนด้วยลำดับคะแนนที่สร้างขึ้น: ทุกเฟรมสูง/ต่ำ, ปลอมบางช่วง, ค่าเท่ากับ threshold พอดี |
| Validation      | UAT-02/UAT-03 ให้ บก. อ่านผลจากหน้าจอจริงแล้วอธิบายด้วยคำพูดตัวเองว่าเข้าใจว่าอะไร เทียบกับความหมายที่ทีมตั้งใจ และถามว่าต้องการเห็น Timeline ช่วงที่น่าสงสัยประกอบหรือไม่ |
| Evidence status | **Existing** — UI design §3.11.4 · **Not Ready** — threshold/aggregation/ช่วงความเสี่ยง (W04 GA-02 ยังเปิด) · **Planned** — UAT-02/03 |
| Owner/next      | ธนภัทร — ตรวจโค้ด inference ที่มีอยู่ว่าใช้วิธีรวมคะแนน/threshold ใด แล้วเขียนลง SRS version ใหม่ ก่อน W05 |

## Card QR-05 — Requirement baseline ไม่ตรงกันระหว่าง SRS, Proposal และ Design ทำให้ทดสอบผิดเป้า

| Field           | Team record |
| --------------- | ----------- |
| Source          | IN-02 SRS (FR-001–FR-010; ข้อจำกัด 4: "User เดียว ไม่มี Admin/Editor", ไม่เน้นเก็บประวัติ) · IN-01 SE02 §10.4 ตารางที่ 2 (FR-01 Login, FR-09 ประวัติ, FR-10 RBAC) vs §10.6.2 ตารางที่ 7 (FR-01–FR-11 เลขไม่ตรงตารางที่ 2; FR-02 รับเฉพาะวิดีโอ) · IN-03 บทที่3 (Guest/Member/Admin; §3.4.5 ขยาย 35% ทุกทิศ vs SRS FR-005 "1.3 เท่า") |
| Situation       | ทีมใช้ RTM (W04) และกำลังจะเขียน test case W05–W08 โดยอ้าง FR/NFR ID |
| Risk statement  | **หาก** ไม่ประกาศ baseline เดียว **แล้ว** test case จะอ้าง ID ที่มีความหมายต่างกันในแต่ละเอกสาร (เช่น RBAC เป็น FR-10 หรือ FR-11; SRS ใช้ FR-001) → ทดสอบฟีเจอร์ที่ SRS บอกว่าไม่ทำ (Login/History/Admin) หรือพลาดฟีเจอร์ที่ทำ (อัปโหลดรูปภาพ) → ตัดสิน pass/fail ไม่ได้ และ preprocessing ตอนเทรนกับตอนใช้งานอาจไม่ตรงกัน (1.3 เท่า vs +35%) |
| Quality concern | Requirement consistency + Traceability (ส่งผลต่อ Functional completeness) — ทุกการทดสอบใน Phase 2 ต้อง trace กลับไปที่ requirement ที่ตกลงแล้ว |
| Impact          | H — กระทบ W05–W08 ทั้งหมด · Likelihood H — ความขัดแย้งมีอยู่จริงในเอกสารปัจจุบัน |
| Verification    | (1) cross-document review: ทำตาราง mapping ID ของ SRS ↔ SE02 ตารางที่ 2 ↔ ตารางที่ 7 ↔ บทที่3 แล้วบันทึกทุกจุดขัดแย้งใน decision log (2) ตรวจ notebook ว่าเทรนด้วยอัตราขยายเท่าใดจริง |
| Validation      | ยืนยันกับอาจารย์ที่ปรึกษา (และ Lanner News หากจำเป็น) ว่ารุ่นที่พัฒนาต้องมี Login/Member/Admin/History หรือไม่ แล้วออก SRS version ใหม่และลงทะเบียนใน `INPUTS/input-register.md` |
| Evidence status | **Existing** — เอกสาร IN-01/02/03 ที่ขัดกัน · **Planned** — ตาราง mapping + SRS version ใหม่ · **Not Ready** — decision เรื่อง scope (decision owner: ธนภัทร + อ.นริศ) |
| Owner/next      | ธนภัทร — ทำตาราง mapping และนัดยืนยัน scope กับ อ.นริศ ก่อนเริ่ม W05 |

## Peer check and revision

| Check                                        | Result / comment | Revision made / open action |
| -------------------------------------------- | ---------------- | --------------------------- |
| ทุก card trace ไปยัง source จริงได้          | Self-check: ทุกใบระบุ section/ตาราง/ID ใน IN-01/02/03 | รอ peer reviewer ตรวจซ้ำ (Not Executed) |
| risk statement มี event/condition และ impact | Self-check: เขียนรูปแบบ "หาก…แล้ว…" ทุกใบ และระบุผู้ได้รับผลกระทบ | รอ peer reviewer |
| V&V action ตอบ risk ไม่ใช่คำกว้าง            | Self-check: Verification อ้าง test ID/เอกสาร; Validation อ้าง stakeholder/UAT | รอ peer reviewer |
| evidence status เป็นความจริง                 | Self-check: ไม่มีผลทดสอบใหม่ในงานนี้; ตัวเลขโมเดลอ้างจาก `final_metrics.json` และระบุว่าเป็น Validation set | หาไฟล์ต้นทางของ F1 0.9744/AUC 0.9927 หรือแก้ `PROJECT.md` |

## Team conclusion

- Critical risk/feature ที่เลือกไป Week 02: **QR-01** (ตรงกับ W02 Route Map) — กระทบ stakeholder โดยตรงที่สุดและเป็นฟังก์ชันหลักของระบบ
- Risk ที่ต้องปิดก่อน Phase 2: **QR-05** (baseline) และ **QR-04** (threshold — สัมพันธ์กับ W04 GA-02)
- พบระหว่างจัดทำ: ข้อความเต็มของ FR-06 อยู่ใน SE02 §10.4 ตารางที่ 2 ("ระบบต้องวิเคราะห์ภาพใบหน้าด้วยโมเดล Deep Learning (XceptionNet + Context Expansion)") → ใช้ปิด W04 GA-01 ได้
- สิ่งที่ยังไม่รู้และ owner: ผลนอก FF-C23, เวลา end-to-end บนเซิร์ฟเวอร์จริง, threshold/aggregation จริง, scope Login/Admin — ธนภัทร

## AI Use Declaration

| รายการ | บันทึก |
|---|---|
| Week / artifact | W01 / Quality Risk Cards v1 |
| ใช้ AI หรือไม่ | Yes |
| เครื่องมือ/รุ่นเท่าที่ทราบ | Claude (Anthropic), claude-opus-5-5 |
| ใช้เพื่อ | อ่าน IN-01/02/03 และไฟล์ W01–W04 ใน repo, เสนอ risk/V&V action, ร่างข้อความ cards และจัดรูปแบบ PDF |
| Input ที่ให้ AI | IN-01 Proposal, IN-02 SRS, IN-03 บทที่3, `PROJECT.md`, `TEAM.md`, ไฟล์ work W01–W04, โค้ด ENGSE212 (commit `441d891`) และ `results/checkpoints_phase1/final_metrics.json` |
| การปกป้องข้อมูล | ไม่ส่ง dataset ที่ห้ามเผยแพร่; ไม่ใส่ข้อมูลติดต่อบรรณาธิการ Lanner News ในงานส่ง |
| ข้อเสนอที่ Accepted | รับทั้ง 5 cards ตามที่ร่าง |
| ข้อเสนอที่ Modified | — |
| ข้อเสนอที่ Rejected | — |
| วิธีตรวจสอบกับ artifact/owner จริง | เทียบ Source ทุกใบกับ IN-01 §10.3–10.6, IN-02, IN-03 §3.4/3.8/3.10/3.11 |
| ผู้รับผิดชอบการตรวจ | ธนภัทร นุกูล (AI Verification Owner) |
| วันที่ตรวจ | 22 ต.ค. 2569 |

คำยืนยัน: ทีมไม่ได้ใช้ AI สร้างผลทดสอบ, log, screenshot, approval, stakeholder decision หรือหลักฐานที่ไม่ได้ดำเนินการจริง

## Revision note (ร่างแรก → ฉบับส่ง v1)

- ร่างแรก (commit `c16572d`, 21 ส.ค. 69): 3 cards แบบย่อ, ยังไม่มี PDF ใน `submission/`
- ฉบับส่ง v1 (22 ต.ค. 69): เพิ่มเป็น 5 cards, อ้าง section/ตาราง/test ID จริงทุกใบ, แยก Verification/Validation ชัดขึ้น
  - ร่าง QR-01 → QR-01 (คงเดิม ขยาย V&V และ evidence)
  - ร่าง QR-02 (schedule) → QR-02 (เปลี่ยนเป็น product risk ด้านเวลาประมวลผล end-to-end)
  - ร่าง QR-03 (security) → QR-03 (ระบุกลไก/ST ID และ retention)
  - ใหม่: QR-04 (threshold/การตีความผล), QR-05 (baseline ไม่ตรงกัน)
