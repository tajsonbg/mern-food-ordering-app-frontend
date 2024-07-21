import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  addToCart: (menuItem: CartItem) => void;
  removeFromCart: (menuItem: CartItem) => void;
};

const OrderSummary = ({
  restaurant,
  cartItems,
  addToCart,
  removeFromCart,
}: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    console.log(totalWithDelivery, "totalWith delivery");

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <Button
                variant={"ghost"}
                className="p-2"
                onClick={() => removeFromCart(item)}
              >
                <MinusCircleIcon
                  className="cursor-pointer rounded-xl hover:bg-slate-200 "
                  size={15}
                />
              </Button>
              <span>
                <Badge className="mx-1" variant="outline">
                  {item.quantity}
                </Badge>
              </span>
              <Button
                onClick={() => addToCart(item)}
                variant={"ghost"}
                className="mr-2 p-2"
              >
                <PlusCircleIcon size={15} />
              </Button>
              {item.name}
            </div>

            <span className="flex items-center gap-1">
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
