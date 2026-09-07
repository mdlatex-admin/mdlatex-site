import type { Metadata } from "next";
import "./lmk-group.css";

export const metadata: Metadata = {
  title: "LMK Group",
  description: "LMK Group directory",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function LMKGroupPage() {
  return (
    <main className="lmk-group-page">
      <iframe
        className="lmk-group-frame"
        src="/lmk-group-widget/index.html"
        title="LMK Group"
      />
    </main>
  );
}
