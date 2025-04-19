<form onSubmit={handleSubmit}>
<label>
username:
<input type="text" value={username} onChange={handleUsernameChange}/>
</label>

{error && <p style={{color:'red'}}>{error}</p>
<label>
Password:
<input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
</label>

<button type="submit" disabled={!error}>Login</button>
</form>


// uncontrolled components.............

<form onSubmit={handleSubmit}>
<label>
email:
<input type="email" ref={emailRef} required />
</label>

<button type="submit">Subscribe</button>
</form>
