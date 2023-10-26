import Link from "next/link";
import { FC } from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "./UserAccountNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getAuthSession();
  console.log(session?.user);
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-10 h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Kodekan
          </p>
        </Link>
        <div className="flex items-center">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text="Masuk" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
