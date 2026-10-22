// Unit test ของ Upload Module (บทที่3 ตารางที่ 3.20 ข้อ 2) — ฟังก์ชัน handleFile ใน DetectPage
// ชุดอ้างอิง: 02-test-design/S2-B_DeepfakesDection_Team.md รุ่น v1
// ผลที่คาดหวังมาจากความต้องการ ไม่ได้ดูจากโค้ด:
//   REQ-01 ไฟล์ต้องไม่เกิน 100 MB (บทที่3 §3.7.1, §3.11.2 · SE02 NFR-01) · 1 MB = 1,048,576 ไบต์ (สมมติฐาน DQ-01)
//   REQ-02 รับเฉพาะ JPG, PNG, MP4, MOV, AVI (SRS ข้อจำกัดด้านเทคโนโลยี ข้อ 1)
import { describe, test, expect, beforeAll, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { LanguageProvider } from "@/app/providers/language-provider";
import DetectPage from "@/app/(dashboard)/detect/page";

const MB = 1024 * 1024;

beforeAll(() => {
  // jsdom ไม่มี URL.createObjectURL ใช้สำหรับภาพตัวอย่างเท่านั้น ไม่กระทบตรรกะที่ทดสอบ
  globalThis.URL.createObjectURL = () => "blob:preview";
  globalThis.URL.revokeObjectURL = () => {};
});
afterEach(cleanup);

// สร้างไฟล์ขนาดเล็ก แล้วกำหนดค่า size ตามกรณีทดสอบ (ระดับ Unit ไม่ต้องสร้างไฟล์ 100 MB จริง)
function makeFile(name: string, type: string, size: number): File {
  const f = new File(["x"], name, { type });
  Object.defineProperty(f, "size", { value: size });
  return f;
}

function selectFile(file: File) {
  const view = render(
    <LanguageProvider>
      <DetectPage />
    </LanguageProvider>
  );
  const input = view.container.querySelector('input[type="file"]') as HTMLInputElement;
  fireEvent.change(input, { target: { files: [file] } });
  const startButton = view.queryByText("START DETECTION");
  const errorBox = view.container.querySelector(".text-red-400");
  return { startButton, errorText: errorBox?.textContent ?? "" };
}

describe("REQ-01 ขนาดไฟล์ไม่เกิน 100 MB (แบ่งกลุ่ม + ค่าขอบ)", () => {
  test.each([
    ["TC-01", 100 * MB - 1, "ขอบใน 100 MB − 1 ไบต์"],
    ["TC-02", 100 * MB, "ขอบ 100 MB พอดี"],
    ["TC-04", 20 * MB, "ตัวแทนกลุ่มที่ถูกต้อง 20 MB"],
  ])("%s วิดีโอ MP4 ขนาด %i ไบต์ ควรรับ (%s)", (_id, size) => {
    const { startButton, errorText } = selectFile(makeFile("clip.mp4", "video/mp4", size));
    expect(errorText).toBe("");
    expect(startButton).not.toBeNull();
  });

  test("TC-03 วิดีโอ MP4 ขนาด 100 MB + 1 ไบต์ ควรไม่รับ แจ้งว่าเกิน 100 MB (เลยขอบ)", () => {
    const { startButton, errorText } = selectFile(makeFile("clip.mp4", "video/mp4", 100 * MB + 1));
    expect(startButton).toBeNull();
    expect(errorText).toContain("100");
  });
});

describe("REQ-02 ประเภทไฟล์ที่รองรับ JPG PNG MP4 MOV AVI (แบ่งกลุ่ม)", () => {
  test.each([
    ["TC-05", "photo.jpg", "image/jpeg"],
    ["TC-06", "photo.png", "image/png"],
    ["TC-07", "clip.mp4", "video/mp4"],
    ["TC-08", "clip.mov", "video/quicktime"],
    ["TC-09", "clip.avi", "video/x-msvideo"],
  ])("%s %s (%s) ขนาด 5 MB ควรรับ", (_id, name, type) => {
    const { startButton, errorText } = selectFile(makeFile(name, type, 5 * MB));
    expect(errorText).toBe("");
    expect(startButton).not.toBeNull();
  });

  test.each([
    ["TC-10", "photo.webp", "image/webp"],
    ["TC-11", "report.pdf", "application/pdf"],
  ])("%s %s (%s) ขนาด 5 MB ควรไม่รับ และแจ้งว่าไม่รองรับ", (_id, name, type) => {
    const { startButton, errorText } = selectFile(makeFile(name, type, 5 * MB));
    expect(startButton).toBeNull();
    expect(errorText).not.toBe("");
  });
});
