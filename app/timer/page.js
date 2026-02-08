import dynamic from "next/dynamic";

const Timer = dynamic(() => import("@/components/timer"), {
  loading: () => <div>Loading timer...</div>,
});

export default function TimerPage() {
  return <Timer />;
}
