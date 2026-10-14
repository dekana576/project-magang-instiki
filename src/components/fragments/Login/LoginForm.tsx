import Image from "next/image";
import AuthInput from "@/components/ui/AuthInput";

export default function LoginForm() {
  return (
    <div>

      {/* Tab Sign In & Sign Up */}
      <div className="mb-4 grid grid-cols-2 rounded-md bg-[#D9D9D9] p-1 text-center text-lg sm:text-xl">
        <div className="rounded-md bg-[#0E7DC2] px-4 py-2 text-white">
          Sign In
        </div>

        <div className="px-4 py-2 text-[#707070]">
          Sign Up
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <AuthInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email..."
          icon="email"
        />

        <div>
          <AuthInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password..."
            icon="password"
          />

          <p className="mt-1 text-right text-sm text-[#4696E0]">
            Forgot password?
          </p>
        </div>
      </div>

      {/* Tombol login */}
      <button
        type="button"
        disabled
        className="mt-5 w-full rounded-md bg-[#0E7DC2] py-3 text-xl font-semibold text-white disabled:cursor-not-allowed"
      >
        LOGIN
      </button>

      <p className="mt-5 text-center text-base text-[#707070]">
        Or Login with
      </p>

      {/* Social Login */}
      <div className="mt-3 flex items-center justify-center gap-5">
        <Image
          src="/icons/Facebook_logo.png"
          alt="Facebook"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />

        <div className="flex h-[60px] w-[100px] items-center justify-center rounded-lg border border-[#D9D9D9]">
          <Image
            src="/icons/Google_logo.png"
            alt="Google"
            width={46}
            height={46}
            className="h-11 w-11 object-contain"
          />
        </div>

        <Image
          src="/icons/Windows_logo.png"
          alt="Windows"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>

    </div>
  );
}