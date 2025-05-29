import { CheckoutMultiform } from "@/components/checkoutMultiform";
import { ScrollView } from "tamagui";

const Checkout = () => {
  return (
    <ScrollView className="py-10 px-2">
      <CheckoutMultiform />
    </ScrollView>
  );
};

export default Checkout;
