import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Filter
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}
