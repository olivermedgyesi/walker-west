import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const gilda = await readFile(
    join(process.cwd(), "src/app/_fonts/GildaDisplay-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3d2d26",
          color: "#f6f1e9",
          fontFamily: "Gilda Display",
          fontSize: 12,
          letterSpacing: "-0.06em",
        }}
      >
        W&amp;W
      </div>
    ),
    { ...size, fonts: [{ name: "Gilda Display", data: gilda }] },
  );
}
