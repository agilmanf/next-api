import { NextRequest, NextResponse } from "next/server";

import queryDB from "@/lib/db";
import { QueryBuilder } from "@/lib/queryBuilder";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const search = searchParams.get("search");

  const qb = new QueryBuilder("SELECT * FROM learn.users");

  if (search) {
    qb.search(["fullname", "email"], search);
  }

  if (limit) {
    qb.limit(limit);
  }

  if (offset) {
    qb.offset(offset);
  }

  try {
    const users = await queryDB(qb.query, null);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Internal server error", {
      status: 500,
    });
  }
}
