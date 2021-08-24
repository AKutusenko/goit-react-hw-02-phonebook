export default function Filter({ value, onChange }) {
  return (
    <label>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
