function Footer() {
    return(
        <div id="join-us">
		<h1>Join Us</h1>

		<form>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="address" />
			<input type="text" placeholder="CITY" />
			<input id="short" type="text" placeholder="STATE" /> 
			<input id="short" type="text" placeholder="ZIP"/>
			<select name="newsweek" id="newsweek">
				<option value="newsweek">Newsweek</option>
			</select>
			<input id="special" type="radio" />
			<label for="male">1 year</label>
			<input id="special" type="radio" />
			<label for="male">2 years</label>
			<textarea>Comment</textarea>
		</form>

	</div>
    )
}

export default Footer;