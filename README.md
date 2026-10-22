# ENGSE601 · Team V&V Evidence Repository · DeepfakesDection

> repo หลักฐานการทวนสอบและการตรวจสอบ (V&V) ของรายวิชา ENGSE601 ที่เชื่อมกับโครงงาน ENGSE212
> **หน้าส่งงานหลัก: [SUBMISSIONS.md](SUBMISSIONS.md)** · ส่งผ่าน Release `engse601-submit` ภายในศุกร์ 23 ต.ค. 2569 เวลา 23:59

| รายการ | ข้อมูล |
|---|---|
| ชื่อทีม (`TeamName`) | DeepfakesDection |
| สมาชิก | ธนภัทร นุกูล · GitHub `MrTanapat` (ทีม 1 คน) · ดู [TEAM.md](TEAM.md) |
| โครงงาน ENGSE212 | เว็บแอปพลิเคชันตรวจจับ Deepfake อัจฉริยะเพื่อความมั่นคงปลอดภัยสารสนเทศ (กรณีศึกษา สำนักข่าว Lanner News) |
| repo โครงงาน | [MrTanapat/Deepfakes-Detections-Xceptionnet](https://github.com/MrTanapat/Deepfakes-Detections-Xceptionnet) · commit ที่ใช้ทดสอบ `441d891` |
| feature ที่ใช้ในใบงาน 1–4 | อัปโหลดไฟล์และตรวจไฟล์ก่อนประมวลผล (UC-02 · UC-03) |
| รายละเอียดโครงงาน | [PROJECT.md](PROJECT.md) · ทะเบียนเอกสารต้นทาง [INPUTS/input-register.md](INPUTS/input-register.md) |

## งานทั้งหมดใน repo นี้

| # | งาน | ไฟล์ | สรุป |
|---|---|---|---|
| G1 | W01 Quality Risk Cards | [W01_DeepfakesDection_Quality-Risk-Cards_v1.pdf](WEEKS/week-01/submission/W01_DeepfakesDection_Quality-Risk-Cards_v1.pdf) | 5 cards · QR-01 ส่งต่อเป็น critical slice |
| G2 | W02 Project Quality Route Map | [W02_DeepfakesDection_Project-Quality-Route-Map_v1.pdf](WEEKS/week-02/submission/W02_DeepfakesDection_Project-Quality-Route-Map_v1.pdf) | Route Map ของ QR-01 (NFR-02) |
| G3 | W03 Revised Critical Requirements | [W03_DeepfakesDection_Revised-Critical-Requirements_v1.pdf](WEEKS/week-03/submission/W03_DeepfakesDection_Revised-Critical-Requirements_v1.pdf) | ปรับ 5 requirements พร้อม Acceptance Criteria |
| G4 | W04 SRS Review, RTM Lite และ Gate A | [W04_DeepfakesDection_SRS-Review-and-RTM_v1.pdf](WEEKS/week-04/submission/W04_DeepfakesDection_SRS-Review-and-RTM_v1.pdf) · [work/](WEEKS/week-04/work/) | Gate A = Conditional |
| G5 | W05 Requirement-to-Design Trace | [W05_DeepfakesDection_Requirement-to-Design-Trace_v1.pdf](WEEKS/week-05/submission/W05_DeepfakesDection_Requirement-to-Design-Trace_v1.pdf) · [work/](WEEKS/week-05/work/) | trace กับบทที่3 ของโครงงาน · 7 TR · 5 DR · 7 DQ |
| G6 | ใบงานครั้งที่ 1 ส่วน B | [S1-B_DeepfakesDection.pdf](01-plan/S1-B_DeepfakesDection.pdf) · [อ่านบนเว็บ](01-plan/S1-B_DeepfakesDection.md) | กฎ ภาพส่วนประกอบ (สร้างย้อนหลัง) ข้อค้นพบ Entry/Exit |
| G7 | ใบงานครั้งที่ 2 ส่วน B | [S2-B_DeepfakesDection.pdf](02-test-design/S2-B_DeepfakesDection.pdf) · [อ่านบนเว็บ](02-test-design/S2-B_DeepfakesDection.md) | ชุดอ้างอิงรุ่น v1 · 14 กรณี |
| G8 | ใบงานรวม 3–4 ส่วน B1 | [execution-report.md](03-test-execution/execution-report.md) · [tests/](03-test-execution/tests/) · [evidence/](03-test-execution/evidence/) | Pass 9 · Fail 4 · Not Executed 1 · UAT Not Executed พร้อมแผน |
| G9 | ใบงานรวม 3–4 ส่วน B3 | [TEAM.md](TEAM.md) · [AI-LOG.md](AI-LOG.md) | หน้าที่และการใช้ AI |

ไม่มีใบงานรวม 3–4 ส่วน B2 และสัปดาห์ที่ 6–17 เพราะไม่ได้สอนในภาคนี้

## งานเชื่อมกันอย่างไร

```text
W01      Quality Risk Cards ──► QR-01 ผลตรวจผิดกับคลิปนอกชุดเทรน
W02–W04  Route Map → ปรับ requirement → Review + RTM ──► Gate A แบบมีเงื่อนไข
W05      Trace requirement กับบทที่3 ──► รู้ว่ากฎตรวจไฟล์อยู่ที่ FE-2 และ BE-2
ครั้งที่ 1  เลือก feature อัปโหลดและตรวจไฟล์ ──► ข้อค้นพบรายการประเภทไฟล์ไม่ตรงกัน · Entry/Exit
ครั้งที่ 2  ออกแบบกรณีทดสอบ 14 ข้อ ──► ชุดอ้างอิงรุ่น v1 (ยังไม่มีผลรัน)
ครั้งที่ 3  รันชุดอ้างอิงกับ Frontend 441d891 ──► ผลจริง 9 ผ่าน 4 ไม่ผ่าน + หลักฐาน
```

ข้อที่ไม่ผ่านบันทึกตามจริง เช่น TC-03 ไฟล์ 100 MB + 1 ไบต์ยังถูกรับ เพราะ Frontend ตั้งขีดจำกัดไว้ 500 MB · ทีมไม่ได้แก้ผลที่คาดหวังให้ตรงกับผลจริง

## กติกาที่ใช้ใน repo นี้

- repo เป็น **Public** · ไม่มีรหัสนักศึกษา ไม่มีงานเดี่ยวส่วน A ไม่มีรหัสผ่าน token หรือข้อมูลติดต่อของผู้ให้ข้อมูล
- ผลทดสอบมาจากการรันจริงเท่านั้น ข้อที่ยังไม่ได้รันเขียน Not Executed พร้อมเหตุผล ดู [EVIDENCE-RULES.md](EVIDENCE-RULES.md)
- เอกสารต้นทางติดป้ายตามจริง: SE02 และ SRS **มีก่อนพัฒนา** · บทที่3 **สร้างย้อนหลัง**
- การใช้ AI บันทึกไว้ทั้งหมดใน [AI-LOG.md](AI-LOG.md)

| สถานะหลักฐาน | ใช้เมื่อ |
|---|---|
| `Existing` | หลักฐานมีอยู่จริงและเปิดตรวจได้ |
| `Planned` | วางแผนจะสร้าง แต่ยังไม่เกิด |
| `Not Ready` | ยังทำไม่ได้เพราะมี decision/input/blocker ขาด |
| `Not Executed` | ออกแบบการทดสอบแล้วแต่ยังไม่ได้รัน |

## โครงสร้าง

```text
.
├── SUBMISSIONS.md        หน้าส่งงานหลัก (G1–G9)
├── PROJECT.md · TEAM.md · AI-LOG.md · STATUS.md
├── EVIDENCE-RULES.md · HOW-TO-GITHUB.md · UPDATE-2569-10.md · CONTRIBUTING.md
├── INPUTS/               Proposal · SRS · บทที่3 และทะเบียน input
├── WEEKS/week-01..05/    งานรายสัปดาห์ (work/ และ submission/)
├── 01-plan/              ใบงานครั้งที่ 1 ส่วน B
├── 02-test-design/       ใบงานครั้งที่ 2 ส่วน B
├── 03-test-execution/    ใบงานรวม 3–4 ส่วน B1 (execution-report · tests · evidence)
└── tools/                check_submission.py ตรวจความครบเบื้องต้น
```

ตรวจความครบก่อนส่ง: `python tools/check_submission.py .`
