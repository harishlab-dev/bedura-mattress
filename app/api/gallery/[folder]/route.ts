import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  context: { params: Promise<{ folder: string }> }
) {
  const { folder } = await context.params;

  const folderPath = path.join(
    process.cwd(),
    "public",
    "images",
    "essentials",
    folder
  );

  console.log("Folder:", folder);
  console.log("Path:", folderPath);

  if (!fs.existsSync(folderPath)) {
    return NextResponse.json({
      error: "Folder not found",
      folder,
      folderPath,
    });
  }

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return NextResponse.json(
    files.map((file) => `/images/essentials/${folder}/${file}`)
  );
}