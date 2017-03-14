const initState = {
	text: 'Hello World'
};

let id = 0

export default function hello(state = initState, action) {

	switch( action.type ) {

		case 'CLICK_CONTAINER':
		{
			id++;
			let text = "";
			
			switch (id) {
				case 1: text = "React+Redux"; break
				case 2: text = "I used ES7.. cool"; break
				case 3: text = "And postcss for style"; break
				case 4: text = "I packed this is from webpack"; break
				case 5: text = "Later i deploy its on GitHub"; break
				case 6: text = "A'm tired.. Sir"; break
				case 7: text = "Stop! Pls.."; break
				case 8: text = "Oh.. ok. Bay-bay"; break
				case 9: text = "Zzz."; break
				case 10: text = "Zzz.."; break
				case 11: text = "Zzz..."; break
				case 12: text = ":P"; break
				default: text = "..."; break
			}

			return Object.assign({}, state, {text: text})
		}

		default:
			return state;
	}
}