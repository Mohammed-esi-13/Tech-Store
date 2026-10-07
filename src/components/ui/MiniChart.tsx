type MiniChartProps = {
  color?: "blue" | "green" | "amber";
};

export default function MiniChart({ color = "blue" }: MiniChartProps) {
  return (
    <div className={`mini-chart mini-chart-${color}`}>
      {[30, 52, 45, 67, 58, 76, 88, 72, 96].map((height, index) => (
        <i key={index} style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}
