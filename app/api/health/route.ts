import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    await db.query("SELECT 1");

    return NextResponse.json({
      ok: true,
      service: "innosutra-tech-hub",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        service: "innosutra-tech-hub",
      },
      { status: 503 },
    );
  }
}
