import QuizCreation from "@/components/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const QuizPage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session) {
    return redirect("/");
  }
  return <QuizCreation />;
};

export default QuizPage;
