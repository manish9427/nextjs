import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/components/counter"), {
  loading: () => <div>Loading counter...</div>,
});

export default function CounterPage() {
  return <Counter />;
}
