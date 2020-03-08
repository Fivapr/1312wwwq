export const selectIsOnline = state => state.core.isOnline;
export const selectReload = state => state.core.reloadChart;
export const selectTheme = state => state.core.theme;
export const selectIcons = state => state.core.icons;
export const selectIsMac = state => state.core.isMac;

// ui state
export const selectSettingsPage = state => state.core.settingPage;
export const selectIsSettingsOpen = state => state.core.settingOpen;
export const selectIsPairBarOpen = state => state.core.pairsBarOpen;
export const selectHistoryComponent = state => state.core.historyComponent;
export const selectShowAllAccounts = state => state.core.showAllAccounts;
export const selectShowAllPositions = state => state.core.showAllPositions;
export const selectShowAllPairs = state => state.core.showAllPairs;
export const selectOrderBookIsLoading = state => state.core.orderBookIsLoading;
export const selectTradesIsLoading = state => state.core.tradesIsLoading;
export const selectPairListSorting = state => state.core.pairListSorting;
