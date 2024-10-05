import { create } from "zustand";

const useAppSettings = create<IAppSettings>()((set) => ({}));

export default useAppSettings;