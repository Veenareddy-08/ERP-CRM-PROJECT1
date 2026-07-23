interface Props{

value:string;

onChange:(e:any)=>void;

}


export default function SearchBar({
value,
onChange
}:Props){


return(

<input

className="search"

placeholder="Search Customer..."

value={value}

onChange={onChange}

/>

)

}