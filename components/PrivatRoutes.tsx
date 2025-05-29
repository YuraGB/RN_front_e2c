import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isUser = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (!isUser) {
      router.push("/login");
    }
  }, [isUser, router]);

  if (!isUser) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
