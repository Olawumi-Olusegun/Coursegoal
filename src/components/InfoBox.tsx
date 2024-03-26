import { PropsWithChildren } from "react";


type HintBoxProps = PropsWithChildren<{
    mode: "hint";
}>

type WarningBoxProps = PropsWithChildren<{
    mode: "warning";
    severity: "low" | "medium" | "high"
}>

type InfoBoxProps =  HintBoxProps | WarningBoxProps;


export default function InfoBox(props: InfoBoxProps) {
    const { children, mode } = props;

    if(mode === "hint") {
    return (
        <>
            <aside className="infobox infobox-hint">
            <p>{children}</p>
            </aside>
        </>
        )
    }

    const { severity } = props;

  return (
    <>
     <aside className={`infobox infobox-warning warning--${severity} `}>
        <h2>Warning</h2>
        <p>{props.children}</p>
     </aside>
    </>
  )
}