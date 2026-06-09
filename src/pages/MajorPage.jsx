import { useParams } from "react-router-dom";
import SemesterView from "../components/courses/SemesterView";

export default function MajorPage() {
  const { majorId } = useParams();
  return (
    <div style={{ paddingTop: "40px" }}>
      <SemesterView majorId={majorId} />
    </div>
  );
}
