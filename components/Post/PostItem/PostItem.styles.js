import Constants from "constants";

export const localStyles = ({ theme, isRTL }) => ({
  container: {
    backgroundColor: theme.surface.primary,
    borderBottomColor: theme.background.primary,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    height: Constants.LIST_ITEM_HEIGHT,
  },
  detailsContainer: {
    //alignItems: isRTL ? "flex-end" : "flex-start",
    alignItems: "flex-start",
    marginEnd: "auto",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
  },
  statusDot: {
    borderRadius: Constants.STATUS_CIRCLE_SIZE / 2,
    height: Constants.STATUS_CIRCLE_SIZE,
    width: Constants.STATUS_CIRCLE_SIZE,
    marginTop: "auto",
    marginBottom: "auto",
  },
});