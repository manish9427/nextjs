import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/slider"), {
  loading: () => <div>Loading slider...</div>,
});

export default function SliderPage() {
  return <Slider />;
}
