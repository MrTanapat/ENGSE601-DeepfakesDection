# โค้ดทดสอบ · DeepfakesDection_Team

ไฟล์ในโฟลเดอร์นี้เขียนขึ้นสำหรับ Frontend ของโครงงาน ENGSE212 ([`MrTanapat/Deepfakes-Detections-Xceptionnet`](https://github.com/MrTanapat/Deepfakes-Detections-Xceptionnet) commit `441d891`) โดยคงโครงโฟลเดอร์ `frontend/` เดิม เพราะโค้ดทดสอบ import ไฟล์ของแอปผ่าน alias `@/` → `frontend/src`

| ไฟล์ | ระดับ | กรณีทดสอบในชุดอ้างอิง v1 |
|---|---|---|
| [frontend/tests/unit/upload-validation.test.tsx](frontend/tests/unit/upload-validation.test.tsx) | Unit | TC-01 ถึง TC-11 |
| [frontend/tests/e2e/upload.spec.ts](frontend/tests/e2e/upload.spec.ts) | System | SYS-01 · SYS-02 |
| [frontend/tests/e2e/make-test-data.sh](frontend/tests/e2e/make-test-data.sh) | ตัวช่วย | สร้างไฟล์ทดสอบ 5 MB และ 100 MB + 1 ไบต์ (ไม่ commit ไฟล์ลง repo เพราะเกิน 20 MB) |
| [frontend/vitest.config.mts](frontend/vitest.config.mts) · [frontend/playwright.config.ts](frontend/playwright.config.ts) | ตั้งค่า | — |

ชื่อ test ใช้รหัส TC เดิมจากชุดอ้างอิง และ Assert ตามผลที่คาดหวังจากความต้องการ เช่น TC-03 คาดหวังว่าไม่มีปุ่ม START DETECTION เพราะไฟล์เกิน 100 MB

TC-12 (API · Magic Bytes) ยังไม่มีโค้ดทดสอบ เพราะ Backend ยังไม่มีโค้ด และเอกสารออกแบบยังไม่ระบุ endpoint

## รันซ้ำอย่างไร

คัดลอกไฟล์ในโฟลเดอร์ `frontend/` นี้ไปวางในโฟลเดอร์ `frontend` ของ repo โครงงาน แล้วรัน

```bash
cd frontend
npm install
npm install -D vitest@3.2.4 @vitejs/plugin-react@4.7.0 jsdom@26.1.0 @testing-library/react@16.3.0 @testing-library/dom@10.4.0 @playwright/test@1.56.1

# Unit
npx vitest run tests/unit/upload-validation.test.tsx

# System (เปิด next dev ไว้อีกหน้าต่างก่อน)
npx next dev -p 3000
bash tests/e2e/make-test-data.sh            # Windows ใช้ Git Bash
npx playwright install chromium             # ครั้งแรกครั้งเดียว
npx playwright test tests/e2e/upload.spec.ts --reporter=list
```

ภาพหน้าจอจะอยู่ใน `test-results/` (ตั้ง `SHOT_DIR` เพื่อเปลี่ยนที่เก็บ) · ถ้ารันซ้ำ ให้บันทึกผลเป็นไฟล์ใหม่ใน `evidence/` ตามวันที่รัน ห้ามเขียนทับไฟล์เดิม
