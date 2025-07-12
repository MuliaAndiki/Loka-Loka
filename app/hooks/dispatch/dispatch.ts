import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RouteState, AppDispatch } from "@/app/stores/store/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RouteState> = useSelector;
