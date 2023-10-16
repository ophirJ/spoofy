import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SideMenu } from '../types/sideMenu'

export interface TableMode {
    currentTableMode: SideMenu
}

const initialState: TableMode = {
    currentTableMode: SideMenu.NONE
}

export const currentTableSlice = createSlice({
    name: 'currentTable',
    initialState,
    reducers: {
        setTableMode: (state, action: PayloadAction<SideMenu>) => {
            state.currentTableMode = action.payload;
        }
    }
})

export const { setTableMode } = currentTableSlice.actions;
export default currentTableSlice.reducer;