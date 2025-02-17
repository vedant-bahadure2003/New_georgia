 import { galaryData } from "@/data/galaryData/galaryData";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const image = galaryData.find((item) => item.id === id);
  if (!image)
    return NextResponse.json({
      success: false,
      message: "No Imags Are Present",
      image,
    });
  return NextResponse.json({ success: true, message: "successful", image });
}
