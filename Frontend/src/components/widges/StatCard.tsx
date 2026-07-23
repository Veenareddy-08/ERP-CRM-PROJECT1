import { IconType } from "react-icons";

interface Props {
  title: string;
  value: string;
  icon: IconType;
}


export default function StatCard({
  title,
  value,
  icon: Icon
}: Props) {

return (

<div className="stat-card">

<div className="stat-icon">
<Icon />
</div>


<div>
<h4>{title}</h4>
<h2>{value}</h2>
</div>


</div>

)

}