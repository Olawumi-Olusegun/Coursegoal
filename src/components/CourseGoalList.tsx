import { type ReactNode } from "react";
import { CourseGoalProps } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";


type CourseGoalListProps = {
    goals: CourseGoalProps[];
    onDeleteGoal: (id: number) => void;
  }

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {

  if(goals.length <= 0) {
    return <InfoBox mode="hint">
      You have no course goal yet. Start adding some
    </InfoBox>
  }

  let warningBox: ReactNode;

  if(goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="medium">
      {"You're are collecting too many goals. Don't put too much in your plate"}
    </InfoBox>
  }

  return (
    <>
        { warningBox }
        <ul>
        {  goals.map(({id, title, description}) => (
            <li key={id}>
              <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
                <p>{description}</p>
              </CourseGoal>
            </li>
          ) ) 
        }
        </ul>
    </>
  )
}