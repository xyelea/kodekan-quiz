import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";

export default async function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Selamat datang di Kodekan Quiz!</CardTitle>
          <CardDescription>
            Kodekan Quiz adalah aplikasi kuis web yang memungkinkan Anda membuat
            dan menyebarkan quiz dengan teman anda
          </CardDescription>
          <CardContent>
            <SignInButton text="Masuk dengan Google" />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
