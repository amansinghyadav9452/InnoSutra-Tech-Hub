import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSession, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 },
      );
    }

    const result = await db.query<{
      id: string;
      password_hash: string;
    }>(
      "SELECT id, password_hash FROM users WHERE email = $1 LIMIT 1",
      [email],
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 },
      );
    }

    const validPassword = await verifyPassword(password, result.rows[0].password_hash);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 },
      );
    }

    await createSession(result.rows[0].id);

    return NextResponse.json({ message: "Login successful." });
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Unable to log in right now." },
      { status: 500 },
    );
  }
}
