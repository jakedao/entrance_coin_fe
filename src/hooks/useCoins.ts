import { useDispatch, useSelector } from "react-redux";

import { fetchCoinsRequest } from "../slices/coinSlice";
import { RootState } from "../store";

const useCoins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins.coins);
  const isFetching = useSelector((state: RootState) => state.coins.isFetching);

  const handleFetchCoins = () => {
    dispatch(fetchCoinsRequest());
  };

  return {
    coins,
    isFetching,
    handleFetchCoins,
  };
};

export default useCoins;
