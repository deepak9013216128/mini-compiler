export default function Button(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button {...props}>Run</button>
    </div>
  );
}
