import { NextResponse } from "next/server";
import { destroyCurrentSession } from "@/lib/auth";

export async function POST() {
  try {
    await destroyCurrentSession();

    return NextResponse.json({ message: "Logged out successfully." });
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { message: "Unable to log out right now." },
      { status: 500 },
    );
  }
}
