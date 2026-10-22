# Weekly Submission Status

## Onboarding checklist

- [x] ตั้งชื่อ repository และกำหนด visibility เหมาะสม
- [x] เพิ่มสมาชิกทีมและอาจารย์ตามสิทธิ์ที่กำหนด
- [x] กรอก `PROJECT.md`
- [x] กรอก `TEAM.md` และ Team Working Agreement
- [x] เพิ่ม Proposal และ Requirement/SRS หรือ URL ที่เปิดตรวจได้
- [x] กรอก `INPUTS/input-register.md` พร้อม version/source of truth
- [x] ตรวจว่าไม่มี password, token, secret หรือข้อมูลส่วนบุคคลที่ไม่จำเป็น
- [x] สมาชิกทุกคน clone/pull/commit ได้

## Submission ledger

| Week | Output                           | Status    | Submitted file/path                                                                                                          | Tag                 | Commit hash                                | Submitted by/date   | Feedback / revision                                                                                     |
| ---: | -------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
|   01 | Quality Risk Cards v1            | Ready for Review | `WEEKS/week-01/submission/W01_DeepfakesDection_Team_Quality-Risk-Cards_v1.pdf` | `w01-submission-v1` (ต้องย้าย tag มา commit ใหม่) | — | ธนภัทร / 22 ต.ค. 69 | ฉบับ PDF แรก (tag เดิม `0b2a512` มีเฉพาะร่างใน work) — รอ peer review |
|   02 | Project Quality Route Map v1     | Submitted | `WEEKS/week-02/submission/W02_DeepfakesDection_Team_Project-Quality-Route-Map_v1.pdf`                                        | `w02-submission-v1` | `6dd1bd1e571f9b605a9f0827bb2f3d0c7e13e603` | ธนภัทร / 22 ส.ค. 69 | self-check เท่านั้น — รอ peer review จริง                                                               |
|   03 | Revised Critical Requirements v1 | Submitted | `WEEKS/week-03/submission/W03_DeepfakesDection_Team_Revised-Critical-Requirements_v1.pdf` + `..._Peer-Review-AI-Record_v1.pdf` | `w03-submission-v1` | `d16048ea19a6e2b6a3fd4e5654716611ece18408` | ธนภัทร / 23 ส.ค. 69 | self-check เท่านั้น — REQ-03 (FR-06), REQ-04 (FR-07) ยังเป็น Not Ready/Conditional รอยืนยันก่อน Week 04 |
|   04 | SRS Review and RTM v1            | Submitted | `WEEKS/week-04/submission/W04_DeepfakesDection_Team_SRS-Review-and-RTM_v1.pdf`                                               | `w04-submission-v1` | `d2a5dafb5ca2fd735b8808a23246b213b38d9b8f` | ธนภัทร / 23 ส.ค. 69 | self-check เท่านั้น — Gate A = Conditional, GA-01/GA-02/GA-03 ยังต้องยืนยันก่อน Week 05                 |
|   05 | Component Test Case Set          | Planned   | `WEEKS/week-05/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   06 | Integration Test Design          | Planned   | `WEEKS/week-06/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   07 | System/UAT Scenarios             | Planned   | `WEEKS/week-07/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   08 | Test Case Suite v1               | Planned   | `WEEKS/week-08/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   09 | Midterm Examination              | Planned   | `WEEKS/week-09/`                                                                                                             | —                   | —                                          | —                   | ตามประกาศรายวิชา                                                                                        |
|   10 | Test Data Sheet                  | Planned   | `WEEKS/week-10/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   11 | NFR Test Outline                 | Planned   | `WEEKS/week-11/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   12 | Review Record + Tool Rationale   | Planned   | `WEEKS/week-12/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   13 | Test Plan v1                     | Planned   | `WEEKS/week-13/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   14 | Defect Report / Metric Snapshot  | Planned   | `WEEKS/week-14/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   15 | Test Summary Report Draft        | Planned   | `WEEKS/week-15/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   16 | V&V Evidence Portfolio           | Planned   | `WEEKS/week-16/`                                                                                                             | —                   | —                                          | —                   | template รอประกาศ                                                                                       |
|   17 | Final Examination                | Planned   | `WEEKS/week-17/`                                                                                                             | —                   | —                                          | —                   | ตามประกาศรายวิชา                                                                                        |

Status ที่แนะนำ: `Not Started`, `In Progress`, `Ready for Review`, `Submitted`, `Revision Required`, `Resubmitted`, `Accepted`.

## Revision history

| Date   | Week/artifact | From → To | Reason / feedback | Owner  | New tag/commit |
| ------ | ------------- | --------- | ----------------- | ------ | -------------- |
| 2026-10-22 | W01 Quality Risk Cards | ร่าง → v1 PDF | ร่างเดิม 3 cards ไม่มี PDF; ฉบับนี้ 5 cards อ้าง source/test ID/โค้ดจริง | ธนภัทร | `w01-submission-v1` (ย้าย tag) |
| 2026-10-22 | W03 submission | ชื่อไฟล์ | เปลี่ยนชื่อ `..._Critical-Requirement-Review_v1.pdf` → `..._Revised-Critical-Requirements_v1.pdf` ตามชื่อที่ผู้สอนกำหนด (เนื้อหาเดิม) | ธนภัทร | — |
