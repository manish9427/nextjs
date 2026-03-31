import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET() {
  const users = [{ id: 1, name: 'Alice' }];
  return NextResponse.json(users);
}

// Handle POST requests
export async function POST(request: Request) {
  const body = await request.json(); // Parse incoming JSON
  return NextResponse.json({ message: "User created", data: body }, { status: 201 });
}