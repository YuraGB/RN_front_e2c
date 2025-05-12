import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks"; // Adjust the path as needed
import { useRouter } from "expo-router";

const useIsCurrentUser = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated, router]);
};

export default useIsCurrentUser;
