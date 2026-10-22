// System test ผ่านหน้าจอจริง /detect แบบ Guest (ไม่เข้าสู่ระบบ)
// ชุดอ้างอิง: 02-test-design/S2-B_DeepfakesDection_Team.md รุ่น v1
import { test, expect } from "@playwright/test";
import path from "node:path";

const shots = process.env.SHOT_DIR ?? "test-results";
const day = new Date().toISOString().slice(0, 10);
const data = (f: string) => path.join(__dirname, "test-data", f);

test("SYS-01 Guest เปิดหน้าตรวจและเลือกวิดีโอ MP4 5 MB ได้ โดยไม่ต้องเข้าสู่ระบบ", async ({ page }) => {
  await page.goto("/detect");
  await expect(page).toHaveURL(/\/detect$/);
  await page.screenshot({ path: `${shots}/SYS-01_system_${day}_1-open.png`, fullPage: true });
  await page.locator('input[type="file"]').setInputFiles(data("clip_5MB.mp4"));
  await expect(page.getByText("clip_5MB.mp4")).toBeVisible();
  await expect(page.getByText("START DETECTION")).toBeVisible();
  await page.screenshot({ path: `${shots}/SYS-01_system_${day}_2-selected.png`, fullPage: true });
});

test("SYS-02 Guest เลือกวิดีโอ 100 MB + 1 ไบต์ ระบบไม่รับ และแจ้งว่าเกิน 100 MB", async ({ page }) => {
  await page.goto("/detect");
  await page.locator('input[type="file"]').setInputFiles(data("clip_100MB_plus_1B.mp4"));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${shots}/SYS-02_system_${day}_1-after-select.png`, fullPage: true });
  await expect(page.getByText("START DETECTION")).toHaveCount(0);
  await expect(page.locator(".text-red-400")).toContainText("100");
});
