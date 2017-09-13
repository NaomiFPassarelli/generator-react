import { sidebarSize, topbarSize } from "../../../constants/sizes";

export default {
  base: {
    textAlign: "center",
    display: "flex",
    height: "100%"
  },
  content: {
    height: `calc(100% - ${topbarSize}px)`,
    marginLeft: sidebarSize,
    marginTop: topbarSize,
    width: `calc(100% - ${sidebarSize}px)`
  },
  baseContent: {
    width: "100%",
    flex: 4
  }
};
