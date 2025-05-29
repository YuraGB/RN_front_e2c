export type TPAymentType = "CASH" | "CARD";
export type OrderStatus = "NEW" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";

export type TOrderItems = {
  productId: number;
  quantity: number;
  price: number;
};

export type OrderInputType = {
  userId: string;
  paymentType: TPAymentType;
  address: string;
  city: string;
  state: string;
  zip: string;
  orderProducts: TOrderItems[];
};

export type TOrder = {
  id: number;
  paymentType: TPAymentType;
  address: string;
  city: string;
  state: string;
  zip: string;
  userId: number;
  orderProducts: TOrderItems[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

// type OrderProductInput struct {
// 	ProductID int `json:"productId" validate:"required"`
// 	Quantity  int `json:"quantity" validate:"required,min=1"`
// }

// type OrderInput struct {
// 	PaymentType   string              `json:"paymentType" validate:"required,oneof=CASH CARD"`
// 	Address       string              `json:"address" validate:"required"`
// 	City          string              `json:"city" validate:"required"`
// 	State         string              `json:"state" validate:"required"`
// 	Zip           string              `json:"zip" validate:"required"`
// 	UserID        int                 `json:"userId" validate:"required"`
// 	OrderProducts []OrderProductInput `json:"orderProducts" validate:"required,dive"`
// }

// type Order struct {
//     // ID of the ent.
//     ID int `json:"id,omitempty"`
//     // PaymentType holds the value of the "paymentType" field.
//     PaymentType order.PaymentType `json:"paymentType,omitempty"`
//     // Address holds the value of the "address" field.
//     Address string `json:"address,omitempty"`
//     // City holds the value of the "city" field.
//     City string `json:"city,omitempty"`
//     // State holds the value of the "state" field.
//     State string `json:"state,omitempty"`
//     // Zip holds the value of the "zip" field.
//     Zip string `json:"zip,omitempty"`
//     // UserID holds the value of the "user_id" field.
//     UserID int `json:"user_id,omitempty"`
//     // Total price of the order, must be positive
//     TotalPrice float64 `json:"total_price,omitempty"`
//     // Status of the order, can be NEW, IN_PROGRESS, COMPLETED, or CANCELED
//     Status order.Status `json:"status,omitempty"`
//     // CreatedAt holds the value of the "created_at" field.
//     CreatedAt time.Time `json:"created_at,omitempty"`
//     // UpdatedAt holds the value of the "updated_at" field.
//     UpdatedAt time.Time `json:"updated_at,omitempty"`

// }
