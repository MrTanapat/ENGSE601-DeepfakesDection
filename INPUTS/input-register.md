# Input Register and Source of Truth

| Input ID | Artifact                        | File path / URL                                                                                    | Version / date / commit   | Owner  | Status  | Used by      | Notes / change impact                                  |
| -------- | ------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------- | ------ | ------- | ------------ | ------------------------------------------------------ |
| IN-01    | Proposal                        | `INPUTS/proposal/SE02-Deepfakes-detection-Document-Edit_thanit_signed.pdf` (SE02Finalversion.docx) | SE02 Final, 2 มี.ค. 2569  | ธนภัทร | Current | W01–W04      |                                                        |
| IN-02    | Requirement/SRS                 | `INPUTS/requirements-srs/Software_Requirements_Specification.pdf` (SE02 10.3–10.4)                 | BR 7, FR 10–11, NFR 9 ข้อ | ธนภัทร | Current | W01–W04      |                                                        |
| IN-03    | HLD/Detail Design               | `INPUTS/design/บทที่3_20-08-26.pdf`                                                                | บทที่3, 20 ส.ค. 2569      | ธนภัทร | Current | W02, W04–W08 | Design เสร็จ, โค้ดยังไม่ implement                     |
| IN-04    | ENGSE212 repository             | [ENGSE212](https://github.com/MrTanapat/Deepfakes-Detections-Xceptionnet)                          | 7 ส.ค. 2569               | ธนภัทร | Current | W02–W16      | ยังไม่ init repo                                       |
| IN-05    | Stakeholder/glossary/risk notes | [GoogleDrive](https://drive.google.com/file/d/1cDkF3QCuUBrYuoqvj9MWn_-2NBIn4IjO/view?usp=sharing)  | [กรอก]                    | ธนภัทร | Current | W01–W04      | มีข้อมูลสัมภาษณ์ Lanner News แต่ยังไม่รวมเป็นไฟล์เดียว |

## Status meaning

- `Current`: version ที่ทีมประกาศเป็น source of truth สำหรับงานปัจจุบัน
- `Draft`: ใช้ทบทวนได้แต่ยังไม่เป็น baseline
- `Superseded`: มี version ใหม่กว่า; เก็บไว้เพื่อ trace
- `Not Ready`: ยังไม่มีหรือยังเปิดตรวจไม่ได้ ต้องมี owner/next action ใน Notes

## Input change log

## Input change log

| Date       | Input ID | Old → New                                             | Reason                                 | Week/artifact affected | Action/owner         |
| ---------- | -------- | ----------------------------------------------------- | -------------------------------------- | ---------------------- | -------------------- |
| 2026-08-21 | IN-03    | DB/Storage ตัวเลือก → ยืนยัน PostgreSQL+Cloudflare R2 | Detail Design สรุปแล้ว                 | IN-01, Project Profile | ธนภัทร — **Applied** |
| 2026-08-21 | IN-03    | ขนาดไฟล์สูงสุด 50MB → 100MB                           | Detail Design (บทที่3 3.11.2) สรุปแล้ว | IN-01, Project Profile | ธนภัทร — **Applied** |
