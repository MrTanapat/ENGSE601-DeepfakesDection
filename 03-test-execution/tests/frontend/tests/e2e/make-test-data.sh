#!/usr/bin/env bash
# สร้างไฟล์ทดสอบที่ไม่ใช่สื่อจริง (ไม่มีใบหน้าบุคคลจริง) สำหรับ SYS-01 และ SYS-02
# 1 MB = 1,048,576 ไบต์ (สมมติฐาน DQ-01)
set -e
cd "$(dirname "$0")/test-data"
truncate -s $((5 * 1024 * 1024)) clip_5MB.mp4
truncate -s $((100 * 1024 * 1024 + 1)) clip_100MB_plus_1B.mp4
ls -l clip_*.mp4
