type AuthInputProps = {
  id: string;
  label: string;
  type: "email" | "password";
  placeholder: string;
  icon: "email" | "password";
};

export default function AuthInput({
  id,
  label,
  type,
  placeholder,
  icon,
}: AuthInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-base">
        {label}
      </label>

      <div className="flex h-14 items-center gap-3 rounded-md border border-[#9A9A9A] px-4">
        {icon === "email" ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#707070"
            strokeWidth="1.7"
            className="h-5 w-5 shrink-0"
          >
            <rect x="2.5" y="5" width="19" height="14" rx="2" />
            <path d="m3 7 9 7 9-7" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#707070"
            strokeWidth="1.7"
            className="h-5 w-5 shrink-0"
          >
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-base text-[#303030] outline-none placeholder:text-[#888888]"
        />

        {type === "password" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#707070"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0"
          >
            <path d="M3 3l18 18" />
            <path d="M10.5 5.2A11 11 0 0 1 12 5c5.3 0 9 5 10 7-.4.8-1.2 1.9-2.3 3" />
            <path d="M6.2 6.2C3.9 7.6 2.5 10 2 12c1 2 4.7 7 10 7a10 10 0 0 0 5-1.3" />
            <path d="M9.8 9.8a3.2 3.2 0 0 0 4.4 4.4" />
          </svg>
        )}
      </div>
    </div>
  );
}