import { LoginForm } from "@/components/LoginForm";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import useIsCurrentUser from "@/hooks/useIsCurrentUser";

const Login = () => {
  useIsCurrentUser();
  return (
    <ScrollViewComponentBase>
      <LoginForm />
    </ScrollViewComponentBase>
  );
};

export default Login;
