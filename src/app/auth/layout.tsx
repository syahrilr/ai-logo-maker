import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-8 p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex justify-center md:justify-start">
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-semibold text-gray-800 transition-colors hover:text-primary"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md transition-all group-hover:shadow-lg">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span className="transition-transform group-hover:translate-x-1 text-white">
              Home
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md space-y-8">{children}</div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/login-image.jpg"
          alt="Login Image"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <blockquote className="space-y-2">
            <p className="text-lg">{`"Design the Future, Effortlessly."`}</p>
            <footer className="text-sm">- Logofy</footer>
          </blockquote>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
