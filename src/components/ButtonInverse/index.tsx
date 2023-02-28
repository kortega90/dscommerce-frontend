
import './styles.css'

type Props ={
  value:string;
}

export default function ButtonInverse({value}:Props) {
  return (<div className="dsc-btn dsc-btn-white">
   {value}
    </div>);
}
