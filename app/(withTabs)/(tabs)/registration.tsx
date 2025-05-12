import { RegisterForm } from "@/components/RegisterForm";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import useIsCurrentUser from "@/hooks/useIsCurrentUser";

const Registration = () => {
  useIsCurrentUser();
  return (
    <ScrollViewComponentBase>
      <RegisterForm />
    </ScrollViewComponentBase>
  );
};

export default Registration;
