import Link from "next/link";
import AuthInput from "@/components/ui/AuthInput";

export default function LoginForm() {
  return (
    <div className="w-full">
      <div className="space-y-3">
        <AuthInput
          id="login-email"
          label="Email"
          type="email"
          placeholder="Masukkan email anda..."
        />

        <div>
          <AuthInput
            id="login-password"
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi anda..."
          />
          <p className="mt-1 text-right text-base text-[#4696E0]">
            Lupa Kata Sandi?
          </p>
        </div>
      </div>

      <button
        type="button"
        disabled
        className="mt-4 h-[43px] w-full rounded-md bg-[#4696E0] text-lg font-semibold text-white disabled:cursor-not-allowed"
      >
        Masuk
      </button>

      <p className="mt-5 text-center text-base text-[#DB4437]">
        Belum mendaftar sebagai pengguna?
      </p>

      <Link
        href="/register"
        className="mt-2 flex h-[43px] w-full items-center justify-center rounded-md bg-[#F4B400] text-lg font-semibold text-white"
      >
        Daftar
      </Link>
    </div>
  );
}
