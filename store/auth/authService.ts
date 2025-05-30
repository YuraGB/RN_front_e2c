import { User } from "@/types/user";
import { AppDispatch } from "@/store";
import { storage } from "@/utils/getPlatform";
import { setIsAuthenticated, setUser } from "@/store/auth/authSlice";
import { mergeBasket } from "@/store/basket/basketThunk";

type TSetUserMergeBasket = (
  data: { user: User },
  dispatch: AppDispatch,
) => void;

export const setUserMergeBasket: TSetUserMergeBasket = (data, dispatch) => {
  storage.setItem("accessToken", data.user.token);
  dispatch(setUser(data.user));
  dispatch(setIsAuthenticated(true));
  dispatch(mergeBasket());
};
