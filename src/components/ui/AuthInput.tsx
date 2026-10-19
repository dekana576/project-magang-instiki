type AuthInputProps = {
  id: string;
  label: string;
  type: "email" | "password";
  placeholder: string;
};

export default function AuthInput({
  id,
  label,
  type,
  placeholder,
}: AuthInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-[6px] block text-base text-[#303030]">
        {label}
      </label>
      <input
        id={id}
        name={type}
        type={type}
        autoComplete={type === "email" ? "email" : "current-password"}
        placeholder={placeholder}
        className="h-[37px] w-full rounded-[4px] border border-[#989898] bg-transparent px-[14px] text-base text-[#303030] outline-none placeholder:text-[#808080] focus:border-[#4696E0] focus:ring-1 focus:ring-[#4696E0]"
      />
    </div>
  );
}
