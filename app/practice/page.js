import dynamic from "next/dynamic";

const Practice = dynamic(() => import("@/components/practice"), {
  loading: () => <div>Loading practice...</div>,
});

export default function PracticePage() {
  return <Practice />;
}
