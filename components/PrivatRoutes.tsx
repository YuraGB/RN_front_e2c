// components/PrivateRoute.tsx
import { RootState } from "@/store";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/store/hooks";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isUser = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();

  if (!isUser) {
    router.push("/login");
    return null; // Prevent rendering the children if the user is not authenticated
  }

  return <>{children}</>;
};

export default PrivateRoute;
