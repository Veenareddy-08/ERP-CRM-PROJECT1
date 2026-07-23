interface Props{

label:string;

value:string;

onChange:(e:any)=>void;

}


export default function Input({
label,
value,
onChange
}:Props){


return(

<div className="input-field">

<label>
{label}
</label>


<input

value={value}

onChange={onChange}

/>


</div>

)

}