import { ReactElement } from "react";
import Loading from "../../utils/Loading/Loading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading />;
  } else if (props.list.length === 0) {
    if (props.emptyUI) {
      return props.emptyUI;
    }

    return <>There are no elements to display.</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  list?: any;
  loadingUI?: ReactElement;
  emptyUI?: ReactElement;
  children: ReactElement;
}
