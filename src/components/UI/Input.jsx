export default function Input({ label, id, type, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={id} {...props} required />
    </p>
  );
}
