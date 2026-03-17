import Client from "@/app/auth/client";

// Server route entry for /auth.
type AuthPageProps = {
  searchParams?: Promise<{
    redirect?: string;
    status?: string;
    message?: string;
  }>;
};

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const params = (await searchParams) ?? {};
  const redirectTo = typeof params.redirect === "string" ? params.redirect : "";
  const status =
    params.status === "success" || params.status === "error"
      ? params.status
      : null;
  const message = typeof params.message === "string" ? params.message : null;

  return <Client redirectTo={redirectTo} flashStatus={status} flashMessage={message} />;
}