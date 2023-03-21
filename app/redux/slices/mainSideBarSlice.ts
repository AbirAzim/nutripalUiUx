import { mainSidebarActiveMenuNameType } from "@/app/types/mainSideBarActiveMenuType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MainSideTrayState = {
  sidebarActiveMenuName: mainSidebarActiveMenuNameType;
};

const initialState: MainSideTrayState = {
  sidebarActiveMenuName: "Home",
};

const mainSideBarSlice = createSlice({
  name: "mainSideBar",
  initialState,
  reducers: {
    updateSidebarActiveMenuName: (
      state,
      action: PayloadAction<mainSidebarActiveMenuNameType>
    ) => {
      state.sidebarActiveMenuName = action.payload;
    },
  },
});

export const { updateSidebarActiveMenuName } = mainSideBarSlice.actions;

export default mainSideBarSlice.reducer;
