import TopBar from "@/components/fragments/TopBar";
import LoginForm from "@/components/fragments/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#F2F2F2] text-[#303030] lg:h-dvh lg:overflow-hidden">
      <TopBar />

      <main className="flex flex-1 flex-col p-4 lg:min-h-0 lg:px-[22px] lg:py-[18px]">
        <section className="flex flex-1 flex-col rounded-lg border-2 border-black bg-[#FAFDFD] px-4 py-5 sm:px-7 lg:min-h-0 lg:px-[30px] lg:py-[21px]">
          <div
            aria-hidden="true"
            className="h-[190px] w-full shrink-0 rounded-lg bg-[#D2E0FB] sm:h-[240px] lg:h-auto lg:max-h-[330px] lg:min-h-[110px] lg:flex-1"
          />

          <div className="mx-auto w-full max-w-[525px] shrink-0 pt-6 pb-4 lg:pt-6 lg:pb-3">
            <LoginForm />
          </div>
        </section>
      </main>
    </div>
  );
}
