function Notes(){

let [notes,setNotes]=useState([])
return(
<ul>
{notes.map(note=>(
<li>{note.title}</li>
))}
</ul>
)}
