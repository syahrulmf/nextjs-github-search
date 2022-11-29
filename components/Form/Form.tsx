export default function Form({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Cari user di github"
      className="border border-zinc-100 p-5 rounded-l-lg w-full"
      value={value}
      onChange={onChange}
    />
  );
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
