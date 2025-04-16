
let[note,setNote]=useState(null)
<form>
  <input type="text" value={note}/>
  <input type="submit"/>
  </form>

<form>
  <input type="text" onChange={updateNoteValue} value={note} />
  <input type="submit"/>
  </form>

// conditional operator
return(
  <div>
  {isAuthenticated ? (
    <span>Hello {user.name}</span>
) : (
  <span>please login</span>
)}
</div>
)
