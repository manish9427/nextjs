import dynamic from "next/dynamic";

const Store = dynamic(() => import("@/components/store"), {
  loading: () => <div>Loading store...</div>,
});

export default function StorePage() {
  return <Store />;
}
