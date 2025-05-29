import { z } from "zod";

export const checkoutUserSchecma = z.object({
  email: z.string().email(),
});

export const deliveryAdressSchecma = z.object({
  city: z.string(),
  zipCode: z.string(),
  address: z.string(),
});

export const paymentMethodSchema = z.object({
  method: z.enum(["cash", "card"]),
});

export type TCheckoutUser = z.infer<typeof checkoutUserSchecma>;
export type TDeliveryAddress = z.infer<typeof deliveryAdressSchecma>;
export type TPayment = z.infer<typeof paymentMethodSchema>;
