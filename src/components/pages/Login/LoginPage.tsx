import Image from "next/image";
import LoginForm from "@/components/fragments/Login/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-dvh bg-white text-[#303030] lg:h-dvh lg:overflow-hidden lg:p-4">
  <div className="grid min-h-dvh lg:h-full lg:min-h-0 lg:grid-cols-2">

        {/* Panel kiri */}
        <section
          className="relative hidden overflow-hidden rounded-2xl bg-[#127EC3] bg-cover bg-center text-white lg:flex"
          style={{
            backgroundImage: "url('/images/login-mosaic.svg')",
          }}
        >
          <div className="absolute inset-0 bg-[#0876BB]/20" />

          <div className="relative flex w-full flex-col justify-between px-12 py-20 text-center xl:px-16">

            <div>
              <h1 className="text-4xl font-light xl:text-[42px]">
                Welcome to Dimata PMO
              </h1>

              <p className="mt-5 text-lg font-light xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light xl:text-4xl">
                Lorem ipsum dolor sit amet
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-lg font-light xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc dictum orci a convallis porta
              </p>

              <div className="mt-12 flex items-center justify-center gap-1">
                <span className="h-2 w-5 rounded-full bg-white" />
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="h-2 w-2 rounded-full bg-white/60" />
              </div>
            </div>

          </div>
        </section>

        {/* Panel kanan */}
        <section className="flex min-h-dvh items-center justify-center px-5 py-8 sm:px-10 lg:min-h-0 lg:overflow-y-auto lg:px-12 lg:py-4">
          <div className="w-full max-w-[520px]">

            <Image
              src="/icons/Dimata-logo.png"
              alt="Logo Dimata PMO"
              width={185}
              height={70}
              className="mb-5 h-auto w-[160px] object-contain"
              priority
            />

            <LoginForm />

          </div>
        </section>

      </div>
    </main>
  );
}