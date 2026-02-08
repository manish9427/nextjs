import dynamic from "next/dynamic";

const Calculator = dynamic(() => import("@/components/calculator"), {
  loading: () => <div>Loading calculator...</div>,
});

export default function CalculatorPage() {
  return <Calculator />;
}
